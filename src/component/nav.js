let btnMenuExtended = document.getElementById("btn-expanded-menu");
let menu = document.querySelector(".menu-hidden");

btnMenuExtended.addEventListener("click", () => {
  if (menu.className === "menu-expanded") {
    menu.classList.remove("menu-expanded");
    menu.classList.add("menu-hidden");
  } else if (menu.className === "menu-hidden") {
    menu.classList.remove("menu-hidden");
    menu.classList.add("menu-expanded");

  }
});
