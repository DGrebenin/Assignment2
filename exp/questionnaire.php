<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Experiment</title>
        <link href="/favicon.ico" rel="icon" type="image/ico" />
        <link href="/style.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <footer style="position: fixed; bottom: 0; width: 100%">
            <div class="alert alert-green" id="thank">
                Please accept the rules to continue!
            </div>
        </footer>
        <script>
            let timeElapsed = <?php echo $_POST["time"];?>;
        </script>
        <script rel="script" type="text/javascript" src="/script.js"></script>
    </body>
</html>