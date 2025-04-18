const currentTemp = document.querySelector('#currentTemp');
const highTemp = document.querySelector('#high');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.928&lon=-94.690&appid=995719e2f16a6f13c875fdaadddc9b71&units=imperial';

export async function apiFetch() {
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
    function displayResults(data) {
        currentTemp.innerHTML = `Current Temp: ${Math.round(data.main.temp)}°F`;
        highTemp.innerHTML = `High Temp: ${Math.round(data.main.temp_max)}°F`;
        lowTemp.innerHTML = `Low Temp: ${Math.round(data.main.temp_min)}°F`;
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
        description.innerHTML = data.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', data.weather[0].description);
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`
}

apiFetch();