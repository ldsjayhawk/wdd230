//dark mode
const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {   
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
	}
});

// responsive menu
const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});


// visits
let visits = Number(window.localStorage.getItem("visits-ls")) || 0;

document.getElementById("visits").textContent = `Number of visits: ${visits}`;
visits++;

//set values in local storage
localStorage.setItem("visits-ls", visits);

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