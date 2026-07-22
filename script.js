const srButton = document.getElementById("sr-btn");
const enButton = document.getElementById("en-btn");
const translatedElements = document.querySelectorAll("[data-sr][data-en]");

function changeLanguage(language) {
    translatedElements.forEach((element) => {
        element.textContent = element.dataset[language];
    });

    document.documentElement.lang = language;

    srButton.classList.toggle("active", language === "sr");
    enButton.classList.toggle("active", language === "en");

    localStorage.setItem("angel-language", language);
}

srButton.addEventListener("click", () => {
    changeLanguage("sr");
});

enButton.addEventListener("click", () => {
    changeLanguage("en");
});

const savedLanguage = localStorage.getItem("angel-language") || "sr";

changeLanguage(savedLanguage);
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.querySelector(".nav");
const navigationLinks = document.querySelectorAll(".nav a");

function closeMobileMenu() {
    menuToggle.classList.remove("active");
    navigation.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Otvori meni");
}

menuToggle.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.toggle("open");

    menuToggle.classList.toggle("active", menuIsOpen);
    document.body.classList.toggle("menu-open", menuIsOpen);

    menuToggle.setAttribute("aria-expanded", String(menuIsOpen));
    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen ? "Zatvori meni" : "Otvori meni"
    );
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});// ===== Reveal Animation =====

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
const serviceItems = document.querySelectorAll(".service-item");

const revealServices = () => {

    serviceItems.forEach((item, index) => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            setTimeout(() => {

                item.classList.add("active");

            }, index * 140);

        }

    });

};

window.addEventListener("scroll", revealServices);
window.addEventListener("load", revealServices);
// ===== PARALLAX =====

const parallaxElements = document.querySelectorAll(
    ".image-frame, .portfolio-image, .full-gallery-grid img"
);

function parallaxEffect() {

    parallaxElements.forEach((element) => {

        const rect = element.getBoundingClientRect();

        const center = window.innerHeight / 2;

        const distance = rect.top - center;

        const speed = distance * -0.04;

        element.style.transform = `translateY(${speed}px)`;

    });

}

window.addEventListener("scroll", parallaxEffect);
window.addEventListener("load", parallaxEffect);
// ===== IMAGE ZOOM =====

const galleryImages = document.querySelectorAll(".full-gallery-grid img");

galleryImages.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});// ===== MOBILE SCROLL DEPTH =====

const scrollImages = document.querySelectorAll(
    ".portfolio-image, .full-gallery-grid img, .image-frame"
);

function mobileDepthEffect() {

    scrollImages.forEach((image) => {

        const rect = image.getBoundingClientRect();
        const center = window.innerHeight / 2;

        const distance = rect.top + rect.height / 2 - center;

        const progress = Math.max(-1, Math.min(1, distance / center));

        const scale = 1.03 - Math.abs(progress) * 0.03;
        const opacity = 0.9 + (1 - Math.abs(progress)) * 0.1;

        image.style.transform = `scale(${scale})`;
        image.style.opacity = opacity;

    });

}

window.addEventListener("scroll", mobileDepthEffect, { passive: true });
window.addEventListener("load", mobileDepthEffect);
// ===== PRICE SHINE =====

const pricingSection = document.querySelector(".pricing");

let pricingPlayed = false;

function pricingShine(){

    if(pricingPlayed) return;

    const rect = pricingSection.getBoundingClientRect();

    if(rect.top < window.innerHeight * 0.75){

        pricingPlayed = true;

        pricingSection.classList.add("shine");

    }

}

window.addEventListener("scroll", pricingShine, { passive:true });

window.addEventListener("load", pricingShine);
// ===== CONTACT WAVE =====

const contact = document.querySelector(".contact");

let contactPlayed = false;

function contactWave(){

    if(contactPlayed) return;

    const rect = contact.getBoundingClientRect();

    if(rect.top < window.innerHeight * 0.75){

        contactPlayed = true;

        contact.classList.add("wave");

    }

}

window.addEventListener("scroll", contactWave,{passive:true});

window.addEventListener("load",contactWave);
// ===== HERO FRAME =====

window.addEventListener("load", () => {

    const heroImage = document.querySelector(".hero-image");

    if(heroImage){

        setTimeout(() => {

            heroImage.classList.add("draw");

        },300);

    }

});// ===== SCROLL PROGRESS =====

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});// ===== HEADER SCROLL EFFECT =====

const header = document.querySelector(".site-header");

function headerScroll(){

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll",headerScroll,{passive:true});

window.addEventListener("load",headerScroll);