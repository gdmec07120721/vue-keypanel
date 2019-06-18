# 自定义键盘

## 代码使用

### 基本用法

通过 `v-model` 绑定自定义键盘输入的值


```html
<template>
    <keypanel v-model="value"/>
</template>

<script>

import keypanel from 'vue-keypanel';

export default {
    components: {keypanel},
    data () {
        return {
            value: ''
        };
    }
};
</script>

```

### 不同类型键盘

根据 `type` 属性定义不同类型的键盘

支持 `tel`、 `number`、 `digital`、 `numAndSymbol`、 `stock`、 `symbol`、 `english`，默认为 `english`

`extra-parent-el` 属性表示当显示键盘时，需要给指定的父元素添加 `margin-top`，为了确保 `input` 输入框不被键盘挡住


```html
<template>
    <keypanel type="tel" extra-parent-el=".hui-flexview"/>
</template>

```

<b>提示：</b>

`digital` 、 `number` 、`numAndSymbol` 的区别：

`digital` 表示仅显示数字的键盘，不可切换其他模式，如：`english`、`symbol` 等；

`number` 表示显示数字的键盘，还显示符号，可切换其他模式，如：`english`、`symbol` 等；

`numAndSymbol` 表示显示数字和符号的键盘；


### Props 

| 参数 | 说明 | 类型 | 默认值 | 
| ------------ | ------------ | ------------ | ------------ |
| v-model | 绑定值 | String | - | 
| type | 输入框类型，可选值为 `tel`、 `number`、 `digital`、 `numAndSymbol`、 `stock`、 `symbol`、 `english` | String | english |
| placeholder | 输入框占位文本 | String | 请输入... |
| close-keyboard | 默认是否不显示键盘 | Boolean | true |
| extra-parent-el | 指定额外边距的父元素（值为指定一个或多个匹配元素的 CSS 选择器。 可以使用它们的 id, 类，如：'#id' 或者 '.class'） | String | - |

### Events
| 事件 | 说明 | 回调参数 |
| ------------ | ------------ | ------------ |
| on-input | 在点击键盘输入值时触发 | 返回当前点击值 |
| on-close | 在键盘关闭时触发 | - |
| on-clear | 当清空键盘按钮触发时 | - |

 


