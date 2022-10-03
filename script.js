setInterval(time, 1000);
var date1 = new Date();
a = date1.getHours();
var x = document.getElementById("time");
function time() {
  var date1 = new Date();
  a = date1.getHours();
  x.innerHTML =
    date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();
}
setInterval(date, 1000);
var y = document.getElementById("day");
function date() {
  var date2 = new Date();

  var e = date2.getDay();
  var f;
  switch (e) {
    case 1:
      f = "sunday";
      break;
    case 2:
      f = "monday";
      break;
    case 3:
      f = "Tuesday";
      break;
    case 4:
      f = "wednesday";
      break;
    case 5:
      f = "Thursday";
      break;
    case 6:
      f = "friday";
      break;
    case 7:
      f = "saturday";
  }
  y.innerText =
    date2.getUTCDate() +
    "-" +
    date2.getMonth() +
    "-" +
    date2.getFullYear() +
    "," +
    f;
}
var z = document.getElementById("greet");
if (a >= 0 && a < 12) {
  z.innerText = "GOOD MORNING";
} else if (a >= 12 && a < 16) {
  z.innerText = "GOOD AFTERNOON";
} else if (a >= 16 && a < 24) {
  z.innerText = "GOOD EVENING";
}
