/*
* 电话类型键盘
*/
function templateTel(params) {
    return `<div class="hui-keypanel-board ${params.closeKeyboard}" id="${params.id}" key="${params.key}">
            <ul class="hui-keypanel-board-tel">
                <li>
                    <div data-key="1" class="hui-keypanel-btn-default">1</div>
                    <div data-key="2" class="hui-keypanel-btn-default">2</div>
                    <div data-key="3" class="hui-keypanel-btn-default">3</div>
                    <div data-key="4" class="hui-keypanel-btn-default">4</div>
                    <div data-key="5" class="hui-keypanel-btn-default">5</div>
                    <div data-key="6" class="hui-keypanel-btn-default">6</div>
                    <div data-key="7" class="hui-keypanel-btn-default">7</div>
                    <div data-key="del" class="iconfont-keypanel icon-keypanel-delect hui-keypanel-btn-info"></div>
                    <div data-key="8" class="hui-keypanel-btn-default">8</div>
                    <div data-key="9" class="hui-keypanel-btn-default">9</div>
                    <div data-key="0" class="hui-keypanel-btn-default">0</div>
                    <div data-key="ok" class="hui-keypanel-btn-primary">完成</div>
                </li>
            </ul>
        </div>`;
};

function templateNumber(params) {
    return `<div class="hui-keypanel-board ${params.closeKeyboard}" id="${params.id}" key="${params.key}">
                <ul class="hui-keypanel-board-number">
                    <li class="board-top">
                        <div  data-key="1" class="hui-keypanel-btn-default">1</div>
                        <div data-key="2" class="hui-keypanel-btn-default">2</div>
                        <div data-key="3" class="hui-keypanel-btn-default">3</div>
                        <div data-key="del" class="iconfont-keypanel icon-keypanel-delect hui-keypanel-btn-info"></div>
                        <div data-key="4" class="hui-keypanel-btn-default">4</div>
                        <div data-key="5" class="hui-keypanel-btn-default">5</div>
                        <div data-key="6" class="hui-keypanel-btn-default">6</div>
                        <div data-key="clear" class="iconfont icon-delect hui-keypanel-btn-info"></div>
                        <div data-key="7" class="hui-keypanel-btn-default">7</div>
                        <div data-key="8" class="hui-keypanel-btn-default">8</div>
                        <div data-key="9" class="hui-keypanel-btn-default">9</div>
                        <div data-key="hide" class="iconfont-keypanel icon-keypanel-keyboard hui-keypanel-btn-info"></div>                 
                    </li>
                    <li class="board-bottom">
                        <div data-key="english" class="hui-keypanel-btn-info">ABC</div>
                        <div data-key="0" class="hui-keypanel-btn-default">0</div>
                        <div data-key="." class="hui-keypanel-btn-info">.</div>
                        <div data-key="ok" class="hui-keypanel-btn-primary">确 定</div>                 
                    </li>
                </ul>
            </div>`;
}

