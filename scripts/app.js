document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("menu-items");

  navToggle.addEventListener("click", function () {
    if (menu.classList.contains("menu-items-container-closed")) {
      menu.classList.remove("menu-items-container-closed");
      menu.classList.add("menu-items-container-show");
    } else {
      menu.classList.remove("menu-items-container-show");
      menu.classList.add("menu-items-container-closed");
    }
  });
});
