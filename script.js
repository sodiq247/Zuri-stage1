/** @format */

var today = new Date();
var weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
var dayOfWeek = weekdays[today.getDay()];
var utcTimeMilliseconds = today.getTime();

var today = document.getElementById("currentDayOfTheWeek");
today.innerHTML = "Today is: " + dayOfWeek;
var Time = document.getElementById("currentUTCTime");
Time.innerHTML = "Current UTC Time in Milliseconds: " + utcTimeMilliseconds;
