// set last modified date options
const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

const modifyDate = document.getElementById("lastModified");

// create last modified date variable
modifyDate.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US", options);