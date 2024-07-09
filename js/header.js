window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let dim = document.querySelector(".dim");
  let sideMenuIcon = document.querySelector(".side-menu-icon");

  sideMenuIcon.addEventListener("click", function () {
    sideMenu.classList.toggle("open");
    dim.style.display = sideMenu.classList.contains("open") ? "block" : "none";
  });

  closeX.addEventListener("click", function () {
    sideMenu.classList.remove("open");
    dim.style.display = "none";
  });

  dim.addEventListener("click", function () {
    sideMenu.classList.remove("open");
    dim.style.display = "none";
  });
};
