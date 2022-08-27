'use strict';

const DomElement = function (valueSelector, valueHeight, valueWidth, valueBg, valueFontSize) {
    this.selector = valueSelector;
    this.height = valueHeight + 'px';
    this.width = valueWidth + 'px';
    this.bg = valueBg;
    this.fontSize = valueFontSize + 'px';

    this.addHtml = function (str) {
        if (this.selector[0] === '.') {
            let div = document.createElement('div');
            let selector = this.selector.slice(1);
            div.className = selector;
            div.textContent = str;
            div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
            document.body.appendChild(div);
        } else if (this.selector[0] === '#') {
            let p = document.createElement('p');
            let selector = this.selector.slice(1);
            p.className = selector;
            p.textContent = str;
            p.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
            document.body.appendChild(p);
        }
    }
}

let element1 = new DomElement('.block', 100, 100, 'red', 25);
let element2 = new DomElement('.block', 200, 200, 'blue', 25);
element1.addHtml('Первый');
element2.addHtml('Второй');