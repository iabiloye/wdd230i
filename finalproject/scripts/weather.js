// https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=a700c849c09401d73d3e8ad6dd55ee20


const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const humidity = document.querySelector("#humidity");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=a700c849c09401d73d3e8ad6dd55ee20";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
} 

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = "<strong>${weatherData.main.temp.toFixed(0)}</strong>";

    const iconsrc = "https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png";
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;

    humidity.textContent = weatherData.main.humidity;
    const speed = weatherData.wind.speed.toFixed(0)
    windSpeed.innerHTML = "${speed} mph";}

    const forecast = document.querySelector("#forecast");
    const endpoint = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=a700c849c09401d73d3e8ad6dd55ee20";
    
    async function apiFetchForecast() {
        try {
            const response = await fetch(endpoint);
            if(response.ok) {
                const data = await response.json()
                displayForecastResults(data)
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    function displayForecastResults(forecast_data) {
        let filtered_forecast = forecast_data.list.filter(forecast => forecast.dt_txt.includes(" 12:00:00"));
        filtered_forecast.slice(0, 3).forEach(forecast_day => {
    
            let week_day = new Date(forecast_day.dt * 1000).toLocaleDateString("en", {weekday: "long"});
            const weather_icon = forecast_day.weather[0].icon;
            const icon_src = "https://openweathermap.org/img/wn/${weather_icon}@2x.png";
            const desc = forecast_day.weather[0].description;
            const weather_temp = forecast_day.main.temp.toFixed(0);
    
            let div = document.createElement("div");
            let day = document.createElement("h3");
            let icon = document.createElement("img");
            let temp = document.createElement("p");
    
            div.className = "forecast-day rounded-corners";
            day.textContent = week_day;
    
            icon.src = icon_src;
            icon.alt = desc;
    
            // icon.className = "forecast-icon";
            temp.textContent = "${weather_temp}°F";
    
            div.appendChild(day);
            div.appendChild(icon);
            div.appendChild(temp);
    
            forecast.appendChild(div);
        });
    }
    
    apiFetchForecast()
    