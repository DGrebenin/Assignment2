<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" rel="stylesheet" href="/style.css">
        <link type="image/ico" rel="icon" href="/favicon.ico">
        <style>
            #warning {
                border: 1px solid #b6b6b6;
                border-radius: .30rem;
                background: rgb(217, 217, 217);
                overflow: auto;
                position: absolute;
                color: #181818;
                padding: 30px 20px 10px 20px;
            }

            @media screen and (max-width: 576px){
                #warning {
                    width: 90%;
                    height: 85%;
                    top: 7.5%;
                    left: 5%;
                }
            }

            @media screen and (min-width: 576px){
                #warning {
                    width: 70%;
                    height: 85%;
                    top: 7.5%;
                    left: 15%;
                }
            }

            @media screen and (min-width: 1200px){
                #warning {
                    width: 50%;
                    height: 70%;
                    top: 15%;
                    left: 25%;
                }
            }
        </style>
        <title>Experiment</title>
    </head>
    <?php

    $data = json_decode(file_get_contents("php://input"));
    $time1 = $data->timeValid;
    $time2 = $data->timeNoValid;
    $problems = $data->prob;
    $support = $data->help;
    $preference = $data->prefer;

    $database = new SplFileObject("/data.txt");
    $last_line = "";
    while (!$database->eof()) {
        $last_line = $database->fgets();
        $database->next();
    }
    $part_id = explode(",", $last_line)[0];

    $database->fwrite("\n$part_id,$time1,$time2,$problems,$support,$preference");
    $database = null;

    ?>
    <body>
    <main>
        <div id="warning">
            <div style="height: 90%">
                <h2 style="text-align: center; margin: 0 10px 20px 10px">Thank you for your participation!</h2>
                <p>Your participant ID is: <?php echo $part_id?></p>
                <p>The purpose of this experiment was to find out if inline validation speeds up form input and improves
                 user experience in general.</p>
                <p>This website has measured the time you took to fill in each form and your questionnaire answers
                    (referred to as "results" from here on out). As has already been mentioned before the experiment,
                    none of the data you typed in the forms has been  saved (while you are reading this it has already
                    been discarded).</p>
                <p>If you wish for your results to be discarded please contact me at:
                    <a href="mailto:dgrebenin@uclan.ac.uk">dgrebenin@uclan.ac.uk</a> with your participant ID.
                </p>
            </div>
            <div style="height: 10%">
                <div style="height: 50%">
                    <div style="margin: 0 auto 0 auto; width: max-content">
                        <label style="font-weight: bold" for="consent">I agree to the aforementioned rules</label>
                        <input id="consent" type="checkbox">
                    </div>
                </div>
                <div style="height: 50%">
                    <button onclick="startExperiment()" style="margin: 0 auto 0 auto; display: block">Start the experiment</button>
                </div>
            </div>
        </div>
    </main>
    </body>
</html>