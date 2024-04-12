document.addEventListener("DOMContentLoaded", function () {
  let menuItems = document.querySelectorAll(".menu__item");
  let hamburgerMenu = document.querySelector(".hamburger-menu");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      document.getElementById("menu__toggle").checked = false;

      let targetId = this.getAttribute("href").substring(1);

      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!hamburgerMenu.contains(event.target)) {
      document.getElementById("menu__toggle").checked = false;
    }
  });
});
