const baseurl = "https://ldsjayhawk.github.io/wdd230/";
const linksurl = "https://ldsjayhawk.github.io/wdd230/data/links.json";
const assignments = document.querySelector('#assignments')

async function getLinks() {
    const response = await fetch(linksurl);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        // let weeknum = document.createElement("p");
        // let title = document.createElement("p");
        // let url = document.createElement("a");
        li.textContent = item;

        const li = document.createElement('li');
        li.innerHTML = `${week.week}: <a href=${week.links.url}}>${week.links.title}}</a>`;
        assignments.appendChild(li);
});
}

getLinks();