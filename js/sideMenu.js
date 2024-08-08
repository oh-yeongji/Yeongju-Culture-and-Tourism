window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let sideMenuIcon = document.querySelector(".side-menu");
  let dim = document.querySelector(".dim");
  let sideBody = document.querySelector(".sideMenu .sideBody");

  sideMenuIcon.addEventListener("click", function () {
    sideMenu.classList.toggle("show");
    dim.style.display = sideMenu.classList.contains("show") ? "block" : "none";
  });

  closeX.addEventListener("click", function () {
    sideMenu.classList.remove("show");
    dim.style.display = "none";
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

      if (event.target.classList.contains("bold")) {
        event.target.classList.remove("bold");
      } else {
        event.target.classList.add("bold");
      }

      // 클릭 시 after와 before 스타일 변경
      let computedStyle = window.getComputedStyle(event.target, "::after");
      let afterContent = computedStyle.getPropertyValue("content");

      // 기존 after 스타일을 검은색(#000)으로 변경
      if (afterContent) {
        event.target.style.setProperty("--after-color", "#000");
        event.target.style.setProperty("--after-border", "2px solid #000");
      }

      let computedBeforeStyle = window.getComputedStyle(
        event.target,
        "::before"
      );
      let beforeContent = computedBeforeStyle.getPropertyValue("content");

      // 기존 before 스타일을 검은색(#000)으로 변경
      if (beforeContent) {
        event.target.style.setProperty("--before-color", "#000");
      }
    }
  });
};
