const openToggler = document.querySelector("#open_toggler")
const closeToggler = document.querySelector("#close_toggler")
const menuBarOverlay = document.querySelector(".menu_bar_overlay")
const menuBar = document.querySelector(".menu_bar")

// toggle menu bar for mobile open
openToggler.addEventListener("click", () => {
  menuBar.classList.add("active")
})

// toggle menu bar for mobile close
closeToggler.addEventListener("click", () => {
  menuBar.classList.remove("active")
})

// show and hide menu bar overlay
menuBarOverlay.addEventListener("click", () => {
  menuBar.classList.remove("active")
})

// resize screen

window.addEventListener("resize", () => {
  if (window.innerWidth > 769) {
    menuBar.classList.remove("active")
  } else {
    if (!menuBar.classList.contains("active")) {
      menuBar.classList.remove("active")
    }
  }
})
