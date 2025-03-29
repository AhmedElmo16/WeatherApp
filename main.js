const apiKey = '65064dce399f4da60a701045afb48ed3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    var data = await response.json();

    if(data.name) {
        document.querySelector('.invalid').style.display = 'none';
        document.querySelector('.city').innerHTML = data.name;
    }
    else {
        document.querySelector('.invalid').style.display = 'block';
    }

    switch(data.weather[0].main) {
        case 'Clear':
            weatherIcon.src = 'clear.png';
            break;
        case 'Clouds':
            weatherIcon.src = 'clouds.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'drizzle.png';
            break;
        case 'Mist':
            weatherIcon.src = 'mist.png';
            break;
        case 'Rain':
            weatherIcon.src = 'rain.png';
            break;
        case 'Snow':
            weatherIcon.src = 'snow.png';
            break;
    }

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    document.querySelector('.weather').style.display = 'block';
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