function templateNumAndSymbol(params) {
    return `<div class="hui-keypanel-board ${params.closeKeyboard}" id="${params.id}" key="${params.key}">
                <ul class="hui-keypanel-board-numAndSymbol">
                    <li>
                        <div data-key="1" class="hui-keypanel-btn-default">1</div>
                        <div data-key="2" class="hui-keypanel-btn-default">2</div>
                        <div data-key="3" class="hui-keypanel-btn-default">3</div>
                        <div data-key="4" class="hui-keypanel-btn-default">4</div>
                        <div data-key="5" class="hui-keypanel-btn-default">5</div>
                        <div data-key="6" class="hui-keypanel-btn-default">6</div>
                        <div data-key="7" class="hui-keypanel-btn-default">7</div>
                        <div data-key="8" class="hui-keypanel-btn-default">8</div>
                        <div data-key="9" class="hui-keypanel-btn-default">9</div>
                        <div data-key="0" class="hui-keypanel-btn-default">0</div>
                    </li>
                    <li>
                        <div data-key="-" class="hui-keypanel-btn-default">-</div>
                        <div data-key="/" class="hui-keypanel-btn-default">/</div>
                        <div data-key=":" class="hui-keypanel-btn-default">:</div>
                        <div data-key=";" class="hui-keypanel-btn-default">;</div>
                        <div data-key="(" class="hui-keypanel-btn-default">(</div>
                        <div data-key=")" class="hui-keypanel-btn-default">)</div>
                        <div data-key="$" class="hui-keypanel-btn-default">$</div>
                        <div data-key="&" class="hui-keypanel-btn-default">&</div>
                        <div data-key="@" class="hui-keypanel-btn-default">@</div>
                        <div data-key=""" class="hui-keypanel-btn-default">"</div>
                    </li>
                    <li>
                        <div class="btn-info">
                            <div data-key="symbol" class="hui-keypanel-btn-info">#+=</div>
                        </div>
                        <div data-key="." class="hui-keypanel-btn-default">.</div>
                        <div data-key="," class="hui-keypanel-btn-default">,</div>
                        <div data-key="?" class="hui-keypanel-btn-default">?</div>
                        <div data-key="!" class="hui-keypanel-btn-default">!</div>
                        <div data-key="\\" class="hui-keypanel-btn-default">\\</div>
                        <div class="btn-info" data-key="del">
                            <div data-key="del" class="iconfont-keypanel icon-keypanel-delect hui-keypanel-btn-info"></div>
                        </div>
                    </li>
                    <li>
                        <div data-key="english" class="hui-keypanel-btn-info">ABC</div>
                        <div data-key="number" class="iconfont-keypanel icon-keypanel-earth hui-keypanel-btn-info"></div>
                        <div data-key="empty" class="hui-keypanel-btn-default hui-keypanel-btn-empty">空格</div>
                        <div data-key="ok" class="hui-keypanel-btn-primary">确认</div>
                    </li>
                </ul>
            </div> `;
}

function templateDigital(params) {
    return `<div class="hui-keypanel-board ${params.closeKeyboard}" id="${params.id}" key="${params.key}">
                <ul class="hui-keypanel-board-digital">
                    <li class="hui-keypanel-board-left">
                        <div data-key="1" class="hui-keypanel-btn-default">1</div>
                        <div data-key="2" class="hui-keypanel-btn-default">2</div>
                        <div data-key="3" class="hui-keypanel-btn-default">3</div>
                        <div data-key="4" class="hui-keypanel-btn-default">4</div>
                        <div data-key="5" class="hui-keypanel-btn-default">5</div>
                        <div data-key="6" class="hui-keypanel-btn-default">6</div>
                        <div data-key="7" class="hui-keypanel-btn-default">7</div>
                        <div data-key="8" class="hui-keypanel-btn-default">8</div>
                        <div data-key="9" class="hui-keypanel-btn-default">9</div>
                        <div data-key="." class="hui-keypanel-btn-info">.</div>
                        <div data-key="0" class="hui-keypanel-btn-default">0</div>
                        <div data-key="hide" class="iconfont-keypanel icon-keypanel-keyboard hui-keypanel-btn-info"></div>
                    </li>
                    <li class="hui-keypanel-board-right">
                        <div data-key="del" class="iconfont-keypanel icon-keypanel-delect hui-keypanel-btn-info"></div>
                        <div data-key="ok" class="hui-keypanel-btn-primary">完成</div>
                    </li>
                </ul>
            </div>`;
}

