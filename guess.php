<?php
$servername = "fdb3.biz.nf";
$username = "2083618_test";
$password = "mccastlm84";
$db = "2083618_test";
$db2 = "2083618_test";
$db3 = "2083618_test";

// Create connection Birthdate guess
$conn_guess = mysqli_connect($servername, $username, $password , $db2);


// Check connection Birthdate
if (!$conn_guess) {
    die("Connection failed: " . mysqli_connect_error());
}




if (isset($_POST['fName']) && isset($_POST['weight'])) {

    $name = $_POST['fName'];
    $weight = $_POST['weight'];
    $guessDate = date( 'Y-m-d', strtotime($_POST['gdate']));

    $query = "INSERT INTO guess (name, weight, gdate)".
            "VALUES ('$name','$weight','$guessDate')";

    mysqli_query($conn_guess, $query)
        or die('Erroring querying the database');

}

mysqli_close($conn_guess);

header('Location:index.php', true, 303);

 ?>
