window.onload = function () {
  let sideMenu = document.querySelector(".sideMenu");
  let closeX = document.querySelector(".closeX > i");
  let dim = document.querySelector(".dim");

  let sideMenuIcon = document.querySelector(".search .side-menu");

  sideMenuIcon.addEventListener("click", function () {
    console.log("hi");
    sideMenu.style.display =
      sideMenu.style.display === "none" || sideMenu.style.display === ""
        ? "block"
        : "none";
    dim.style.display =
      dim.style.display === "none" || dim.style.display === ""
        ? "block"
        : "none";
  });

  closeX.addEventListener("click", function () {
    sideMenu.style.display = "none";
    dim.style.display = "none";
  });
};
