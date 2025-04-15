// intersectional observer to hold lazy loading images until they appear on screen
const images = document.querySelectorAll ("img.lazy");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, options);

images.forEach(image => {
    observer.observe(image);
});

//local storage to store date visited
let days = 0;
let today = Date.now();
let dayTense = 'days'
let visitMessage = document.getElementById("visitMessage");

//get values stored in local storage
let visits = Number(window.localStorage.getItem("visits-ls")) || 0;
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;

//set days (drives whether day is singular or plural and which message to display)
days = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));


//Determine message to display
if (days === 1) {
    dayTense = 'day'
}

if (visits == 0) {
	visitMessage.textContent = `Welcome! Let us know if you have any questions.`;
} else if (days < 1) {
	visitMessage.textContent = `Back so soon! Awesome!`;
} else {
	visitMessage.textContent = `You last visited ${days} ${dayTense} ago.`;
}

//set values in local storage
visits++;
localStorage.setItem("visits-ls", visits);
localStorage.setItem("lastVisit-ls", today);