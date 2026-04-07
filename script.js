// MUSIC START
document.body.addEventListener("click", () => {
    document.getElementById("bg-music").play();
}, { once: true });

// SCREEN SWITCH
function nextScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// COUNTDOWN
const target = new Date("April 9, 2026 00:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let d = target - now;

    let days = Math.floor(d / (1000*60*60*24));
    let h = Math.floor((d/(1000*60*60))%24);
    let m = Math.floor((d/(1000*60))%60);
    let s = Math.floor((d/1000)%60);

    document.getElementById("countdown").innerText =
        `${days}d ${h}h ${m}m ${s}s`;

    if (d < 0) {
        nextScreen("question-screen");
    }
}, 1000);

// TYPEWRITER
const text = "A surprise is waiting for you...";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}
typeWriter();

// CAKE INTERACTION
let clicks = 0;

document.getElementById("cake").onclick = () => {
    clicks++;

    if (clicks === 3) {
        document.getElementById("cake-text").innerText = "Make a wish 🎉";
        confetti();

        setTimeout(() => {
            nextScreen("card-screen");
        }, 2000);
    }
};

// CARD OPEN
function openCard() {
    document.querySelector(".card").classList.toggle("open");
}

// FLOATING HEARTS
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 500);
