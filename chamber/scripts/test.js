import { apiFetch } from "./fetch.mjs";

const source = 'data/members.json';
const membercard = document.getElementById('membercard');
let memberdata = [];

displayMembersGrid();

function displayMembersGrid() {
    apiFetch(source);
    data.forEach(member =>  {
        membercard.innerHTML +=             
        `<div class="member">
        <h3>${member.company}</h3>
        <img src="${member.image}" alt="company logo" width="100" height="auto">
        <h4>Address: ${member.address}</h4>
        <h4>Phone: ${member.phone}</h4>
        <h4>${member.url}</h4>
        </div>`
        } 
    );
}