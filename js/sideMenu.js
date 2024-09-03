window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let sideMenuIcon = document.querySelector(".side-menu");
  let dim = document.querySelector(".dim");
  let sideBody = document.querySelector(".sideMenu .sideBody");

  function updateDimVisibility() {
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
    updateDimVisibility();
  });

  closeX.addEventListener("click", function () {
    sideMenu.classList.remove("show");
    updateDimVisibility();
  });

  dim.addEventListener("click", function () {
    sideMenu.classList.remove("show");
    dim.style.display = "none";
  });

  sideBody.addEventListener("click", function (event) {
    let target = event.target;

    if (target.tagName === "A") {
      event.preventDefault();
      event.stopPropagation();

      // 이미 clicked 상태인 경우 clicked 클래스 제거 후 리턴
      if (target.classList.contains("clicked")) {
        target.classList.remove("clicked");
        return;
      }

      // 기존에 clicked 클래스를 가진 모든 요소에서 클래스 제거
      sideBody.querySelectorAll("a.clicked").forEach(function (element) {
        element.classList.remove("clicked");
      });

      // 현재 클릭된 요소에 clicked 클래스 추가
      target.classList.add("clicked");

      // 상위 a 태그에도 clicked 클래스를 추가하여 유지
      let parentA = target.closest("ul").parentElement.querySelector("a");
      if (parentA) {
        parentA.classList.add("clicked");
      }

      // 서브메뉴의 표시 상태를 토글
      let subMenu = target.nextElementSibling;
      if (subMenu && subMenu.tagName === "UL") {
        let isExpanded = subMenu.classList.contains("show");

        let parentUl = subMenu.parentElement.parentElement;
        parentUl.querySelectorAll("ul").forEach(function (submenu) {
          submenu.classList.remove("show");
        });

        subMenu.classList.toggle("show", !isExpanded);
      }
    }
  });

  // 자식 요소 클릭 이벤트 처리 (자식 요소에 대해서는 부모의 스타일 변경 방지)
  sideBody.querySelectorAll("a *").forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });

  updateDimVisibility();
  window.addEventListener("resize", updateDimVisibility);
};
