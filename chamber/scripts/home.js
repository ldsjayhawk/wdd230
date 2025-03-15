// import statements
// import { displayMembers } from "./directory";
import { apiFetch } from "./weather.mjs";
import { forecastFetch } from "./forecast.mjs";
import { copyrightYear, lastModifiedDate } from "./footer.mjs";
// import { hamburgerMenu } from "./menu.mjs";

// hamburgerMenu();
// responsive menu
const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

const jsonfile = 'data/members.json'

// spotlight cards
async function getMemberData() {
    const response = await fetch(jsonfile)
    const data = await response.json();
    console.log(data.members)
    displayMembers(data.members);
}

const displayMembers = (members) => {
    for (let i = 0; i < cars.length; i++) {
    let randomMember = cards[Math.floor(Math.random()*members.length)]

        members.forEach((member) => {
            let card = document.createElement("div")
            let companyname = document.createElement('h3')
            let logo = document.createElement('img')
            let address = document.createElement('p')
            let phone = document.createElement('p')
            let url = document.createElement('a')


            companyname.textContent = `${member.name}`
            logo.setAttribute('src', member.image);
            logo.setAttribute('alt', `company logo for ${member.name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '150');
            logo.setAttribute('height', '150');
            url.setAttribute('href',member.url)
            url.textContent = member.url;
            address.textContent = `${member.address}`
            phone.textContent = `${member.phone}`
            
            card.appendChild(companyname); 
            card.appendChild(logo);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(url);
            cards.appendChild(card);
            card.classList.add('member')
            
            });
        }

getMemberData();

// weather
apiFetch();
forecastFetch();

// footer info
copyrightYear();
lastModifiedDate();
