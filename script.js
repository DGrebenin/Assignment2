let passIn = document.getElementById("passIn");
let usernameIn = document.getElementById("usernameIn");
let timeElapsed = 0;

function postData() {
    console.log("yeet");
    $.post( "../submit/index.php", { time: timeElapsed } );
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
