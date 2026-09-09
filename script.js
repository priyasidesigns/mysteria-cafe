/* =========================
   MOBILE NAVIGATION
========================= */

function toggleNav() {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("mobile-open");

}


/* =========================
   CLOSE MOBILE NAV
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelector(".nav-links")
            .classList.remove("mobile-open");

    });

});


/* =========================
   MENU MODAL
========================= */

function openMenu() {

    const modal = document.getElementById("menuModal");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeMenu() {

    const modal = document.getElementById("menuModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMenu();

    }

});


/* =========================
   CLICK OUTSIDE MENU
========================= */

document
    .getElementById("menuModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeMenu();

        }

    });


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", function() {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10, 10, 9, 0.92)";

    } else {

        navbar.style.background = "rgba(10, 10, 9, 0.55)";

    }

});