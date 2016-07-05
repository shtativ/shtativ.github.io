<?php

// ini_set('display_errors', '1');
error_reporting(~E_NOTICE);
echo "hello, world";
print_r($_POST);
require './PHPMailerAutoload.php';

$name = $_POST['name'];
$message = $_POST['messagecontact'];

$mail = new PHPMailer;

$mail->CharSet = "UTF-8"; //возможно нужно будет убрать







$mail->SMTPAuth = false;                               // Enable SMTP authentication


$mail->setFrom('robot@tender-partner.com', 'Tender-Partner');
$mail->addAddress('1@tender-partner.com');     // почта, куда отправляются отзывы


//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Отзыв с tender-partner.com';
$mail->Body    = "<h2>Новый отзыв!</h2><br><b>От:</b> $name<br><small>источник: $message</small>";
$mail->AltBody =    "Отзыв с tender-partner.com!
                    От: $name
                    Отзыв: $message
                    ";


if(!$mail->send()) {
    echo 'Произошла ошибка. Попробуйте позже, а лучше позвоните нам<br>';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo "Принято!";
}

?>
