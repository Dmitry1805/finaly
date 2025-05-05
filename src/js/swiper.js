import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

if (window.innerWidth < 768) {
  let swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    modules: [Navigation, Pagination]
  });
}
