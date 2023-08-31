let isCelsius = true;
const weatherInfo = document.getElementById('weather-info');

export function toggleTemperatureUnit() {
    isCelsius = !isCelsius;
    const temperatureElement = document.getElementById('temperature');
    const weatherData = JSON.parse(weatherInfo.getAttribute('data-weather'));

    if (isCelsius) {
        temperatureElement.textContent = `${weatherData.main.temp}°C`;
    } else {
        const fahrenheitTemp = (weatherData.main.temp * 9/5) + 32;
        temperatureElement.textContent = `${fahrenheitTemp.toFixed(2)}°F`;
    }
}

export function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>Actual weather in ${data.name}</h2>
        <p>Temperature: <span id="temperature">${data.main.temp}°C</span></p>
        <p>Sky: ${data.weather[0].description}</p>
    `;
    weatherInfo.setAttribute('data-weather', JSON.stringify(data));
}