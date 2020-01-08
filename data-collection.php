<?php
function saveData() {
    $timeElapsed = $_POST["time"];
    $database = fopen("data.txt", "w") or die("Unable to open file!");
    $subjNum = fgets($database);
    fseek($database, 0, SEEK_END);
    fwrite($database, "$subjNum,$timeElapsed,");
}
?>