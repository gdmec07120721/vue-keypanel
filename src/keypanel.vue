<template>
    <div class="hui-keypanel" :id="`keypanel-input-${id}`" :ref="`keypanel-input-${id}`">
        <div 
            class="hui-keypanel-input" 
            @click.stop.prevent="keypanelFocus" 
            @touchend.stop.prevent="keypanelFocus"
        >
            <span 
                v-for="(val, index) in value_arr"
                class="hui-keypanel-input-text" 
                :class="{'cursor-style' : (val == '〡' && keyboard.props.is_focus)}"
                @click.stop.prevent="keypanelInsert(index, $event)" 
                @touchend.stop.prevent="keypanelInsert(index, $event)"
                v-html="val != '〡' ? val : ''"
            ></span>
            <span v-if="value_arr.length <= 0 && !keyboard.props.is_focus" class="hui-keypanel-input-placeholder">{{placeholder}}</span>
        </div>
    </div> 
</template>

<script>
import Vue from 'vue'
import Keyboard from './keyboard'
import {getEventPath} from './model/utils';

Vue.prototype.$keyboards = [];

export default {
    name: 'h-keypanel',
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            validator (value) {
                // digital 与 number 的区别：
                // digital 表示仅显示数字，不可切换其他模式，如：english、symbol 等
                // number 表示显示数字，还显示符号，可切换其他模式，如：english、symbol 等
                return ['tel', 'number', 'digital', 'numAndSymbol', 'stock', 'symbol', 'english'].indexOf(value) > -1;
            },
            default: 'english'
        },
        //当显示键盘时，需要给指定的父元素添加 margin-top，为了确保 input 输入框不被键盘挡住
        extraParentEl: {
            type: String,
            default: ''
        },
        closeKeyboard: { //键盘是否默认关闭
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: '请输入...'
        }
    },
    watch: {
        type(nv, ov) {
            this.keypanel_type = nv;
        },
        'keyboard.props.is_focus': function(nv, ov) {
            if (ov && !nv) {
                //失焦
                this.$emit('on-blur');
            }
        }
    },
    data() {
        return {
            id: null,
            value_arr: [],
            keypanel_type: '',
            keyboard: null,
        }
    },
    created() {
        this.keypanel_type = this.type;
        this.value_arr = this.setValueArr(this.value);
        this.initKeyboard({defaultResult: this.value_arr});
        this.$keyboards.push(this.keyboard);
    },
    mounted() {
        this.keyboard.props.keypanel = this.$refs[`keypanel-input-${this.id}`];
        this.bindEvent();

        if (!this.closeKeyboard) {
            this.keypanelFocus();
        }
    },
    methods: {
        //关闭已打开并且是非当前聚焦 input 的键盘类型 
        onlyThisKeyboardActived(keyboard) {
            this.$keyboards.map(item => {
                if (item != keyboard && item.props.is_focus) {
                    item.close();
                }
                return item;
            });
        },
        bindEvent() {
            let self = this;
            let el_keypanel = this.keyboard.props.keypanel;
            let el_keyboard = this.keyboard.keyboard;

            document.addEventListener('click', e => {
                e = e || arguments.callee.caller.arguments[0] || window.event; 

                //兼容非chrome浏览器，没有e.path对象
                if (!e.path) {
                    e.path = getEventPath(e.target);
                }

                if ((e.path.indexOf(el_keypanel) <= -1 || e.path.indexOf(el_keyboard)) && self.keyboard.props.is_focus) {
                    self.keyboard.close();
                }
            }, false);
        },
        initKeyboard(options = {}) {
            this.id = new Date().getTime();
            this.keyboard = new Keyboard(Object.assign({}, {
                id: this.id,
                type: this.keypanel_type,
                key: this.id,
                closeKeyboard: this.closeKeyboard, //键盘是否默认关闭
                is_focus: false, //input是否聚焦
                vueComponent: this,
                extraParentEl: this.extraParentEl,
                onInput: (input_key, result) => {
                    this.$emit('input', this.getResult(result));
                    this.$emit('on-input', input_key);
                },
                onDelete: result => {
                    this.$emit('input', this.getResult(result));
                },
                onClose: () => {
                    this.keyboard.props.is_focus = false;
                    this.keypanelBlur();
                    this.$emit('on-close');
                },
                onClear: result => {
                    this.value_arr = result;
                    this.$emit('on-clear');
                },
                onConfirm: result => {
                    this.$emit('input', this.getResult(result));
                },
                keyboardChange: type => {
                    this.keyboardChange(type);
                } 
            }, options));
        },
        keypanelFocus() {
            this.onlyThisKeyboardActived(this.keyboard);

            //由于存在切换键盘类型 so...
            //判断当前的键盘类型是否为默认设置的键盘类型，并且 input 是否没有聚焦
            if (this.keyboard.props.type != this.type && !this.keyboard.props.is_focus) {
                this.value_arr.push('〡');
                this.keyboardChange(this.type);

                return false;
            }

            if (this.keyboard.props.is_focus) {
                this.value_arr.splice(this.value_arr.indexOf('〡'), 1);
                this.value_arr.push('〡');
            } else {
                this.keyboard.props.is_focus = true;
                this.value_arr.push('〡');
                this.keyboard.props.result = this.value_arr;
                this.keyboard.show();
            }
        },
        keypanelBlur() {
            this.value_arr.splice(this.value_arr.indexOf('〡'), 1);
        },
        keypanelInsert(index, event) {
            this.onlyThisKeyboardActived(this.keyboard);

            //获取原光标 index
            let cursor_index = this.value_arr.indexOf('〡');
            let virtual_val = 0;

            //判断是否已经聚焦
            if (cursor_index > -1) { //是
                //去掉原光标后，新加入的光标是否需要重新改变
                if (index < cursor_index) {//当前聚焦位置在原光标前面
                    virtual_val = -1;
                } else if (index > cursor_index) {//当前聚焦位置在原光标后面
                    virtual_val = 0;
                } else {
                    return false;
                }

                //去掉原光标
                this.value_arr.splice(cursor_index, 1);
            } else { //否
                //由于存在切换键盘类型 so...
                //判断当前的键盘类型是否为默认设置的键盘类型，并且 input 是否没有聚焦
                if (this.keyboard.props.type != this.type) {
                    this.keyboardChange(this.type);
                } else {
                    this.keyboard.props.is_focus = true;
                    this.keyboard.props.result = this.value_arr;
                    this.keyboard.show();                    
                }
            }

            //获取当前点击的 clientX
            let client_x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
            //获取当前点击元素的 width
            let el_width = event.srcElement.offsetWidth;
            //获取当前点击元素 width + offsetLeft
            let el_all_x = el_width + event.srcElement.offsetLeft;
            //获取当前点击元素中间 X 位置
            let el_min_x = event.srcElement.offsetLeft + (el_width / 2);

            //判断当前点击的位置是当前元素的左边还是右边
            if (client_x >= el_min_x) {
                //光标显示在当前点击元素的右边
                this.value_arr.splice((index + 1 + virtual_val), 0, '〡');
            } else {
                //光标显示在当前点击元素的左边
                this.value_arr.splice((index + virtual_val), 0, '〡');
            }
        },
        //键盘类型切换
        keyboardChange(type) {
            //获取在$keyboards中即将被切换的键盘位置
            let old_keyboard_index = this.$keyboards.indexOf(this.keyboard);
            //获取即将被切换的键盘元素
            let keyboard_el = document.querySelector(`#${this.keyboard.props._id}`);

            if (keyboard_el) {
                document.querySelector('body').removeChild(keyboard_el);
            }

            this.keypanel_type = type;
            this.initKeyboard({
                defaultResult: this.value_arr,
                closeKeyboard: false,
                is_focus: true
            });
            this.$keyboards.splice(old_keyboard_index, 1, this.keyboard);
            this.$nextTick(() => {
                this.keyboard.props.keypanel = this.$refs[`keypanel-input-${this.id}`];
                this.bindEvent();
            })
        },
        setValueArr(value) {
            return value ? value.split('') : [];
        },
        getResult(result) {
            return result.join('');
        }
    },
    destroyed() {
        this.$keyboards.splice(this.$keyboards.indexOf(this.keyboard), 1);
    }
}
</script>

<style lang="scss">
   @import "styles/keypanel.scss";
</style>
