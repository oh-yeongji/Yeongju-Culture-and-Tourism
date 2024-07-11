document.addEventListener("DOMContentLoaded", function () {
  const mainMenuItems = document.querySelectorAll(".mainMenu > li");
  const subMenus = document.querySelectorAll(".subMenu");
  const searchButton = document.querySelector(".search");
  const searchDown = document.getElementById("searchDown");
  const closeBtn = document.querySelector(".closeBtn");

  mainMenuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("mouseover", function () {
      subMenus.forEach((submenu, subIndex) => {
        if (subIndex === index) {
          submenu.style.height = "378px";
          submenu.style.display = "block";
          const h2 = submenu.querySelector("h2");
          if (h2 && h2.textContent.includes("여행정보")) {
            submenu.style.height = "500px";
          }
        } else {
          submenu.style.height = "0";
          submenu.style.display = "none";
        }
      });
    });
  });

 
  subMenus.forEach((submenu) => {
  
    submenu.addEventListener("mouseleave", () => {

      submenu.style.display = "none";
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
