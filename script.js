// Set the target date and time (April 11, 2025, at noon CST)
const targetDate = new Date('April 11, 2025 12:00:00 GMT-0500');

// Update the countdown every second
const countdownInterval = setInterval(function() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'The event has started!';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
