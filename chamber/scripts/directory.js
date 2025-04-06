const jsonfile = 'data/members.json'
const cards = document.querySelector('#cards')
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
let memberData = [];

async function getMemberData() {
    const response = await fetch(jsonfile)
    const data = await response.json();
    memberData = (data.members)
    displayMembers(data.members);
}

const displayMembers = (members) => {
    cards.innerHTML = "";
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

const displayList = (members) => {
    cards.innerHTML = "";
    members.forEach((member) => {
        const li = document.createElement('li');
        li.textContent = `${member.name}`
        cards.appendChild(li);
        });
    };

grid.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
    displayMembers(membersData);

    grid.classList.add("active");
    list.classList.remove("active");
});

list.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
    displayList(membersData);

    list.classList.add("active");
    grid.classList.remove("active");
});
     
getMemberData();