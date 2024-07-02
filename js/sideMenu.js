document.addEventListener("DOMContentLoaded", function () {
  let sideMenu = document.querySelector("sideMenu");
  let closeX = document.querySelector(".closeX > i");

  closeX.addEventListener("click", function () {
    sideMenu.style.display = "none";
  });
});
