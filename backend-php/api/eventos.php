<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(0); }

require_once __DIR__ . '/../modelos/conexion.php';
require_once __DIR__ . '/../modelos/eventos.modelo.php';
require_once __DIR__ . '/../controladores/eventos.controlador.php';

$metodo = $_SERVER['REQUEST_METHOD'];

switch ($metodo) {
    case 'GET':
        echo json_encode(ControladorEventos::ctrMostrarEventos());
        break;

    case 'POST':
        $datos = json_decode(file_get_contents("php://input"));
        echo json_encode(["resultado" => ControladorEventos::ctrRegistrarEvento($datos)]);
        break;

    case 'PUT':
        $datos = json_decode(file_get_contents("php://input"));
        echo json_encode(["resultado" => ControladorEventos::ctrActualizarEvento($datos)]);
        break;

    case 'DELETE':
        $datos = json_decode(file_get_contents("php://input"));
        echo json_encode(["resultado" => ControladorEventos::ctrEliminarEvento($datos->id)]);
        break;
}