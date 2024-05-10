$(function () {
  $(".slider").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    // infinite: true, //무한 반복 옵션
    slidesToShow: 2, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: false, // 자동 스크롤 사용 여부
    autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: false, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: $(".prevBtn"), // 이전 화살표 모양 설정
    nextArrow: $(".nextBtn"), // 다음 화살표 모양 설정
    draggable: true, //드래그 가능 여부

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
    ],
  });
});
function changeColor() {
  var prevBtn = document.querySelector(".prevBtn");
  prevBtn.style.backgroundColor = "red";
}

document.addEventListener("DOMContentLoaded", function () {
  let nextBtn = document.querySelector(".nextBtn");

  nextBtn.addEventListener("click", function () {
    let info = document.querySelector(".info");

    info.innerHTML = `
                <p>New Info Content</p>
                <h2>New Heading</h2>
                <div class="hashTag">
                    <strong>#</strong>
                   소수서원 문성공묘
                </div>
                <div class="place">New Place</div>
                <div class="history">New History Content</div>
            `;
  });
});
