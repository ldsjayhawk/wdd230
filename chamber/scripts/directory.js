import { copyrightYear, lastModifiedDate } from "./footer.mjs";

const jsonfile = 'data/members.json'
const cards = document.querySelector('#cards')
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");

async function getMemberData() {
    const response = await fetch(jsonfile)
    const data = await response.json();
    console.log(data.members)
    displayMembers(data.members);
}

export const displayMembers = (members) => {
        members.forEach((member) => {
            let card = document.createElement("div")
            let companyname = document.createElement('h3')
            let logo = document.createElement('img')
            let address = document.createElement('p')
            let phone = document.createElement('p')
            let url = document.createElement('a')

            // divElement.classList.add("member")
            // `<div class="member">
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

    // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
    
    grid.addEventListener("click", () => {
        cards.classList.add("grid");
        cards.classList.remove("list");
    });
    
    list.addEventListener("click", () => {
        cards.classList.add("list");
        cards.classList.remove("grid");
    });
    
getMemberData();

// footer info
copyrightYear();
lastModifiedDate();