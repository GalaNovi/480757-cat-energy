var button = document.querySelector('.page-header__button');
var menu = document.querySelector('.main-nav');
var beforeBtn = document.querySelector('.slider__toggle--before');
var afterBtn = document.querySelector('.slider__toggle--after');
var beforeSlide = document.querySelector('.slider__item--before');
var afterSlide = document.querySelector('.slider__item--after');
var indicator = document.querySelector('.slider__indicator-green');

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

beforeBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  afterSlide.classList.remove('slider__item--active');
  beforeSlide.classList.add('slider__item--active');
  indicator.classList.add('slider__indicator-green--left');
})

afterBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  beforeSlide.classList.remove('slider__item--active');
  afterSlide.classList.add('slider__item--active');
  indicator.classList.remove('slider__indicator-green--left');
})
