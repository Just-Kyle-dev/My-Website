
// ===== PERSONAL WEBSITE =====

// Update tahun secara otomatis
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Kyle. All rights reserved.`;
}

// Pesan saat website berhasil dimuat
console.log("Welcome to Kyle's Personal Website!");
console.log("Website loaded successfully.");

// =========================
// SCROLL REVEAL
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
    "#home > *, #about > *, #interests > *, #gallery > *, #socials > *, .interest-card, .about-card, .social-list a, .gallery-card"
);

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    // Check browser support
    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        // Fallback for older browsers
        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }

});

// =========================
// GALLERY LIGHTBOX
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("closeLightbox");

    const galleryImages = document.querySelectorAll(".gallery-card img");

    galleryImages.forEach((img) => {

        img.addEventListener("click", () => {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add("active");
        });

    });

    closeButton.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }
    });

});
