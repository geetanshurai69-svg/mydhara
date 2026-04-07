function updateTimer() {
    const target = new Date("April 09, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;
    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAY! 🎂";
    } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }
}
setInterval(updateTimer, 1000);

document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    const text = "09 APRIL 2008... A special soul was born. ✨";
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(i);
            i++; setTimeout(type, 80);
        } else {
            setTimeout(() => {
                document.getElementById('timer-screen').classList.add('hidden');
                document.getElementById('question-screen').classList.remove('hidden');
            }, 2500);
        }
    }
    type();
});

function showGreetingPage() {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('greeting-page').classList.remove('hidden');
}

function startCelebration() {
    document.getElementById('bg-music').play();
    document.getElementById('greeting-page').classList.add('hidden');
    document.getElementById('cake-screen').classList.remove('hidden');
    setTimeout(() => {
        const flames = document.querySelectorAll('.flame');
        flames.forEach((f, idx) => setTimeout(() => f.classList.remove('hidden'), idx * 600));
        document.getElementById('cake-hint').innerText = "Make a wish and cut the cake!";
    }, 1500);
}

function handleCakeClick() {
    document.getElementById('cake-emoji').innerHTML = "🍰";
    document.body.style.background = "#fff0f5"; 
    document.getElementById('cake-screen').classList.remove('dark-room');
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
    setTimeout(() => {
        document.getElementById('cake-screen').classList.add('hidden');
        document.getElementById('card-screen').classList.remove('hidden');
    }, 1800);
}

function showStory() {
    document.getElementById('card-screen').classList.add('hidden');
    document.getElementById('story-screen').classList.remove('hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal-zoom'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.story-item img').forEach(img => observer.observe(img));
}
