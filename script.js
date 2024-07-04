const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
const currentTimeUtc = new Date().toUTCString();
console.log(currentDay);

const timeContent = document.getElementById(['timeContent']);
const dayContent = document.getElementById(['day']);

timeContent.innerHTML = currentTimeUtc;
dayContent.innerHTML = day;