let passIn = document.getElementById("passIn");
let usernameIn = document.getElementById("usernameIn");
let timeElapsed = 0;

function postData() {
    console.log("yeet");
    fetch("/experiment.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: ("time=" + timeElapsed)
    }).then(r => r.text().then(html => document.write(html)));
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

function toggleAlert(alert, opt_set) {
        if (alert.classList.contains("on")) {
            if (opt_set !== true) {
                alert.classList.remove("on");
                alert.classList.add("off");
            }
        } else if (alert.classList.contains("off")) {
            if (opt_set !== false) {
                alert.classList.remove("off");
                alert.classList.add("on");
            }
        } else {
            if (opt_set === true) {
                alert.classList.add("on");
            } else {
                alert.classList.add("off");
            }
        }
}

for (let alert of document.getElementsByClassName("alert")) {
    alert.addEventListener("click", function () {
        toggleAlert(alert, false);
    });
}