$('.slider').slick({ 
  slidesToShow: 6, 
  slidesToScroll: 1, 
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1500, 

  responsive: [ 
  { 
  breakpoint: 768, 
  settings: { 
  infinite: true, 
  slidesToShow: 6, 
  slidesToScroll: 3, 
  autoplay: false 
  } 
  }, 
  { 
  breakpoint: 480, 
    settings: { 
    infinite: true, 
    slidesToShow:4, 
    slidesToScroll: 1,
    autoplay: false 
    } 
  } 
  ] 
});