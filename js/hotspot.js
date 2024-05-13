$(function () {
  $(".slide-infor").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-pics").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   let nextBtn = document.querySelector(".nextBtn");

//   nextBtn.addEventListener("click", function () {
//     let info = document.querySelector(".info");

//     info.innerHTML = `
//                 <p>New Info Content</p>
//                 <h2>New Heading</h2>
//                 <div class="hashTag">
//                     <strong>#</strong>
//                    소수서원 문성공묘
//                 </div>
//                 <div class="place">New Place</div>
//                 <div class="history">New History Content</div>
//             `;
//   });
// });
