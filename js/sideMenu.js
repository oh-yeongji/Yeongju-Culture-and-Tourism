window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let sideMenuIcon = document.querySelector(".side-menu");
  let dim = document.querySelector(".dim");
  let sideMenuBigLi = document.querySelectorAll(
    ".sideMenu .sideBody > li > a"
  );
  let sideMenuMediLi = document.querySelectorAll(
    ".sideMenu .sideBody > li > ul"
  );

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

  sideMenuBigLi.forEach(function (menu) {
    menu.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      let subMenu = this.nextElementSibling;
      if (subMenu) {
        let isExpanded = subMenu.style.display === "block";
        sideMenuMediLi.forEach(function (submenu) {
          submenu.style.display = "none";
        });
        subMenu.style.display = isExpanded ? "none" : "block";
      }
    });
  });
};
