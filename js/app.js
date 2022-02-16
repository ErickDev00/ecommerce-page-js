const menu = document.querySelector('.menu');
const btnHamburguer = document.querySelector('.hamburguer');
const btnMenuClose = document.querySelector('#btnMenuClose');

btnHamburguer.addEventListener('click', onHamburguerClick);

btnMenuClose.addEventListener('click', onBtnCloseMenuClick );

function onHamburguerClick() {
    menu.classList.remove('hidden');
}

function onBtnCloseMenuClick() {
    menu.classList.add('hidden');
}

