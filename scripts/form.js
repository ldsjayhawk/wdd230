const pw = document.querySelector("#pass");
const repeat = document.querySelector("#repeat");
const message = document.querySelector("#message");

repeat.addEventListener("focusout", check);

function check() {
    if (pw.value !== repeat.value) {
        message.textContent = "Passwords do not match";
        message.style.visibility = "visible";
        message.style.backgroundColor = "#ff3434";
        message.style.color = "#fff";
        message.style.padding = "5px";
        message.style.fontWeight = "700";
		repeat.style.backgroundColor = "#fcd8d8";
		repeat.value = "";
		repeat.focus();
	} else {
		message.style.visibility = "hidden";
		repeat.style.backgroundColor = "#fff";
		repeat.style.color = "#000";
        repeat.style.backgroundColor = "#c2ebc2";
	}
}