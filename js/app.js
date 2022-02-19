const menu = document.querySelector('.menu');
const btnHamburguer = document.querySelector('.hamburguer');
const btnMenuClose = document.querySelector('#btnMenuClose');

const cart = document.querySelector('.cart');
const btnCart = document.querySelector('.btnCart')

btnHamburguer.addEventListener('click', onHamburguerClick);
btnMenuClose.addEventListener('click', onBtnCloseMenuClick );

btnCart.addEventListener('click', openCart);

function onHamburguerClick() {
    menu.classList.remove('hidden');
}

function onBtnCloseMenuClick() {
    menu.classList.add('hidden');
}

function openCart() {
    cart.classList.toggle('hidden');
}

