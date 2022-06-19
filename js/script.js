"use strict";

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEmobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add('touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function(e) {
        menuArrow.parentElement.classList.toggle('active');
      });
    }
  }

} else {
  document.body.classList.add('pc');
}

// burger
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}
// burger

// ibg 
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
// ibg 


// add class on scroll 
let scrollpos = window.scrollY

const headerMin = document.querySelector(".header__container")
const headerShadow = document.querySelector(".header")
const scrollChange = 20

const add_class_on_scroll = () => headerMin.classList.add("header-min") + headerShadow.classList.add("header-shadow")
const remove_class_on_scroll = () => headerMin.classList.remove("header-min") + headerShadow.classList.remove("header-shadow")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})
// add class on scroll 


// swiper
var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  spaceBetween: 20,
  speed: 1000,
  autoplay: {
    delay: 999999,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      
    },
    // // when window width is >= 480px
    480: {

    },
    // // when window width is >= 640px
    767: {
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
    }
  }
});
// swiper

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      
      if (iconMenu.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
// Прокрутка при клике