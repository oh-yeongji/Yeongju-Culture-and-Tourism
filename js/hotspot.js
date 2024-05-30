$(Document).ready(function () {
  // $(function () {
  //   //hotspot info
  //   $(".slider-place").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     autoplay: false,
  //     draggable: false,
  //     dots: false,
  //     centerMode: true,
  //     focusOnSelect: true,
  //     fade: false,
  //     asNavFor: ".slider-pics",
  //   });
  // });

  // hotspot pics
  $(".slider-pics").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    // arrows: true,
    prevArrow: `<div class="prevBtn"></div>`,
    nextArrow: `<div class="nextBtn"></div>`,
    centerMode: false,
    adaptiveHeight: false,
    autoplay: false,
    draggable: true,
    fade: false,
    asNavFor: ".slider-info",
  });

  document.querySelector(".slickBtns .nextBtn").onclick = function () {
    document.querySelector(
      ".slickBtns .nextBtn"
    ).style.backgroundColor = ` "blue"`;
  };
});
