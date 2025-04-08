const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
let results = null;

async function getProphetData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.table(data)
    displayProphets(data.prophets)
  }};

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullname = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthdate = document.createElement("p");
        let birthplace = document.createElement("p");



        fullname.textContent = `${prophet.name} ${prophet.lastname}`
        birthdate.textContent = `${prophet.birthdate}`
        birthplace.textContent = `${prophet.birthplace}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.fullname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        card.appendChild(fullname);
        card.appendChild(birthplace);
        card.appendChild(birthdate);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}
  getProphetData();

gridbutton.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");
});


listbutton.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("grid");
});