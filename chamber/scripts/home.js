// import statements
import { apiFetch } from "./weather.mjs";
import { forecastFetch } from "./forecast.mjs";


window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const bannerDay = date.toLocaleDateString('en-US', { weekday: 'short'});
    const banner = document.querySelector('#banner');

    if(bannerDay === "Mon" || bannerDay === "Tue" || bannerDay === "Wed" ) {
        banner.textContent = `Come to our meet and greet this Wednesday at 7:00 p.m.`;
        banner.classList.add('show');

        banner.addEventListener('click', () =>  {
            banner.classList.remove('show');
        });
    };
    });
    
    
apiFetch();
forecastFetch();
