//--Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
}

//--Remove Menu Mobile
//--при нажатии на пункт меню на шторке-шторка убирается :)
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  //when we click on each nav-link, we remove the active class
  navMenu.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//--Swiper
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  grabCursor: true,
  loop: 'true',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//-Изменение цвета header при прокрутке
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//--New Swiper
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  loop: 'true',
});

//--Scroll active section
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' +  sectionId + ']').classList.add('active')
    }else{
      document.querySelector('.nav-menu a[href*=' +  sectionId + ']').classList.remove('active')
    }
  });
}
window.addEventListener('scroll', scrollActive);

//--Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 460) scrollUp.classList.add('active'); else scrollUp.classList.remove('acttive');
}
window.addEventListener('scroll', scrollUp)

//--Dark-Light Mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

//--Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 150,
});

sr.reveal('.home-swiper, .new-swiper, .newsletter-container');
sr.reveal('.category-data, .trick-content, .footer-content', {interval: 100});
sr.reveal('.about-data, .discount-container img', {origin: 'left'});
sr.reveal('.about-container img, .discount-data', {origin: 'right'});


