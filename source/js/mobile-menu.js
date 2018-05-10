var button = document.querySelector('.page-header__button');
var menu = document.querySelector('.main-nav');

button.classList.remove('page-header__button--nojs');
menu.classList.remove('main-nav--nojs');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (button.classList.contains('page-header__button--opened')) {
    button.classList.remove('page-header__button--opened');
    menu.classList.remove('main-nav--opened');
  } else {
    button.classList.add('page-header__button--opened');
    menu.classList.add('main-nav--opened');
  }
})
