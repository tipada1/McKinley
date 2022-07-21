const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const headerMenuRight = document.querySelector('.header__column--right');

burger.addEventListener('click', function () {
	headerMenu.classList.toggle('active');
	headerMenuRight.classList.toggle('active');
	burger.classList.toggle('active');
	document.body.classList.toggle('lock');
})