import {createTypeElement, selectType} from '@components/create-elements.js';
import weaknessData from '@data/data.js';

const init = () => {
    let typeWrap = document.querySelector('#type-wrapper');
    Object.keys(weaknessData).forEach(key => {
        typeWrap.append(createTypeElement(key, 'button'));
    });
    let buttons = typeWrap.querySelectorAll('.type-button');
    buttons.forEach(but => {
        but.addEventListener('click', () => {
            selectType(but);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    document.querySelector("button[data-type='bug']").click();
});