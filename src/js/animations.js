import gsap from "gsap";

window.addEventListener("DOMContentLoaded", () => {

    const timeline = gsap.timeline();

    // Navbar animation
    timeline.from(".navbar", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        clearProps: "transform"
    });

    // Hero badge
    timeline.from(".hero-badge", {

        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"

    });

    // Heading
    timeline.from(".hero h1", {

        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"

    });

    // Description
    timeline.from(".hero-description", {

        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"

    });

    // Buttons
    timeline.from(".hero-buttons", {

        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"

    });

    // AI Card entrance
    timeline.from(".ai-card", {

        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"

    });

    // AI Card floating animation
    gsap.to(".ai-card", {


        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"

    });

    // AI TOOL PREVIEW CARD CLICK EFFECT
    const aiToolCards = document.querySelectorAll(".ai-tool-card");

    console.log("AI Tool Cards:", aiToolCards.length);

    aiToolCards.forEach(card => {


        card.addEventListener("click", () => {

            aiToolCards.forEach(item => {

                item.classList.remove("active");


            });

            card.classList.add("active");

        });

    });

});