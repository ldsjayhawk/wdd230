const baseurl = "https://ldsjayhawk.github.io/wdd230/";
const linksurl = "https://ldsjayhawk.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksurl);
    const data = await response.json();
    console.log(data);
}

getLinks();