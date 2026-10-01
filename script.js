const typingText =
    document.getElementById("typingText");


const text =
    "Complete Digital Solutions For Your Business.";


let charIndex = 0;

let isDeleting = false;

const typingSpeed = 75;

const deletingSpeed = 45;

const pauseDuration = 1800;

function typeEffect() {

    if (!isDeleting) {

        typingText.textContent =
            text.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === text.length) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                pauseDuration
            );

            return;
        }


        setTimeout(
            typeEffect,
            typingSpeed
        );

    }

    else {

        typingText.textContent =
            text.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            isDeleting = false;

            setTimeout(
                typeEffect,
                500
            );

            return;
        }


        setTimeout(
            typeEffect,
            deletingSpeed
        );

    }

}


if (typingText) {

    typeEffect();

}

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");

const navLinks =
    document.querySelectorAll(
        ".navbar a"
    );


menuBtn.addEventListener(
    "click",
    function () {

        navbar.classList.toggle("active");

        menuBtn.classList.toggle("active");


        const isOpen =
            navbar.classList.contains("active");


        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );


        menuBtn.setAttribute(
            "aria-label",
            isOpen
                ? "Close Menu"
                : "Open Menu"
        );

    }
);

navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navbar.classList.remove(
                    "active"
                );

                menuBtn.classList.remove(
                    "active"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }
        );

    }
);

document.addEventListener(
    "click",
    function (event) {

        const clickedInsideMenu =
            navbar.contains(event.target);

        const clickedMenuButton =
            menuBtn.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navbar.classList.remove(
                "active"
            );

            menuBtn.classList.remove(
                "active"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 768) {

            navbar.classList.remove(
                "active"
            );

            menuBtn.classList.remove(
                "active"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);

const sections =
    document.querySelectorAll(
        "section[id]"
    );


function updateActiveNav() {

    let current = "";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


window.addEventListener(
    "load",
    updateActiveNav
);

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 30px rgba(15,23,42,0.06)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);

const form =
    document.getElementById(
        "contactForm"
    );


if (form) {

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value;


            alert(
                "Thank you, " +
                name +
                "! We will contact you soon."
            );


            form.reset();

        }
    );

}