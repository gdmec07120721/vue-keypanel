
export const hasTouch = 'ontouchstart' in window;

/**
 * 根据字符串生成DOM元素，只能有一个根元素
 */
export function parseDom(arg) {
    let objE = document.createElement('div');
    objE.innerHTML = arg;
    return objE.childNodes[0];
}

//首字母大写
export function firstStrtoUpperCase(str) {  
    return str.toLowerCase().replace(/( |^)[a-z]/g, val => val.toUpperCase());  
}  

//元素字母文本大小切换
export function capitalSwitch(el, type) {  
    if (el.dataset.key && /^[a-zA-Z]$/.test(el.dataset.key)) {
        let switch_text = el.dataset.key[type]();

        el.dataset.key = switch_text;
        el.innerHTML = switch_text;
    }

    if (el.children.length > 0) {
        Array.from(el.children).forEach(item => {
            capitalSwitch(item, type);
        })
    }
}  

//获取当前点击对象的父元素路径集合，包括点击对象
export function getEventPath(event) {
    let path = [];

    path.push(event);

    if (event.parentElement) {
        path = [...path, ...getEventPath(event.parentElement)];
    }

    return path;
}