function templateStock(params) {
    return `<div class="hui-keypanel-board ${params.closeKeyboard}" id="${params.id}" key="${params.key}">
                <ul class="hui-keypanel-board-stock">
                    <li class="board-left">
                        <div data-key="600" class="hui-keypanel-btn-default">600</div>
                        <div data-key="601" class="hui-keypanel-btn-default">601</div>
                        <div data-key="000" class="hui-keypanel-btn-default">000</div>
                        <div data-key="002" class="hui-keypanel-btn-default">002</div>
                        <div data-key="300" class="hui-keypanel-btn-default">300</div>
                    </li>
                    <li class="board-right">
                        <div class="board-right-top">
                            <div  data-key="1" class="hui-keypanel-btn-default">1</div>
                            <div data-key="2" class="hui-keypanel-btn-default">2</div>
                            <div data-key="3" class="hui-keypanel-btn-default">3</div>
                            <div data-key="del" class="iconfont-keypanel icon-keypanel-delect hui-keypanel-btn-info"></div>
                            <div data-key="4" class="hui-keypanel-btn-default">4</div>
                            <div data-key="5" class="hui-keypanel-btn-default">5</div>
                            <div data-key="6" class="hui-keypanel-btn-default">6</div>
                            <div data-key="clear" class="iconfont icon-delect hui-keypanel-btn-info"></div>
                            <div data-key="7" class="hui-keypanel-btn-default">7</div>
                            <div data-key="8" class="hui-keypanel-btn-default">8</div>
                            <div data-key="9" class="hui-keypanel-btn-default">9</div>
                            <div data-key="hide" class="iconfont-keypanel icon-keypanel-keyboard hui-keypanel-btn-info"></div>                        
                        </div>
                        <div class="board-right-bottom">
                            <div data-key="english" class="hui-keypanel-btn-info">ABC</div>
                            <div data-key="0" class="hui-keypanel-btn-default">0</div>
                            <div data-key="ok" class="hui-keypanel-btn-primary">确 定</div>
                        </div>
                    </li>
                </ul>
            </div>`;
}

function templateSymbol(params) {
    return `<div class="hui-keypanel-board ${params.closeKeyboard}" id="${params.id}" key="${params.key}">
                <ul class="hui-keypanel-board-symbol">
                    <li>
                        <div data-key="[" class="hui-keypanel-btn-default">[</div>
                        <div data-key="]" class="hui-keypanel-btn-default">]</div>
                        <div data-key="{" class="hui-keypanel-btn-default">{</div>
                        <div data-key="}" class="hui-keypanel-btn-default">}</div>
                        <div data-key="#" class="hui-keypanel-btn-default">#</div>
                        <div data-key="%" class="hui-keypanel-btn-default">%</div>
                        <div data-key="^" class="hui-keypanel-btn-default">^</div>
                        <div data-key="*" class="hui-keypanel-btn-default">*</div>
                        <div data-key="+" class="hui-keypanel-btn-default">+</div>
                        <div data-key="=" class="hui-keypanel-btn-default">=</div>
                    </li>
                    <li>
                        <div data-key="-" class="hui-keypanel-btn-default">-</div>
                        <div data-key="/" class="hui-keypanel-btn-default">/</div>
                        <div data-key="|" class="hui-keypanel-btn-default">|</div>
                        <div data-key="~" class="hui-keypanel-btn-default">~</div>
                        <div data-key="<" class="hui-keypanel-btn-default"><</div>
                        <div data-key=">" class="hui-keypanel-btn-default">></div>
                        <div data-key="￥" class="hui-keypanel-btn-default">￥</div>
                        <div data-key="€" class="hui-keypanel-btn-default">€</div>
                        <div data-key="£" class="hui-keypanel-btn-default">£</div>
                        <div data-key="·" class="hui-keypanel-btn-default">·</div>
                    </li>
                    <li>
                        <div data-key="numAndSymbol" class="btn-info">
                            <div data-key="numAndSymbol" class="hui-keypanel-btn-info">123</div>
                        </div>
                        <div data-key="." class="hui-keypanel-btn-default">.</div>
                        <div data-key="," class="hui-keypanel-btn-default">,</div>
                        <div data-key="?" class="hui-keypanel-btn-default">?</div>
                        <div data-key="!" class="hui-keypanel-btn-default">!</div>
                        <div data-key="\\" class="hui-keypanel-btn-default">\\</div>
                        <div data-key="del" class="btn-info">
                            <div data-key="del" class="iconfont-keypanel icon-keypanel-delect hui-keypanel-btn-info"></div>
                        </div>
                    </li>
                    <li>
                        <div data-key="english" class="hui-keypanel-btn-info">ABC</div>
                        <div data-key="number" class="iconfont-keypanel icon-keypanel-earth hui-keypanel-btn-info"></div>
                        <div data-key="empty" class="hui-keypanel-btn-default hui-keypanel-btn-empty">空格</div>
                        <div data-key="ok" class="hui-keypanel-btn-primary">确认</div>
                    </li>
                </ul>
            </div> `;
}

