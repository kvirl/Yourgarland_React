<?php
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ===== Загружаем переменные из .env (если файл есть) =====
$envFile = __DIR__ . '/../.env';
if (file_exists($envFile)) {
    $env = parse_ini_file($envFile);
    $smtpPassword = $env['SMTP_PASSWORD'] ?? '';
} else {
    // Если файла нет (например на хостинге) — берём из переменных окружения
    $smtpPassword = getenv('SMTP_PASSWORD') ?: '';
}

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['success' => false, 'error' => 'Метод не разрешен']));
}

$name = $_POST['name'] ?? '';
$tel = $_POST['tel'] ?? '';
$email = $_POST['email'] ?? '';

if (!$name || !$tel || !$email) {
    http_response_code(400);
    die(json_encode(['success' => false, 'error' => 'Заполните все поля']));
}

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'ifnormation@yandex.ru';
    $mail->Password   = $smtpPassword;   // ← пароль из .env
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom('ifnormation@yandex.ru', 'Заявка с сайта');
    $mail->addAddress('ifnormation@yandex.ru');
    $mail->addReplyTo($email, $name);

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
    echo json_encode(['success' => false, 'error' => 'Ошибка отправки: ' . $mail->ErrorInfo]);
}
