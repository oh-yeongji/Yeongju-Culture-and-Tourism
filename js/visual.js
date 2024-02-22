document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slides li");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000); // 2초마다 슬라이드 전환
  var stop = document.querySelector(".stop");
  var play = document.querySelector(".play");

  // progressBar 요소 선택
  const progressBar = document.querySelector(".progressBar");
  const nowPage = document.querySelector(".nowPage strong");

  // 애니메이션 종료 이벤트 설정
  progressBar.addEventListener("animationend", () => {
    // progressBar가 애니메이션을 완료할 때
    if (progressBar.style.width === "100%") {
      // nowPage의 내용을 2로 변경
      
    }
  });

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

  document.querySelector(".prev").addEventListener("click", function () {
    clearInterval(slideInterval);
    prevSlide();
  });

  document.querySelector(".next").addEventListener("click", function () {
    clearInterval(slideInterval);
    nextSlide();
  });

  stop.addEventListener("click", function () {
    stop.style.backgroundPosition = "66.66% 0";
    play.style.display = "block";
    clearInterval(slideInterval);
  });

  play.addEventListener("click", function () {
    slideInterval = setInterval(nextSlide, 2000);
  });
});
