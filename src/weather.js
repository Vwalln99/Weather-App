
async function fetchWeatherData(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e39ea0c273f6d7178790ad5044509a9d&units=metric`);
    const data = await response.json();
    return data;
}

export { fetchWeatherData };