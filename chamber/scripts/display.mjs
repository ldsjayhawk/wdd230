export const displayMembers = (members) => {
    cards.innerHTML = "";
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyname = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');

        companyname.textContent = `${member.name}`;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `company logo for ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');
        url.setAttribute('href',member.url);
        url.textContent = member.url;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        
        card.appendChild(logo);
        card.appendChild(companyname); 
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        
        cards.appendChild(card);
        card.classList.add('member');
    });
} 