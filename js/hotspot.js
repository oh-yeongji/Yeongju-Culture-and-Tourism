document.addEventListener("DOMContentLoaded", function () {
  $(".slidesWrapper").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $("slidesShow .btns .right"),
    prevArrow: $("slidesShow .btns .left"),
  });
});
