const openBtn = document.getElementById("openBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

const welcome = document.getElementById("welcome");
const birthday = document.getElementById("birthday");

const confettiContainer =
    document.getElementById("confetti-container");


/* =========================
   OPEN SURPRISE
========================= */

openBtn.addEventListener("click", () => {

    // Hide welcome screen
    welcome.style.display = "none";

    // Show birthday celebration
    birthday.classList.remove("hidden");

    // Start celebration
    createConfetti();

    // Scroll smoothly to birthday section
    birthday.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* =========================
   CELEBRATE BUTTON
========================= */

celebrateBtn.addEventListener("click", () => {

    createConfetti();

    createHearts();

    celebrateBtn.innerHTML =
        "❤️ Mum, You Are Loved!";

});


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const pieces = 150;

    for (let i = 0; i < pieces; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.width =
            Math.random() * 8 + 6 + "px";

        confetti.style.height =
            Math.random() * 12 + 8 + "px";

        confetti.style.background =
            getRandomColor();

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 6000);

    }

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "200";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 4s ease, opacity 4s ease";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {

            heart.remove();

        }, 4500);

    }

}


/* =========================
   CONFETTI COLORS
========================= */

function getRandomColor() {

    const colors = [
        "#f6d27a",
        "#fff1b8",
        "#ff6f91",
        "#ff9fbd",
        "#ffffff",
        "#d8a7ff"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}