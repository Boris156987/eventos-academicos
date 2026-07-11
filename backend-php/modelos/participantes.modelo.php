<?php

class Participantes
{

    static public function ctrMostrarParticipantes()
    {
        $tabla = "participantes";
        $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla ORDER BY id DESC");
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function ctrRegistrarParticipante($datos)
    {
        $tabla = "participantes";
        $stmt = Conexion::conectar()->prepare(
            "INSERT INTO $tabla (nombre, email, telefono)
             VALUES (:nombre, :email, :telefono)"
        );

        $stmt->bindParam(":nombre", $datos->nombre);
        $stmt->bindParam(":email", $datos->email);
        $stmt->bindParam(":telefono", $datos->telefono);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
    }

    static public function ctrActualizarParticipante($datos)
    {
        $tabla = "participantes";
        $stmt = Conexion::conectar()->prepare(
            "UPDATE $tabla SET nombre = :nombre, email = :email, telefono = :telefono
             WHERE id = :id"
        );

        $stmt->bindParam(":id", $datos->id);
        $stmt->bindParam(":nombre", $datos->nombre);
        $stmt->bindParam(":email", $datos->email);
        $stmt->bindParam(":telefono", $datos->telefono);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
    }

    static public function ctrEliminarParticipante($id)
    {
        $tabla = "participantes";
        $stmt = Conexion::conectar()->prepare("DELETE FROM $tabla WHERE id = :id");
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
    }
}