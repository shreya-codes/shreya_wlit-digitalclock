function clock() {
	// body...

var fullDate = new Date();
var daynam = fullDate.getDay();
var mon = fullDate.getMonth();
var dayn = fullDate.getDate();
var yr =fullDate.getFullYear();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
var period="AM";


var ids =["dayname" ,"month" , "daynum","year"];
var values = [daynam, mon, dayn, yr]

if (hours>=12) {
	period="PM"

}
if (hours>12) {
	hours=hours-12;}
	
if (hours<10) {
	hours="0" +hours;
}
if(mins<10){
	mins="0"+mins;
}
if(secs < 10){

	secs ="0"+secs;
}

document.getElementById('hour').innerHTML = hours;
document.getElementById('minutes').innerHTML = mins;
document.getElementById('seconds').innerHTML = secs;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = months[fullDate.getMonth()];
document.getElementById("year").innerHTML = fullDate.getFullYear();
var week =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayname").innerHTML = week[fullDate.getDay()];
document.getElementById("daynum").innerHTML = fullDate.getDate();

}
setInterval(clock,100);