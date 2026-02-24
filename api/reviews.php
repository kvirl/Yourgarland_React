<?php
// api/reviews.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

// Твои данные для подключения к БД
$host = 'localhost';
$user = 'ci37007_1';
$pass = 'm25ROMAHA2++';
$db = 'ci37007_1';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Ошибка подключения к БД']);
    exit;
}

// GET - получение отзывов
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT firstname, lastname, rating, text FROM users ORDER BY created_at DESC");
    $reviews = [];
    while ($row = $result->fetch_assoc()) {
        $reviews[] = $row;
    }
    echo json_encode($reviews);
    exit;
}

// POST - добавление отзыва
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = $_POST['firstname'] ?? '';
    $lastname = $_POST['lastname'] ?? '';
    $rating = (int)($_POST['rating'] ?? 5);
    $text = $_POST['text'] ?? '';

    if (!$firstname || !$lastname || !$text) {
        http_response_code(400);
        echo json_encode(['error' => 'Заполните все поля']);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, rating, text) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssis", $firstname, $lastname, $rating, $text);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Ошибка сохранения']);
    }
    $stmt->close();
    $conn->close();
    exit;
}
