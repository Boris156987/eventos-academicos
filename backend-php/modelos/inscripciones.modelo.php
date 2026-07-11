<?php

class Inscripciones
{

    static public function ctrMostrarInscripciones()
    {
        $tabla = "inscripciones";
        $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla ORDER BY id DESC");
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function ctrMostrarInscripcionesPorEvento($eventoId)
    {
        $tabla = "inscripciones";
        $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla WHERE evento_id = :evento_id");
        $stmt->bindParam(":evento_id", $eventoId);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function ctrRegistrarInscripcion($datos)
    {
        $tabla = "inscripciones";
        $stmt = Conexion::conectar()->prepare(
            "INSERT INTO $tabla (evento_id, participante_id)
             VALUES (:evento_id, :participante_id)"
        );

        $stmt->bindParam(":evento_id", $datos->evento_id);
        $stmt->bindParam(":participante_id", $datos->participante_id);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
    }

    static public function ctrEliminarInscripcion($id)
    {
        $tabla = "inscripciones";
        $stmt = Conexion::conectar()->prepare("DELETE FROM $tabla WHERE id = :id");
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
    }
}