const baseurl = "https://ldsjayhawk.github.io/wdd230/";
const linksurl = "https://ldsjayhawk.github.io/wdd230/data/links.json";
const assignments = document.querySelector('#assignments')

async function getLinks() {
    const response = await fetch(linksurl);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
};

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const weekName = document.createElement('div');
        weekName.textContent = `${week.week}:` ;
        assignments.appendChild(weekName);
        const div = document.createElement("div")

        week.links.forEach((link, i) => {
            if (link.url.trim() !== '' && link.title.trim() !== '') {
                const a = document.createElement("a")
                a.textContent = link.title;
                a.href = link.url;
                div.appendChild(a);
                if (i < week.links.length - 1){
                    const text = document.createTextNode(" | ")
                    div.appendChild(text)
                }
            }
            assignments.appendChild(div);
        })
    })
}

// export const displayMembers = (members) => {
//     cards.innerHTML = "";
//     members.forEach((member) => {
//         let card = document.createElement("section");
//         let companyname = document.createElement('h3');
//         let logo = document.createElement('img');
//         let address = document.createElement('p');
//         let phone = document.createElement('p');
//         let url = document.createElement('a');

//         companyname.textContent = `${member.name}`;
//         logo.setAttribute('src', member.image);
//         logo.setAttribute('alt', `company logo for ${member.name}`);
//         logo.setAttribute('loading', 'lazy');
//         logo.setAttribute('width', '150');
//         logo.setAttribute('height', '150');
//         url.setAttribute('href',member.url);
//         url.textContent = member.url;
//         address.textContent = `${member.address}`;
//         phone.textContent = `${member.phone}`;
        
//         card.appendChild(logo);
//         card.appendChild(companyname); 
//         card.appendChild(address);
//         card.appendChild(phone);
//         card.appendChild(url);
        
//         cards.appendChild(card);
//         card.classList.add('member');
//     });
// } 

getLinks();