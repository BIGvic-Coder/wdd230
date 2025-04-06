const apiKey = "8d30aaafafee4d9528bf8dba64723501"; // Replace this with your actual API key
const city = "Rexburg";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    const temp = data.main.temp.toFixed(1);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.addEventListener("DOMContentLoaded", fetchWeather);

    document.getElementById("temperature").textContent = temp;
    document.getElementById("weather-description").textContent = description;
    document.getElementById("weather-icon").setAttribute("src", iconURL);
    document.getElementById("weather-icon").setAttribute("alt", description);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

fetchWeather();
