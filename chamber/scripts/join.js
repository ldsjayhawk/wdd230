if (submitTime)
    timestamp(); 

function timestamp() {
    let submitTime = Date.now();
    document.getElementById("submitTime").value = submitTime;
}