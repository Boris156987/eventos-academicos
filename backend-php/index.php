<?php
header("Content-Type: application/json; charset=UTF-8");

echo json_encode([
    "mensaje" => "API de Eventos Académicos activa",
    "endpoints" => [
        "GET/POST/PUT/DELETE" => "/api/eventos.php",
        "GET/POST/PUT/DELETE" => "/api/participantes.php",
        "GET/POST/PUT/DELETE" => "/api/inscripciones.php"
    ]
]);