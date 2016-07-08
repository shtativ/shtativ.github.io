<?php

// ini_set('display_errors', '1');
error_reporting(~E_NOTICE);
echo "hello, world";
print_r($_POST);
require './PHPMailerAutoload.php';

$name = $_POST['name'];
$phone = $_POST['phone'];

$mail = new PHPMailer;

$mail->CharSet = "UTF-8"; //возможно нужно будет убрать


$mail->SMTPAuth = false;                               // Enable SMTP authentication


$mail->setFrom('robot@tender-partner.com', 'Tender-Partner');
$mail->addAddress('1@tender-partner.com');     // почта, куда отправляются отзывы
$mail->addAddress('buwozoc@divismail.ru');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка за заём!';
$mail->Body    = "<h2>Заявка за заём!</h2><br><b>Телефон:</b> $phone<br>";
$mail->AltBody =    "Заявка за заём!
                    От: $name
                    Телефон: $phone
                    ";


if(!$mail->send()) {
    echo 'Произошла ошибка. Попробуйте позже, а лучше позвоните нам<br>';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo "Принято!";
}

?>
