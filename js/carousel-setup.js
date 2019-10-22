$('.cage-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    variableWidth: true,
    zIndex: 100,
    asNavFor: '.cage-slider-nav'
  });
  $('.cage-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.cage-slider-for',
    dots: true,
    centerMode: true,
    variableWidth: true,
    zIndex: 2,
    focusOnSelect: true
  });