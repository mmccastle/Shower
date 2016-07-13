<?php
$servername = "fdb3.biz.nf";
$username = "2083618_test";
$password = "mccastlm84";
$db = "2083618_test";
$db2 = "2083618_test";
$db3 = "2083618_test";

// Create connection
$conn_rsvp = mysqli_connect($servername, $username, $password , $db);


// Check connection
if (!$conn_rsvp) {
    die("Connection failed: " . mysqli_connect_error());
}




if (isset($_POST['guest_name']) && isset($_POST['guest']) && isset($_POST['attending'])) {

    $name = $_POST['guest_name'];
    $guest = $_POST['guest'];
    $attending = $_POST['attending'];


    $query = "INSERT INTO guestlist (name, attending, num_of_guest)".
            "VALUES ('$name','$attending','$guest')";

    mysqli_query($conn_rsvp, $query)
        or die('Erroring querying the database');

}

mysqli_close($conn_rsvp);

header('Location:index.php', true, 303);
 ?>
