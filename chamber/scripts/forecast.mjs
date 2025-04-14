const tomorrowTemp = document.querySelector('#tomorrow-temp');
const tomweatherIcon = document.querySelector('#tom-weather-icon');
const tomdescription = document.querySelector('#tom-figcaption');

const daytwoTemp = document.querySelector('#daytwo-temp');
const twoweatherIcon = document.querySelector('#two-weather-icon');
const twodescription = document.querySelector('#two-figcaption');

const daythreeTemp = document.querySelector('#daythree-temp');
const threeweatherIcon = document.querySelector('#three-weather-icon');
const threedescription = document.querySelector('#three-figcaption');

const today = new Date();
const daytwo = new Date();
const daythree = new Date();

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
daytwo.setDate(today.getDate() + 2);
daythree.setDate(today.getDate() + 3);

const options = { weekday: 'long' };
const tomorrowDay = tomorrow.toLocaleDateString('en-US', options);
const secondDay = daytwo.toLocaleDateString('en-US', options);
const thirdDay = daythree.toLocaleDateString('en-US', options);

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.928&lon=-94.690&appid=995719e2f16a6f13c875fdaadddc9b71&units=imperial';

export async function forecastFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const forecastdata = await response.json();
            // console.log(forecastdata)
            displayForecast(forecastdata);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
                console.log(error);
            }
    }

    export function displayForecast(forecastdata) {
        tomorrowTemp.innerHTML = `${tomorrowDay}: ${Math.round(forecastdata.list[0].main.temp_max)}°F`;
        
        const tomiconsrc = `https://openweathermap.org/img/wn/${forecastdata.list[0].weather[0].icon}@2x.png`; 
        tomdescription.innerHTML = forecastdata.list[0].weather[0].description;
        tomweatherIcon.setAttribute('SRC', tomiconsrc);
        tomweatherIcon.setAttribute('alt', forecastdata.list[0].weather[0].description);

        daytwoTemp.innerHTML = `${secondDay}: ${Math.round(forecastdata.list[1].main.temp_max)}°F`;

        const twoiconsrc = `https://openweathermap.org/img/wn/${forecastdata.list[1].weather[0].icon}@2x.png`; 
        twodescription.innerHTML = forecastdata.list[1].weather[0].description;
        twoweatherIcon.setAttribute('SRC', twoiconsrc);
        twoweatherIcon.setAttribute('alt', forecastdata.list[1].weather[0].description);
        
        daythreeTemp.innerHTML = `${thirdDay}: ${Math.round(forecastdata.list[2].main.temp_max)}°F`;

        const threeiconsrc = `https://openweathermap.org/img/wn/${forecastdata.list[2].weather[0].icon}@2x.png`; 
        threedescription.innerHTML = forecastdata.list[2].weather[0].description;
        threeweatherIcon.setAttribute('SRC', threeiconsrc);
        threeweatherIcon.setAttribute('alt', forecastdata.list[2].weather[0].description);
    }
