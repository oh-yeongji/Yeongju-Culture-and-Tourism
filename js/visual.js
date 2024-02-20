document.addEventListener("DOMContentLoaded", function () {
  // 슬라이드 요소 가져오기
  var slides = document.querySelectorAll(".slides li");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000); // 2초마다 슬라이드 전환
  var stop = document.querySelector(".stop");
  var play = document.querySelector(".play");

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function prevSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // "prev" 버튼 클릭 시 이전 슬라이드로 이동
  document.querySelector(".prev").addEventListener("click", function () {
    clearInterval(slideInterval);
    prevSlide();
  });

  // "next" 버튼 클릭 시 다음 슬라이드로 이동
  document.querySelector(".next").addEventListener("click", function () {
    clearInterval(slideInterval);
    nextSlide();
  });

  // "stop" 버튼 클릭 시 슬라이드 쇼 일시 중지
  stop.addEventListener("click", function () {
    stop.style.backgroundPosition = "66.66% 0";
    console.log("j9");
    clearInterval(slideInterval);
  });

  // "play" 버튼 클릭 시 슬라이드 쇼 재개
  play.addEventListener("click", function () {
    slideInterval = setInterval(nextSlide, 2000);
  });
});
