const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.76&lon=6.64&appid=995719e2f16a6f13c875fdaadddc9b71&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
                console.log(error);
            }
    }

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}°F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    description.innerHTML = data.weather[0].description;
    weatherIcon.setAttribute('SRC', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}

apiFetch();
