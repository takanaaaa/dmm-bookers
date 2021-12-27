const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  speed: 1000,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  centeredSlides: true,
  effect: 'coverflow',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2500,
    stopOnLast: false,
  },

  breakpoints: {
		350: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 0
		},
  }
});