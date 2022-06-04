// Création des variables récupérant le contenu du fichier html
let navLinks = document.querySelectorAll(".carousel .nav-link");
let slides = document.querySelectorAll(".carousel .slides img");
let slides2 = document.querySelectorAll(".carousel .slides2 video");
let overlays = document.querySelectorAll(".carousel .bar");
let maxZIndex = navLinks.length;
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";

// Création des tableaux incluant les images, les vidéos et leurs liens
slides[0].classList.add("active");
slides2[0].classList.add("active");
navLinks[0].classList.add("active");

// Début de la fonction carousel
navLinks.forEach((navLink, activeIndex) => {
    overlays[activeIndex].style.zIndex = `${navLinks.length -
        activeIndex}`;
    navLink.addEventListener("click", () => {

        // Passage aux différentes images et vidéo grâce aux balises liens
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        navLink.classList.add("active");

        // Animation du changement d'image et vidéo
        let currentSlide = document.querySelector(".carousel .slides img.active");
        let currentSlide2 = document.querySelector(".carousel .slides2 video.active");
        let slideFadeOut = currentSlide.animate([
            { transform: "translateX(0)", opacity: 1 },
            { transform: "translateX(5%)", opacity: 0 }
        ], {
            duration: 600,
            easing: "ease-in",
            fill: "forwards"
        });
        let slideFadeOut2 = currentSlide2.animate([
            { transform: "translateX(0)", opacity: 1 },
            { transform: "translateX(5%)", opacity: 0 }
        ], {
            duration: 600,
            easing: "ease-in",
            fill: "forwards"
        });

        // Activation de l'image suivante
        slideFadeOut.onfinish = () => {
            slides.forEach(slide => slide.classList.remove("active"));
            let activeSlide = slides[activeIndex];
            activeSlide.classList.add("active");
            activeSlide.animate([
                {
                    transform: "translateX(-5%)",
                    opacity: 0
                },
                {
                    transform: "translateX(0)",
                    opacity: 1
                }
            ], { duration: 600, easing: "ease-out", fill: "forwards" });
        };

        // Activation de la vidéo suivante
        slideFadeOut2.onfinish = () => {
            slides2.forEach(slide2 => slide2.classList.remove("active"));
            let activeSlide2 = slides2[activeIndex];
            activeSlide2.classList.add("active");
            activeSlide2.animate([
                {
                    transform: "translateX(-5%)",
                    opacity: 0
                },
                {
                    transform: "translateX(0)",
                    opacity: 1
                }
            ], { duration: 600, easing: "ease-out", fill: "forwards" });
        };
        // Augmentation de l'index et animation
        maxZIndex += 1;
        let activeOverlay = overlays[activeIndex];
        activeOverlay.style.zIndex = `${maxZIndex}`;
        activeOverlay.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: 1200, fill: "forwards", easing: easeInOutQuart });
    });
});
