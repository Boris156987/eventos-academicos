<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(0); }

require_once __DIR__ . '/../modelos/conexion.php';
require_once __DIR__ . '/../modelos/inscripciones.modelo.php';
require_once __DIR__ . '/../controladores/inscripciones.controlador.php';

$metodo = $_SERVER['REQUEST_METHOD'];

switch ($metodo) {
    case 'GET':
        if (isset($_GET['evento_id'])) {
            echo json_encode(ControladorInscripciones::ctrMostrarInscripcionesPorEvento($_GET['evento_id']));
        } else {
            echo json_encode(ControladorInscripciones::ctrMostrarInscripciones());
        }
        break;

    case 'POST':
        $datos = json_decode(file_get_contents("php://input"));
        echo json_encode(["resultado" => ControladorInscripciones::ctrRegistrarInscripcion($datos)]);
        break;

    case 'DELETE':
        $datos = json_decode(file_get_contents("php://input"));
        echo json_encode(["resultado" => ControladorInscripciones::ctrEliminarInscripcion($datos->id)]);
        break;
}