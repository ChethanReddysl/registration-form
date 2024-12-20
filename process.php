<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $dob = $_POST["dob"];
    $gender = $_POST["gender"];
    
    // You can add additional processing here, such as saving to a database
    
    // Display the formatted output
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Registration Successful</title>
        <link rel='stylesheet' href='styles.css'>
    </head>
    <body>
        <div class='container'>
            <h1>Registration Successful</h1>
            <div class='result'>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Phone:</strong> $phone</p>
                <p><strong>Date of Birth:</strong> $dob</p>
                <p><strong>Gender:</strong> $gender</p>
            </div>
        </div>
    </body>
    </html>";
} else {
    // Redirect to the form page if accessed directly
    header("Location: index.html");
    exit();
}
?>

