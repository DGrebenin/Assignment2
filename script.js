let passIn = document.getElementById("passIn");
let usernameIn = document.getElementById("usernameIn");
let timeElapsed = 0;

function postData() {
    console.log("yeet");
    fetch("/submit/index.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: ("time=" + timeElapsed)
    }).then(r => r.json().then(d => console.log(d)));
}

passIn.addEventListener("focusin", function () {
    document.getElementById("passPopover").classList.remove("off");
});

passIn.addEventListener("focusout", function () {
    document.getElementById("passPopover").classList.add("off");
});

usernameIn.addEventListener("focusin", function () {
    document.getElementById("userPopover").classList.remove("off");
});

usernameIn.addEventListener("focusout", function () {
    document.getElementById("userPopover").classList.add("off");
});

setInterval(function () {timeElapsed++;}, 1);
