window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let sideMenuIcon = document.querySelector(".side-menu");
  let dim = document.querySelector(".dim");
  let sideBody = document.querySelector(".sideMenu .sideBody");

  // 초기 상태에서 sideMenu를 숨깁니다.
  sideMenu.style.display = "none";

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
    sideMenu.style.display = sideMenu.classList.contains("show")
      ? "block"
      : "none";
    updateDimVisibility();
  });

  closeX.addEventListener("click", function () {
    sideMenu.classList.remove("show");
    sideMenu.style.display = "none";
    updateDimVisibility();
  });

  dim.addEventListener("click", function () {
    sideMenu.classList.remove("show");
    sideMenu.style.display = "none";
    dim.style.display = "none";
  });

  sideBody.addEventListener("click", function (event) {
    let target = event.target;

    if (target.tagName === "A") {
      event.preventDefault();
      event.stopPropagation();

      if (target.classList.contains("clicked")) {
        target.classList.remove("clicked");
        let subMenu = target.nextElementSibling;
        if (subMenu && subMenu.tagName === "UL") {
          subMenu.classList.remove("show");
        }
        return;
      }

      sideBody.querySelectorAll("a.clicked").forEach(function (element) {
        element.classList.remove("clicked");
      });

      target.classList.add("clicked");

      let parentA = target.closest("ul").parentElement.querySelector("a");
      if (parentA) {
        parentA.classList.add("clicked");
      }

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

  sideBody.querySelectorAll("a *").forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });

  updateDimVisibility();
  window.addEventListener("resize", updateDimVisibility);
};
