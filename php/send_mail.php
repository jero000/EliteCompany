<?php
// Simple endpoint to accept contact form submissions and return JSON.
// Designed for local use (MAMP). Customize mail settings for production.
header('Content-Type: application/json; charset=utf-8');

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'Method not allowed']);
  exit;
}

// Basic sanitization
$name    = isset($_POST['nombre']) ? trim(strip_tags($_POST['nombre'])) : '';
$company = isset($_POST['empresa']) ? trim(strip_tags($_POST['empresa'])) : '';
$email   = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($_POST['telefono']) ? trim(strip_tags($_POST['telefono'])) : '';
$service = isset($_POST['servicio']) ? trim(strip_tags($_POST['servicio'])) : '';
$message = isset($_POST['mensaje']) ? trim(strip_tags($_POST['mensaje'])) : '';

if (!$name || !$email || !$message) {
  http_response_code(422);
  echo json_encode(['success' => false, 'error' => 'Missing required fields']);
  exit;
}

// Prepare email
$to = 'contacto@elitecompany.co';
$subject = "Nuevo mensaje desde sitio — $name";
$body = "Nombre: $name\nEmpresa: $company\nEmail: $email\nTeléfono: $phone\nServicio: $service\n\nMensaje:\n$message\n";
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Try to send mail. On many local MAMP setups mail() is not configured; return success for demo.
$mail_sent = false;
try {
  // Suppress warnings
  $mail_sent = @mail($to, $subject, $body, $headers);
} catch (Exception $e) {
  $mail_sent = false;
}

if ($mail_sent) {
  echo json_encode(['success' => true]);
  exit;
}

// If mail not sent (common in local), still return success with note so frontend can show confirmation.
// In production, change logic to reflect actual delivery status.
echo json_encode(['success' => true, 'note' => 'mail_not_sent_local_demo']);
exit;
