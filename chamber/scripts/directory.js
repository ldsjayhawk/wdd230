import { displayMembers } from "./display.mjs";

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const cards = document.querySelector('#cards')

const jsonfile = 'data/members.json'
let memberData = [];


export async function getMemberData() {
    const response = await fetch(jsonfile);
    if (response.ok) {
      const data = await response.json();
      //console.table(data);
      memberData = data.members;
      displayMembers(memberData);
    }};

cards.classList.add("grid");

grid.addEventListener("click", () => {
	cards.classList.add("grid");
	cards.classList.remove("list");

    grid.classList.add("active");
    list.classList.remove("active");
});


list.addEventListener("click", () => {
	cards.classList.add("list");
	cards.classList.remove("grid");

    list.classList.add("active");
    grid.classList.remove("active");
});

getMemberData();

