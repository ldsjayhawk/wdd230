// responsive menu

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});



// copyright year
const d = new Date();
let currentyear = d.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

// set last modified date options
const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
};

// create last modified date variable
lastModified.innerHTML = new Date().toLocaleDateString("en-US", options);