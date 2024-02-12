document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var headerHeight = header.offsetHeight;
  const mainMenuItems = document.querySelectorAll(".mainMenu > li");
  const subMenus = document.querySelectorAll(".subMenu");
  var searchButton = document.querySelector(".search");
  var searchDown = document.getElementById("searchDown");
  var closeBtn = document.querySelector(".closeBtn");

  mainMenuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("mouseover", function () {
      subMenus.forEach((submenu, subIndex) => {
        if (subIndex === index) {
          submenu.style.height = "378px";
          submenu.style.display = "block";
        } else {
          submenu.style.height = "0";
          submenu.style.display = "none";
        }
      });
    });
  });

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
    closeBtn.style.display = "none";
  });
});
