const menuTrigger = document.querySelectorAll('[data-open-btn]');
const mobileMenu = document.querySelectorAll('[data-show]');
const closerTrigger = document.querySelectorAll('[data-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < menuTrigger.length; i++) {
    const closeMenu = function(){
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    menuTrigger[i].addEventListener('click', function(){
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    })

    closerTrigger[i].addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu)
}


// Mobile submenu 


const submenu = document.querySelectorAll('.sub-trigger');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle() {
    submenu.forEach((item) => item != this ? item.classList.remove('expand') : null);


    if (this.classList != 'expand'){
        this.classList.toggle('expand')
    }
}

// TAbbed 

// var tabbedNav = new Swiper('.tabs',{
//     slidePerView: 1,
//     centeredSlides: true,
//     slidesPerGroup: false,
//     spaceBetween: 20,
// })

// var theTab = new Swiper ('.tabs-box',{
//     slidesPerView: 1,
//     autoHeight: true,
//     thumbs:{
//         swiper: tabbedNav
//     },
// })

'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
// const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
// const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}












const slidebar = document.querySelector('.slidebar');
const products = document.querySelectorAll('.product');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let slideWidth = products[0].offsetWidth + parseInt(getComputedStyle(products[0]).marginRight);

function showSlide(index) {
  if (index < 0) {
    index = products.length - 1;
  } else if (index >= products.length) {
    index = 0;
  }

  currentIndex = index;
  const translateXValue = -currentIndex * slideWidth;
  slidebar.style.transform = `translateX(${translateXValue}px)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Adjust slide width on window resize
window.addEventListener('resize', () => {
  slideWidth = products[0].offsetWidth + parseInt(getComputedStyle(products[0]).marginRight);
  showSlide(currentIndex);
});
