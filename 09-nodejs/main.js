import Swiper from "swiper";
import 'swiper/swiper.css';

// const swiper = new Swiper(엘리먼트 이름, 옵션)
const swiper = new Swiper('.slide-main', {
    // key: 'velue'

    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})