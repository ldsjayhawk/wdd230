// import { apiFetch } from "./fetch.mjs";

const currentTemp = document.querySelector('#current-temp');
const highTemp = document.querySelector('#high');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
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
    currentTemp.innerHTML = `${Math.round(data.main.temp)}`
    highTemp.innerHTML = `High Temp: ${Math.round(data.main.temp_max)}`
    lowTemp.innerHTML = `Low Temp: ${Math.round(data.main.temp_min)}`
    humidity.innerHTML = `Humidity: ${data.main.humidity}`
}
