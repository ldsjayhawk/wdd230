import { displayMembers } from "./display.mjs";

const randomMembers = [];
const cards = document.querySelector("#cards");
const jsonfile = 'data/members.json'

async function getSpotlightData() {
    const response = await fetch(jsonfile);
    if (response.ok) {
      const data = await response.json();
    //   console.table(data);
      const spotlightData = data.members;
      getSpotlight(spotlightData);
    }};

export const getSpotlight = (members) => {
    while (randomMembers.length < 3){
        const randIndex = Math.floor(Math.random() * members.length);
        const selectedMember = members[randIndex];

        if (!randomMembers.includes(selectedMember) && selectedMember.membership > 1) {
                randomMembers.push(selectedMember);
            };
        };
        displayMembers(randomMembers)
    };

getSpotlightData();
cards.classList.add("grid");


