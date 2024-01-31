document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var headerHeight = header.offsetHeight;
  var submenu = document.querySelector(".subMenu");
  var searchButton = document.querySelector(".search");
  var searchDown = document.getElementById("searchDown");
  var closeBtn = document.querySelector(".closeBtn");

  searchButton.addEventListener("click", function () {
    searchDown.style.display =
      searchDown.style.display === "none" || searchDown.style.display === ""
        ? "block"
        : "none";

    closeBtn.style.display =
      closeBtn.style.display === "none" || closeBtn.style.display === ""
        ? "block"
        : "none";
  });

  closeBtn.addEventListener("click", function () {
    searchDown.style.display = "none";
    searchDown.style.animation = "fadeInUp 0.3s ease backwards";
    closeBtn.style.display = "none";
  });

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
