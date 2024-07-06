document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    updateDay();
});

function updateTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const now = new Date();
    const timeString = now.toISOString().slice(11, 19); // Extract HH:mm:ss from ISO string
    currentTimeElement.textContent = timeString + ' UTC';
    setTimeout(updateTime, 1000); // Update time every second
}

function updateDay() {
    const currentDayElement = document.getElementById('currentDay');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    currentDayElement.textContent = dayOfWeek;
}
