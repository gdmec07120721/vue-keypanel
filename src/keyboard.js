import {parseDom, firstStrtoUpperCase, hasTouch, capitalSwitch} from './model/utils';
import templateModel from './model/template'

const inputEvt = hasTouch ? 'touchend' : 'click';

export default class Keyboard {
    static generateKeyboardPanel (params, type, template = '') {
        if (!template) {
            template = templateModel[`template${firstStrtoUpperCase(type)}`](params);
        }
        
        return parseDom(template);
    }

    constructor(options = {}) {
        let render_params = {};

        this.props = options;
        this.props._id = `keyboard-${options.id}`;
        this.props.result = options.defaultResult ? options.defaultResult : [];
        //当显示键盘时，需要给指定的父元素添加 margin-top，为了确保 input 输入框不被键盘挡住
        this.props.extra_parent_el = options.extraParentEl ? document.querySelector(options.extraParentEl) : null;

        render_params.id = this.props._id;
        render_params.key = options.key || '';
        render_params.closeKeyboard = options.closeKeyboard ? 'hide' : '';

        this.render(render_params, options.type);
        this.bindEvent();
    }

    render(params, type) {
        let wrapper_el = document.querySelector('body');
        let keyboard_el = Keyboard.generateKeyboardPanel(params, type);

        wrapper_el.appendChild(keyboard_el);
    }

    bindEvent() {
        this.keyboard = document.querySelector(`#${this.props._id}`);

        this.handles = this.keyboardhandle();
        this.close = e => this.closeHandler();
        this.show = e => this.showHandler();
        this.input = e => this.inputHandler(e);
        this.keyboard.addEventListener(inputEvt, this.input, false);
    }

    inputHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        if (Object.keys(e.target.dataset).indexOf('key') <= -1) {
            return false;
        }

        let target = e.target;
        let input_key = target.dataset.key;

        //textTransform 表示切换大小写的键名
        if (input_key != 'textTransform') {
            //给点击的 target 添加 active 样式名
            target.classList.add('active');

            window.setTimeout(() => {
                //100ms 后移除 target 的 active 样式名 模拟 :active 
                target.classList.remove('active');
            }, 100);            
        }

        if (this.props.result.indexOf('〡') <= -1) {
            return false;
        }

        if (this.handles[input_key]) {
            this.handles[input_key](e);
        } else { //输入 key
            if (/(600|601|000|002|300)/.test(input_key)) {
                input_key.split('').forEach(item => {
                    //在光标前位置添加 input_key
                    this.props.result.splice(this.getInsertIndex(), 0, item);
                }) 
            } else {
                //在光标前位置添加 input_key
                this.props.result.splice(this.getInsertIndex(), 0, input_key);
            }
            
            this.props.onInput && this.props.onInput(input_key, this.props.result);
        }
    }

    showHandler() {
        this.keyboard.classList.remove('hide');
        this.props.onShow && this.props.onShow();

        if (!this.props.extra_parent_el) {
            this.getParentEl(this.props.vueComponent);
        }

        //获取 input 的高度
        let keypanel_h = this.props.keypanel.getBoundingClientRect().height;
        //获取 input 距离文档 top 部距离
        let keypanel_y = this.getKeypanelOffsetTop(this.props.extra_parent_el);
        //额外添加的 offset ，为了确保 input 输入框在可视区域
        let el_extra_offset = (keypanel_y + keypanel_h) - this.getViewHeight();

        if (el_extra_offset > 0) {
            this.props.extra_parent_el.style.marginTop = `-${el_extra_offset}px`;
        }
    }

    closeHandler() {
        if (this.props.extra_parent_el) {
            this.props.extra_parent_el.style.marginTop = 0;
        }
        this.keyboard.classList.add('hide');
        this.props.onClose && this.props.onClose();
    }

    keyboardhandle() {
        return {
            empty: () => {
                this.props.result.splice(this.getInsertIndex(), 0, '&nbsp;');
                this.props.onInput && this.props.onInput('&nbsp;', this.props.result);
            },
            del: () => { //删除
                //获取光标的位置
                let cursor_index = this.props.result.indexOf('〡');
                //获取光标前删除 input_key 位置
                let input_index = cursor_index - 1;

                if (this.props.result.length > 1 && this.props.result.indexOf('〡') > 0) {
                    //在光标前位置删除 input_key
                    this.props.result.splice(input_index, 1);
                    this.props.onDelete && this.props.onDelete(this.props.result);
                }
            },
            clear: () => { //清空 
                this.props.result = this.props.result.filter(item => item == '〡');
                this.props.onClear && this.props.onClear(this.props.result);
            },
            hide: () => { //隐藏
                this.closeHandler();
            },
            ok: () => { //完成
                this.closeHandler();
                this.props.onConfirm && this.props.onConfirm(this.props.result);
            },
            english: () => {
                this.keyboardChange('english');
            },
            number: () => {
                this.keyboardChange('number');
            },
            numAndSymbol: () => {
                this.keyboardChange('numAndSymbol');
            },
            symbol: () => {
                this.keyboardChange('symbol');
            },
            textTransform: e => {
                if (e.target.classList.contains('icon-keypanel-shift1')) {
                    //小写
                    e.target.classList.remove('icon-keypanel-shift1');
                    e.target.classList.add('icon-keypanel-shift');
                    capitalSwitch(this.keyboard, 'toLowerCase');
                } else {
                    //大写
                    e.target.classList.remove('icon-keypanel-shift');
                    e.target.classList.add('icon-keypanel-shift1');
                    capitalSwitch(this.keyboard, 'toUpperCase');
                }
            }
        }
    }

    keyboardChange(type) {
        document.querySelector('body').removeChild(this.keyboard);
        this.props.keyboardChange(type);
    }

    // 获取文本插入的位置
    getInsertIndex() {
        //获取光标的位置
        let cursor_index = this.props.result.indexOf('〡');

        //获取光标前添加 input_key 位置
        return cursor_index - 1 < 0 ? 0 : cursor_index;
    }

    //获取父组件
    getParentEl(vueComponent) {
        //获取减去键盘以外的可视区域高度
        let view_height = this.getViewHeight()

        //判断当前元素的元素盒子高度是否大于可视区域高度，因为需要给大于可视区域高度的父元素添加额外外边距
        if (vueComponent.$parent.$el.clientHeight > view_height) {
            this.props.extra_parent_el = vueComponent.$parent.$el;
        } else {
            this.getParentEl(vueComponent.$parent);
        }
    }

    //获取减去键盘以外的可视区域高度
    getViewHeight() {
        //减去键盘以外的可视区域
        return document.documentElement.clientHeight - this.keyboard.clientHeight;
    }

    //获取输入框距离相对 top 的位置
    getKeypanelOffsetTop(parent_el) {
        let parent_el_position = window.getComputedStyle(parent_el).position;

        //判断是否为相对定位或者固定定义
        if (parent_el_position == 'absolute' || parent_el_position == 'fixed') {  //是
            //那么 top 的值只需取相对父元素 top 的位置
            return this.props.keypanel.getBoundingClientRect().top;
        } else { // 否
            // top 值为取相对文档流上偏移的位置
            return this.props.keypanel.offsetTop;
        }
    }

} 