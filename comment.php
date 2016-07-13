<?php
$servername = "fdb3.biz.nf";
$username = "2083618_test";
$password = "mccastlm84";
$db = "2083618_test";
$db2 = "2083618_test";
$db3 = "2083618_test";

// Comment wall

$conn_tips = mysqli_connect($servername, $username, $password , $db3);

if (!$conn_tips) {
    die("Connection failed: " . mysqli_connect_error());
}




if (isset($_POST['author_name']) && isset($_POST['comment_message'])) {

    $aname = $_POST['author_name'];
    $cmt = mysqli_real_escape_string($conn_tips, $_POST['comment_message']);

    $query = "INSERT INTO comment (author, message)".
            "VALUES ('$aname','$cmt')";

    mysqli_query($conn_tips, $query)
        or die('Erroring querying the database');

    header('Location:index.php',true,303);
}


?>
