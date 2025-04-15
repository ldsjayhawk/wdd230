const lastModified = document.querySelector('#lastModified')

function copyrightYear() {
    const d = new Date();
    let currentyear = d.getFullYear();
    document.getElementById("currentyear").innerHTML = currentyear;
    };

// set last modified date options
const options = {
    hour12: true,
    day: "numeric",
    month: "long",
    year: "numeric",
    // hour: "numeric",
    // minute: "numeric"
};

function lastModifiedDate() {
    lastModified.innerHTML = new Date().toLocaleDateString("en-US", options);
};

copyrightYear();
lastModifiedDate();