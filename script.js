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