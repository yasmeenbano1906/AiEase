import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {

    /* AI INTRO */
    if (document.querySelector(".ai-intro")) {

        gsap.from(".ai-info-card", {

            scrollTrigger: {
                trigger: ".ai-intro",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },

            opacity: 0,
            y: 80,
            scale: 0.9,
            duration: 1,
            stagger: 0.25,
            ease: "power3.out",
            clearProps: "all"

        });

    }

    /* TOOL CARDS */
    if (document.querySelector(".tools-section")) {

        gsap.from(".tool-card", {

            scrollTrigger: {
                trigger: ".tools-section",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },

            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"

        });

    }

    /* SECTION TITLES */
    const sectionTitles = document.querySelectorAll(".section-title");

    if (sectionTitles.length) {

        gsap.from(sectionTitles, {

            scrollTrigger: {
                trigger: sectionTitles,
                start: "top 85%"
            },

            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"

        });

    }

    /* MODEL CARDS */
    if (document.querySelector(".models-section")) {

        gsap.from(".model-card", {

            scrollTrigger: {
                trigger: ".models-section",
                start: "top 75%"
            },

            opacity: 0,
            y: 70,
            scale: 0.9,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all"

        });

    }

});