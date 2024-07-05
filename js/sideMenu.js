document.addEventListener("DOMContentLoaded", function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let dim = document.querySelector(".dim");

  let sideMenuIcon = document.querySelector(".search .side-menu");

  sideMenuIcon.addEventListener("click", function () {
    console.log("hi");
    sideMenu.style.display = "block";
    dim.style.display = "block";
  });

  closeX.addEventListener("click", function () {
    sideMenu.style.display = "none";
    dim.style.display = "none";
  });
});
