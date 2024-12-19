<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Collect form data
    $fullName = isset($_GET['fullName']) ? htmlspecialchars($_GET['fullName']) : 'Not Provided';
    $age = isset($_GET['age']) ? htmlspecialchars($_GET['age']) : 'Not Provided';
    $email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : 'Not Provided';
    $bmi = isset($_GET['bmi']) ? htmlspecialchars($_GET['bmi']) : 'Not Provided';
    $status = isset($_GET['status']) ? htmlspecialchars($_GET['status']) : 'Not Provided';
    $comments = isset($_GET['comments']) ? htmlspecialchars($_GET['comments']) : 'No Comments';

    // Prepare email content
    $subject = "BMI Result for $fullName";
    $message = "
    <html>
    <head>
    <title>BMI Result</title>
    </head>
    <body>
    <h2>BMI Result for $fullName</h2>
    <p><strong>Full Name:</strong> $fullName</p>
    <p><strong>Age:</strong> $age</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>BMI:</strong> $bmi</p>
    <p><strong>Status:</strong> $status</p>
    <p><strong>Comments:</strong> $comments</p>
    </body>
    </html>
    ";

    // Set headers for email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: somtochiokaro@gmail.com" . "\r\n";  // Replace with a valid 'from' email address

    // Gmail SMTP settings
    $to = "chisomsomtochi@gmail.com";  // Replace with your Gmail address
    mail($to, $subject, $message, $headers);
}

header("Location: bmi-result.html");
exit();

?>
