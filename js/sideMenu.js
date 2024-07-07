window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let dim = document.querySelector(".dim");
  let sideMenuIcon = document.querySelector(".side-menu");

  sideMenuIcon.addEventListener("click", function () {
    let isHidden = sideMenu.style.display === "none";
    sideMenu.style.display = isHidden ? "block" : "none";
    dim.style.display = isHidden ? "block" : "none";
  });

  closeX.addEventListener("click", function () {
    sideMenu.style.display = "none";
    dim.style.display = "none";
  });
};
