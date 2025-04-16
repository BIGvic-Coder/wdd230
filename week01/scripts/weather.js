const apiKey = "8d30aaafafee4d9528bf8dba64723501";
const city = "Lagos"; // Change to your chamber city
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  const response = await fetch(weatherURL);
  const data = await response.json();
  document.getElementById("temperature").textContent =
    data.main.temp.toFixed(1);
  document.getElementById("weather-description").textContent =
    data.weather[0].description;
  document.getElementById(
    "weather-icon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

async function getForecast() {
  const response = await fetch(forecastURL);
  const data = await response.json();
  const forecastContainer = document.getElementById("forecast");
  forecastContainer.innerHTML = "<h3>3-Day Forecast</h3>";
  let count = 0;

  for (let i = 0; i < data.list.length && count < 3; i++) {
    const forecast = data.list[i];
    if (forecast.dt_txt.includes("12:00:00")) {
      const day = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
        weekday: "short",
      });
      forecastContainer.innerHTML += `
        <p><strong>${day}</strong>: ${forecast.main.temp.toFixed(1)} °F, ${
        forecast.weather[0].description
      }</p>
      `;
      count++;
    }
  }
}

getWeather();
getForecast();
