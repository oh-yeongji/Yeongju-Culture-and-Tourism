document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var headerHeight = header.offsetHeight;
  const menuItem = document.querySelector(".mainMenu > li");
  const subMenu = document.querySelector(".subMenu");
  // var submenu = document.querySelector(".subMenu");
  var searchButton = document.querySelector(".search");
  // var searchDown = document.querySelector(".searchMenu");
  var searchDown = document.getElementById("searchDown");
  var closeBtn = document.querySelector(".closeBtn");

  menuItem.addEventListener("mouseover", function () {
    subMenu.style.height = "378px";
    subMenu.style.display = "block";
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
