const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}


function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive")

    mobileMenu.classList.toggle("inactive")

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

    aside.classList.toggle("inactive")

    if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive")
    }
}