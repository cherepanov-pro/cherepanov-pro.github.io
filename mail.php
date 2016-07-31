<?php

$frm_name  = "Алексей";
$recepient = "alexlazydev@yandex.ru";
$sitename  = "Мой сайт портфолио";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$subject = trim($_POST["subject"]);
$email = trim($_POST["email"]);
$skype = trim($_POST["skype"]);
$message = trim($_POST["message"]);

$message = "
Тема: $subject <br>
Почта: $email <br>
Скайп: $skype <br>
Сообщение: $message
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");