
//      Кнопка прокрутки вниз

let scrollBtn = document.querySelector('.scroll-down-btn');

scrollBtn.onclick = scrollDown;

function scrollDown () {
    window.scrollTo( { top: document.body.scrollHeight, behavior: "smooth"});
}


//      Табы

let tab;
let tabContent;

window.onload = function () {
    tabContent=document.getElementsByClassName('tabs-content');
    tab=document.getElementsByClassName('tab-control');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i=a; i < tabContent.length; i++ ){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('tab-control-active');
    }
}

document.getElementById('tabs').onclick=function (event) {
    let target=event.target;
    if (target.className == 'tab-control') {
        for (let i=0; i<tab.length; i++) {
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('tab-control-active');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}


//      Слайдер

let left = -540;
let slider = document.querySelector('.slider');
let sliderRight = document.querySelector('.slider-control.right');
let sliderLeft = document.querySelector('.slider-control.left')

slider.style.left = left + 'px';

sliderRight.onclick = toRight;
sliderLeft.onclick = toLeft;

function toRight() {
    if (Math.abs(left) < slider.clientWidth-540 ) {
        left = left - 540;
        slider.style.left = left + 'px';
    } else {
        slider.style.left = left + 'px';
    }
}

function toLeft() {
    if (Math.abs(left) < slider.clientWidth && Math.abs(left) != 0) {
        left = left + 540;
        slider.style.left = left + 'px';
    } else {
        slider.style.left = left + 'px';
    }
}


