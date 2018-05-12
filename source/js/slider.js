var beforeBtn = document.querySelector('.slider__toggle--before');
var afterBtn = document.querySelector('.slider__toggle--after');
var beforeSlide = document.querySelector('.slider__item--before');
var afterSlide = document.querySelector('.slider__item--after');
var indicator = document.querySelector('.slider__indicator-green');

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
