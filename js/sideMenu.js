window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let sideMenuIcon = document.querySelector(".side-menu");
  let dim = document.querySelector(".dim");
  let sideMenuBigLi = document.querySelectorAll(".sideMenu .sideBody > li > a");
  let sideMenuMediLl = document.querySelectorAll(
    ".sideMenu .sideBody > li > ul > li > a "
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

  // bigLi에 forEach돌려서 클릭하면 전파방지,a태그기본동작중지, this에 자매본다
  sideMenuBigLi.forEach(function (menu) {
    menu.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      let subMenu = this.nextElementSibling;
      if (subMenu) {
        // 클릭된 메뉴 외의 다른 메뉴의 하위 메뉴를 모두 닫기
        sideMenuBigLi.forEach(function (otherMenu) {
          if (otherMenu !== menu && otherMenu.nextElementSibling) {
            otherMenu.nextElementSibling.classList.remove("show");
          }
        });
        // 하위 메뉴가 열려 있는지 확인
        let isExpanded = subMenu.classList.contains("show");
        // 중간 메뉴 항목에서 show 클래스를 모두 제거
        sideMenuMediLl.forEach(function (submenu) {
          submenu.classList.remove("show");
        });
        // 현재 하위 메뉴의 show 클래스를 반대로 설정
        subMenu.classList.toggle("show", !isExpanded);
      }
    });
  });

  // mediLi를 foreach돌려서 각각을 클릭할때 전파방지 , a태그 기본동작 방지 걸어주고 biLi자매보고
  sideMenuMediLl.forEach(function (menu) {
    menu.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      let subMenu = this.nextElementSibling;
      if (subMenu) {
        // biLi자매한테 show있는지 확인
        let isExpanded = subMenu.classList.contains("show");
        // smalLi forEach 톨려서 show제거하고
        sideMenuSmalLl.forEach(function (submenu) {
          submenu.classList.remove("show");
        });
        // mediLi에 show를 강제로 반대
        // 이걸주석처리하니까 mediLi가 안열림
        subMenu.classList.toggle("show", !isExpanded);
      }
    });
  });
};
