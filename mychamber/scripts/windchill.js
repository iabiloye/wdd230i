// //get the temp-value and windspeed-value
// let tempStr = document.querySelector("#temp-value").innerHTML;
// let windspeedStr = document.querySelector("#windspeed-value").innerHTML;
// //convert to decimal numbers
// let temp = parseFloat(tempStr);
// let windspeed = parseFloat(windspeedStr);

// //write function to calculate windchill
// //t = temp, s = windspeed
// function calWindChill(t,s)
// {//temp is in fahrenheit and windspeed is in mph

//  if ((t <= 50) && (s > 3))
//  {
//   let windchill =  35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
//   document.querySelector("#windchillValue").innerHTML = "&#xb0;F";
//   return windchill.toFixed(2);
//  }
//  else
//  {
//   return "N/A"
//  }
// }
// document.querySelector("#windchill").innerHTML = calWindChill(temp, windspeed);



// Week 10 lesson

const url = "https://api.openweathermap.org/data/2.5/weather?q=Calabar,Nigeria&appid=a700c849c09401d73d3e8ad6dd55ee20";

let WeatherIcon = document.querySelector('#weather-icon');
let CurrentTemp = document.querySelector('#temp-value');
let WindSpeedKm = document.querySelector('#wind-speed-value');
let WindChillDisplay = document.querySelector('#wind-chill-display');
let WeatherDesc = document.querySelector('#weather-desc');



async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
// //console.log(data);
apiFetch();

function displayResults(weatherData) {
  const tempCelsius = (weatherData.main.temp - 32) * 5 / 9;
  const windSpeedKm = weatherData.wind.speed * 1.609; 

  CurrentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  WeatherIcon.setAttribute('src', iconsrc);
  WeatherIcon.setAttribute('alt', desc);
  WeatherDesc.textContent = desc;

  WindSpeedKm.innerHTML = `${windSpeedKm.toFixed(2)}`;


  let windChill = 35.74 + 0.6215 * weatherData.main.temp - 35.75 * Math.pow(windSpeedKm, 0.16) + 0.4275 * weatherData.main.temp * Math.pow(windSpeedKm, 0.16);

  if ( weatherData.main.speed < 3 && weatherData.main.temp <= 40) {
    WindChillDisplay.textContent = windChill.toFixed(2) + "°F";
  } else {
    WindChillDisplay.textContent = "N/A";
  }
}


displayResults();