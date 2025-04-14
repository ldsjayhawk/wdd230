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
    lastModified.innerHTML = new Date().toLocaleDateString("en-US", options);
};

export function timestamp() {
    timestamp.innerHTML = new Date().toLocaleDateString("en-US", options);
}