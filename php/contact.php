<?php
    if (isset($_POST['submit'])) {
        $to = "info@murar-ba.sk"; // this is your Email address
        $from = $_POST['email']; // this is the sender's Email address
        
        $name = $_POST['name'];
        $subject = "Murár-BA";
        $message = $_POST['message'] . "\n\n" . $name . ", " . $from;
        $headers = "From:" . $from;
        
        mail($to, $subject, $message, $headers);
        header("Location: ../index.php");
    }
?>