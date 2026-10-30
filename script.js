
/* ============================
   ADITI EDITS 28
   INTERACTIVE JAVASCRIPT
============================ */

// 1. Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// 2. Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .about, .work-card, .service-card, .contact"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});


// 3. Active navbar link
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });

});


// 4. Only one portfolio video plays at a time
const videos = document.querySelectorAll(".work-card video");

videos.forEach(video => {

    video.addEventListener("play", () => {

        videos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });

    });

});


// 5. Dynamic footer year
const footer = document.querySelector("footer");

if (footer) {
    const yearText = footer.querySelector(".copyright-year");

    if (yearText) {
        yearText.textContent = new Date().getFullYear();
    }
}


// 6. Cursor glow effect (desktop only)
const glow = document.createElement("div");

glow.className = "cursor-glow";
document.body.appendChild(glow);

if (window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}


// 7. Console welcome message
console.log(
    "%c ADITI EDITS 28 ",
    "background:#e50914;color:white;padding:10px;font-size:18px;font-weight:bold;"
);

console.log("Unofficial portfolio demo loaded successfully!");
