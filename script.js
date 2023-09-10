/** @format */
function currentDayAndTime() {
const date = new Date();
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const dayOfWeek = weekdays[date.getUTCDay()];

const currentUTCTime = Date.now();
const formattedTime = new Date(currentUTCTime).toISOString().substr(11, 12);

// Get currentDayOfTheWeek and currentUTTime
const today = document.getElementById("currentDayOfTheWeek");
today.innerHTML = "Today is: " + dayOfWeek;
const Time = document.getElementById("currentUTCTime");
Time.innerHTML = currentUTCTime;
}

// Update every 100 milliseconds (0.1 seconds)
setInterval(currentDayAndTime, 100); 

// Call the function initially
currentDayAndTime();

