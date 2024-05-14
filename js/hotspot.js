$(Document).ready(function () {
  $(function () {
    // hotspot pics
    $(".slider-pics").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $(".prevBtn"),
      nextArrow: $(".nextBtn"),
      autoplay: false,
      fade: false,
      asNavFor: ".slider-info",
    });

    //hotspot info
    $(".slider-info").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      fade: true,
      asNavFor: ".slider-pics",
    });
  });
});
