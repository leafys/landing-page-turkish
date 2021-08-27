const swiper = new Swiper('.reasons__blocks', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,

  
    // Navigation arrows
    navigation: {
      nextEl: '.reasons__blocks__next',
      prevEl: '.reasons__blocks__prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      1400: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  });

  const swiperLevels = new Swiper('.levels__blocks', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,

  
    // Navigation arrows
    navigation: {
      nextEl: '.levels__blocks__next',
      prevEl: '.levels__blocks__prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      1400: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }

  });

  const swiperPagination = new Swiper('.reviews__blocks', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletClass: 'swiper-bullet',
      bulletActiveClass: 'swiper-bullet-active',
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      1400: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  const teachersSwiper = new Swiper('.teachers__blocks', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,

  
    // Navigation arrows
    navigation: {
      nextEl: '.teachers__slider-btnOne',
      prevEl: '.teachers__slider-btnTwo',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      576: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      1400: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });