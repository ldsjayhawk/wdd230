const tomorrow = document.querySelector('#tomorrow-temp');
const dayThreeTemp = document.querySelector('#day-three-temp');
const weekday = document.querySelector('#weekday');

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
                // console.log(error);
            }
    }

export function calculateDayThree(date) {

    const options = {
        weekday: "long"
    };

    // create last modified date variable
    return new Date(date).toLocaleDateString("en-US", options);
};

export function displayForecast(forecastdata) {
    weekday.innerHTML = calculateDayThree(forecastdata.list[1].dt_txt);
    tomorrow.innerHTML = `${Math.round(forecastdata.list[0].main.temp_max)}`
    dayThreeTemp.innerHTML = `${Math.round(forecastdata.list[1].main.temp_max)}`
}
