//get the temp-value and windspeed-value
let tempStr = document.querySelector("#temp-value").innerHTML;
let windspeedStr = document.querySelector("#windspeed-value").innerHTML;
//convert to decimal numbers
let temp = parseFloat(tempStr);
let windspeed = parseFloat(windspeedStr);

//write function to calculate windchill
//t = temp, s = windspeed
function calWindChill(t,s)
{//temp is in fahrenheit and windspeed is in mph

 if ((t <= 50) && (s > 3))
 {
  let windchill =  35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
  document.querySelector("#windchillValue").innerHTML = "&#xb0;F";
  return windchill.toFixed(2);
 }
 else
 {
  return "N/A"
 }
}
document.querySelector("#windchill").innerHTML = calWindChill(temp, windspeed);