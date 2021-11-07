<!DOCTYPE html>
<!--calculateAge.php, purpose of document is week 11 assignment for ACSG-540-01 class at Saint Xavier University
Created by: Greg Cudzich on 2021-11-07 -->
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Calculation of your birth</title>
</head>
<body>
    <h3>Enter your name and date of birth.</h3>
    <h4>*fill out all fields</h4>
<form name="form" action="" method="post">
    <input type="text" name="Name" id="Name" placeholder="Your Name"/>
    <br>
    <br>
    <input type="text" name="DOB" id="DOB" placeholder="DOB (ex. 01/21/2000)"/>
    <br>
    <br>
    <input type="submit" name="submit" value="Submit"/>
</form>
    <p>
    <?php
        if (isset($_POST['submit'])) {
            $currDate = date("Y-m-d");
            $userDOB = date("Y-m-d", strtotime($_POST["DOB"]));
            $currDateFormatted = new DateTime($currDate);
            $userDateFormatted = new DateTime($userDOB);
            $interval = $currDateFormatted->diff($userDateFormatted);
            $name = $_POST['Name'];
            print "Hello <em>$name</em>.";

            echo "<br>". " It has been " . $interval->y . " years, " . $interval->m." months, and ".$interval->d." days since you were born. You are " . $interval->y . " years old.";
        }
    ?>
    </p>
</body>
</html>