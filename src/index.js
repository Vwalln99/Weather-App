import { fetchWeatherData } from './weather.js';
import { displayWeatherData, toggleTemperatureUnit } from './app.js';

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', async () => {
    const cityName = document.getElementById('city-input').value;
    if (cityName) {
        const weatherData = await fetchWeatherData(cityName);
        displayWeatherData(weatherData);
    }
});

const unitToggle = document.getElementById('unit-toggle');
unitToggle.addEventListener('change', toggleTemperatureUnit);