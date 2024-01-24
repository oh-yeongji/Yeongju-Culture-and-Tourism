document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var headerHeight = header.offsetHeight;
  var submenu = document.querySelector(".subMenu");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // 스크롤 위치가 header의 하단을 넘어가면
    if (scrollPosition > headerHeight) {
      submenu.style.top = "0";
    } else {
      // 스크롤 위치가 header의 하단 이하면
      submenu.style.top = headerHeight - scrollPosition + "px";
    }
  });
});
