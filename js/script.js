'use strict';

$(document).ready(function () {
    let btn = document.querySelector('.main-banner__btn');
    btn.addEventListener('click', function () {
        console.log('Button clicked');
    })

    let rules = document.querySelector('.footer__rules'),
        popup = document.querySelector('.pop-up'),
        popupClose = document.querySelector('.pop-up__close');

    rules.addEventListener('click', function () {
        popup.style.display = 'flex';
    })

    popupClose.addEventListener('click', function () {
        popup.style.display = 'none';
    })

});