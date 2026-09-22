/*  Scroll reveal.

    The hiding styles in global.css are gated behind .reveal-ready, so
    this script must claim the class before anything is hidden. If the
    browser has no IntersectionObserver the class is never added and
    every section simply renders in place. */

const targets = document.querySelectorAll(".reveal, .fade-up");

if (targets.length && "IntersectionObserver" in window) {

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    /* One-shot: stop watching once it has appeared. */

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0,

            rootMargin: "0px 0px -12% 0px"

        }

    );

    targets.forEach((element) => {

        observer.observe(element);

    });

    /*  Anything already on screen at first paint — and anything still
        hidden after the page fully loads, e.g. because it sits inside a
        container that never intersects — is revealed outright so no
        section can get stranded at opacity:0. */

    window.addEventListener("load", () => {

        targets.forEach((element) => {

            const box = element.getBoundingClientRect();

            if (box.top < window.innerHeight) {

                element.classList.add("visible");

            }

        });

    });

}
