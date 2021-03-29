$(document).ready(function(){

  new WOW().init();

  jQuery(function($){
    $(".phone").mask("+7 (999) 999-99-99");
 });

  $('#popup-btn').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
  });
  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeOut();
  });

  /* Слайдер с отзывами */
  $('.feedback-slider').slick({
    prevArrow: '<button class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/prev-arrow.svg" alt="icon: prev-arrow"></button>',
    nextArrow: '<button class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/next-arrow.svg" alt="icon: next-arrow"></button>'
  });

  /* Слайдер с преимуществами */
  $('.features-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            // nextArrow: '<button class="next">next</button>',
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<button class="arrow prev"></button>',
            nextArrow: '<button class="arrow next"></button>'
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="arrow prev"></button>',
            nextArrow: '<button class="arrow next"></button>'
          }
        }
      ]
  });

  $('.materials-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          // nextArrow: '<button class="next">next</button>',
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: '<button class="arrow prev"></button>',
          nextArrow: '<button class="arrow next"></button>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="arrow prev"></button>',
          nextArrow: '<button class="arrow next"></button>'
        }
      }
    ]
});
});