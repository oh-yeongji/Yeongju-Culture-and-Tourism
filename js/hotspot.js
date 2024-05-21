$(Document).ready(function () {
  $(function () {
    //hotspot info
    $(".slider-place").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      draggable: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      fade: false,
      asNavFor: ".slider-pics",
    });
  });

  // hotspot pics
  $(".slider-pics").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".prevBtn"),
    nextArrow: $(".nextBtn"),
    autoplay: false,
    draggable: true,
    fade: false,
    asNavFor: ".slider-info",
  });
});
