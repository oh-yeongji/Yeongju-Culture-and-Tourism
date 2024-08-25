window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let sideMenuIcon = document.querySelector(".side-menu");
  let dim = document.querySelector(".dim");
  let sideBody = document.querySelector(".sideMenu .sideBody");

  function updateDimVisibility() {
    // 현재 화면 너비 확인
    let screenWidth = window.innerWidth;
    if (screenWidth >= 1025 && screenWidth <= 1536) {
      dim.style.display = "none";
    } else {
      dim.style.display = sideMenu.classList.contains("show")
        ? "block"
        : "none";
    }
  }

  sideMenuIcon.addEventListener("click", function () {
    sideMenu.classList.toggle("show");
    updateDimVisibility(); // 클릭 시 dim 표시 여부 업데이트
  });

  closeX.addEventListener("click", function () {
    sideMenu.classList.remove("show");
    updateDimVisibility(); // 닫기 시 dim 표시 여부 업데이트
  });

  dim.addEventListener("click", function () {
    sideMenu.classList.remove("show");
    dim.style.display = "none";
  });

  sideBody.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      event.stopPropagation();
      let subMenu = event.target.nextElementSibling;
      if (subMenu) {
        let isExpanded = subMenu.classList.contains("show");

        if (subMenu.tagName === "UL") {
          let parentUl = subMenu.parentElement.parentElement;
          parentUl.querySelectorAll("ul").forEach(function (submenu) {
            submenu.classList.remove("show");
          });
        } else {
          sideBody.querySelectorAll("ul").forEach(function (submenu) {
            submenu.classList.remove("show");
          });
        }

        subMenu.classList.toggle("show", !isExpanded);
      }

      // 기존에 clicked와 bold 클래스를 가진 요소들에서 클래스 제거
      sideBody
        .querySelectorAll("a.clicked, a.bold")
        .forEach(function (element) {
          element.classList.remove("clicked");
          element.classList.remove("bold");
        });

      // 현재 클릭된 요소에 clicked와 bold 클래스 추가
      event.target.classList.add("clicked");
      event.target.classList.add("bold");
    }
  });

  // 초기 로딩 시 dim 표시 여부 설정
  updateDimVisibility();
  // 윈도우 리사이즈 시 dim 표시 여부 업데이트
  window.addEventListener("resize", updateDimVisibility);
};
