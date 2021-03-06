var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__button');
var pageHeader = document.querySelector('.page-header')

navMain.classList.remove('nav--nojs');
pageHeader.classList.add('page-header--closed');
navMain.classList.add('nav--closed');
navMain.classList.remove('nav--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    pageHeader.classList.remove('page-header--closed');
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
