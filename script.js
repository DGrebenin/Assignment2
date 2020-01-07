let passIn = document.getElementById("passIn");
let usernameIn = document.getElementById("usernameIn");
let time = 0;

function postData() {
    $.post( "../submit/index.php", { time: time } );
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

setInterval(function () {time++;}, 1);
