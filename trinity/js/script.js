// btn-up

$('.btn-up').click(function() {
  $('html, body').animate({'scrollTop': 0}, 1000);
  // $('html').animate({'scrollTop': 0}, 1000);
});

$(window).scroll(function() {
  if($(window).scrollTop() > 400) {
    $('.btn-up').fadeIn(300);
  }

  else {
   $('.btn-up').fadeOut(); 
  }
});

// topMenu

$('.nav-item__btn').on('click', function() {
  $('.nav-items').slideToggle()
});

$(window).scroll(function() {
  var $nav =  $('.startup-navigation');
  if($(window).scrollTop() > 770) {
    $nav.addClass('startup-navigation_fixed').fadeIn();
  }
  else {
   $nav.removeClass('startup-navigation_fixed');
  }
});

// sliderScript

$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

// sliderPartners

$('.item_slider').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 480,
      autoplay: false
    }
  ]
});
