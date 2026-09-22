const navbar = document.querySelector("[data-navbar]");

if (navbar) {

    /* ==========================================
       SCROLLED STATE
    ========================================== */

    const setScrolled = () => {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    };

    setScrolled();

    window.addEventListener("scroll", setScrolled, { passive: true });

    /* ==========================================
       MOBILE DRAWER
    ========================================== */

    const toggle = navbar.querySelector("[data-nav-toggle]");
    const panel = navbar.querySelector("[data-nav-panel]");
    const scrim = navbar.querySelector("[data-nav-scrim]");

    if (toggle && panel) {

        const setOpen = (open) => {

            navbar.classList.toggle("nav-open", open);

            toggle.setAttribute("aria-expanded", String(open));

            toggle.setAttribute(
                "aria-label",
                open ? "Close navigation" : "Open navigation"
            );

            if (scrim) {

                scrim.hidden = !open;

            }

            /* Stop the page scrolling behind an open drawer. */

            document.body.style.overflow = open ? "hidden" : "";

        };

        const close = () => setOpen(false);

        toggle.addEventListener("click", () => {

            setOpen(toggle.getAttribute("aria-expanded") !== "true");

        });

        if (scrim) {

            scrim.addEventListener("click", close);

        }

        /* Navigating away, pressing Escape, or growing past the
           breakpoint should all leave the drawer closed. */

        panel.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", close);

        });

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                close();

            }

        });

        window.matchMedia("(min-width:901px)").addEventListener("change", (event) => {

            if (event.matches) {

                close();

            }

        });

    }

}
