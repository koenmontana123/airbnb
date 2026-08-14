const targetDate = new Date("November 25, 2026 17:00:00").getTime();

function updateCountdown() {
    const daysEl = document.getElementById("days");
    if (!daysEl) return;

    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.getElementById("timer").innerHTML = "<h3>🎉 KCSE IS DONE! FREEDOM TO MOMBASA! 🎉</h3>";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
