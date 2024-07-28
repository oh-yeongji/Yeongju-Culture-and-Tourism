window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let sideMenuIcon = document.querySelector(".side-menu");
  let dim = document.querySelector(".dim");
  let sideMenuBigLi = document.querySelectorAll(".sideMenu .sideBody > li > a");
  let sideMenuMediLl = document.querySelectorAll(
    ".sideMenu .sideBody > li > ul"
  );

  let sideMenuSmalLl = document.querySelectorAll(
    ".sideMenu .sideBody > li > ul > li > ul"
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
        let isExpanded = subMenu.classList.contains("show");
        sideMenuMediLl.forEach(function (submenu) {
          submenu.classList.remove("show");
          submenu.previousElementSibling.style.fontWeight = "300"; // font-weight를 300으로 변경
        });
        subMenu.classList.toggle("show", !isExpanded);
        this.style.fontWeight = isExpanded ? "700" : "300"; // 클릭한 항목의 font-weight를 700으로 변경
      }
    });
  });

  sideMenuMediLl.forEach(function (menu) {
    let subMenuItems = menu.querySelectorAll("li > a");
    subMenuItems.forEach(function (subMenuItem) {
      subMenuItem.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        let subMenu = this.nextElementSibling;
        if (subMenu) {
          let isExpanded = subMenu.classList.contains("show");
          sideMenuSmalLl.forEach(function (submenu) {
            submenu.classList.remove("show");
          });
          subMenu.classList.toggle("show", !isExpanded);

          if (isExpanded) {
            subMenu.querySelectorAll("li > a").forEach(function (e) {
              e.style.background = "#fff";
              e.style.borderBottom = "none";
            });
          }
        }
      });
    });
  });
};