function templateEnglish(params) {
    return `<div class="hui-keypanel-board ${params.closeKeyboard}" id="${params.id}" key="${params.key}">
                <ul class="hui-keypanel-board-english">
                    <li>
                        <div data-key="q" class="hui-keypanel-btn-default">q</div>
                        <div data-key="w" class="hui-keypanel-btn-default">w</div>
                        <div data-key="e" class="hui-keypanel-btn-default">e</div>
                        <div data-key="r" class="hui-keypanel-btn-default">r</div>
                        <div data-key="t" class="hui-keypanel-btn-default">t</div>
                        <div data-key="y" class="hui-keypanel-btn-default">y</div>
                        <div data-key="u" class="hui-keypanel-btn-default">u</div>
                        <div data-key="i" class="hui-keypanel-btn-default">i</div>
                        <div data-key="o" class="hui-keypanel-btn-default">o</div>
                        <div data-key="p" class="hui-keypanel-btn-default">p</div>
                    </li>
                    <li>
                        <div>
                            <div data-key="a" class="hui-keypanel-btn-default">a</div>
                            <div data-key="s" class="hui-keypanel-btn-default">s</div>
                            <div data-key="d" class="hui-keypanel-btn-default">d</div>
                            <div data-key="f" class="hui-keypanel-btn-default">f</div>
                            <div data-key="g" class="hui-keypanel-btn-default">g</div>
                            <div data-key="h" class="hui-keypanel-btn-default">h</div>
                            <div data-key="j" class="hui-keypanel-btn-default">j</div>
                            <div data-key="k" class="hui-keypanel-btn-default">k</div>
                            <div data-key="l" class="hui-keypanel-btn-default">l</div>                        
                        </div>
                    </li>
                    <li>
                        <div data-key="textTransform" class="btn-info english-btn-info">
                            <div data-key="textTransform" class="iconfont-keypanel icon-keypanel-shift hui-keypanel-btn-info"></div>
                        </div>
                        <div data-key="z" class="hui-keypanel-btn-default">z</div>
                        <div data-key="x" class="hui-keypanel-btn-default">x</div>
                        <div data-key="c" class="hui-keypanel-btn-default">c</div>
                        <div data-key="v" class="hui-keypanel-btn-default">v</div>
                        <div data-key="b" class="hui-keypanel-btn-default">b</div>
                        <div data-key="n" class="hui-keypanel-btn-default">n</div>
                        <div data-key="m" class="hui-keypanel-btn-default">m</div>
                        <div data-key="del" class="btn-info english-btn-info">
                            <div data-key="del" class="iconfont-keypanel icon-keypanel-delect hui-keypanel-btn-info"></div>
                        </div>
                    </li>
                    <li>
                        <div data-key="numAndSymbol" class="hui-keypanel-btn-info">123</div>
                        <div data-key="number" class="iconfont-keypanel icon-keypanel-earth hui-keypanel-btn-info"></div>
                        <div data-key="empty" class="hui-keypanel-btn-default hui-keypanel-btn-empty">空格</div>
                        <div data-key="ok" class="hui-keypanel-btn-primary">确认</div>
                    </li>
                </ul>
            </div> `;
}

export default {
    templateTel: params => {
        return templateTel(params); 
    },
    templateNumber: params => {
        return templateNumber(params);
    },
    templateDigital: params => {
        return templateDigital(params);
    },
    templateNumandsymbol: params => {
        return templateNumAndSymbol(params);
    },
    templateStock: params => {
        return templateStock(params);
    },
    templateSymbol: params => {
        return templateSymbol(params);
    },
    templateEnglish: params => {
        return templateEnglish(params);
    }
}


