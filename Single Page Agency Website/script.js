// Hero Swiper
var swiperHero = new Swiper(".heroSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    
  });

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 4
      }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
  });