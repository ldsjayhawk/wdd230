const options = {
    hour12: true,
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
};

export function copyrightYear() {
    const d = new Date();
    let currentyear = d.getFullYear();
    document.getElementById("currentyear").innerHTML = currentyear;
    };

// set last modified date options
export function lastModifiedDate() {

    // create last modified date variable
    lastModified.innerHTML = new Date().toLocaleDateString("en-US", options);
};

export function timestamp() {
    timestamp = new Date().toLocaleDateString("en-US", options);
    document.getElementById("timestamp").innerHTML = timestamp;
}