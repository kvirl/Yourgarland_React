<?php
// api/send.php
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Только POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['success' => false, 'error' => 'Метод не разрешен']));
}

// Получаем данные
$name = $_POST['name'] ?? '';
$tel = $_POST['tel'] ?? '';
$email = $_POST['email'] ?? '';

// Валидация
if (!$name || !$tel || !$email) {
    http_response_code(400);
    die(json_encode(['success' => false, 'error' => 'Заполните все поля']));
}

try {
    // Создаем экземпляр PHPMailer
    $mail = new PHPMailer(true);

    // Настройки сервера
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'ifnormation@yandex.ru';
    $mail->Password   = '';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    // Отправитель и получатель
    $mail->setFrom('ifnormation@yandex.ru', 'Заявка с сайта');
    $mail->addAddress('ifnormation@yandex.ru');
    $mail->addReplyTo($email, $name);

    // Контент
    $mail->isHTML(true);
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> {$name}</p>
        <p><strong>Телефон:</strong> {$tel}</p>
        <p><strong>Email:</strong> {$email}</p>
    ";
    $mail->AltBody = "Имя: {$name}\nТелефон: {$tel}\nEmail: {$email}";

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Заявка отправлена!']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Ошибка отправки: ' . $mail->ErrorInfo
    ]);
}
