<?php

class Eventos
{

    static public function ctrMostrarEventos()
    {
        $tabla = "eventos";
        $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla ORDER BY id DESC");
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function ctrRegistrarEvento($datos)
    {
        $tabla = "eventos";
        $stmt = Conexion::conectar()->prepare(
            "INSERT INTO $tabla (nombre, descripcion, fecha, lugar, cupo)
             VALUES (:nombre, :descripcion, :fecha, :lugar, :cupo)"
        );

        $stmt->bindParam(":nombre", $datos->nombre);
        $stmt->bindParam(":descripcion", $datos->descripcion);
        $stmt->bindParam(":fecha", $datos->fecha);
        $stmt->bindParam(":lugar", $datos->lugar);
        $stmt->bindParam(":cupo", $datos->cupo);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
    }

    static public function ctrActualizarEvento($datos)
    {
        $tabla = "eventos";
        $stmt = Conexion::conectar()->prepare(
            "UPDATE $tabla SET nombre = :nombre, descripcion = :descripcion,
             fecha = :fecha, lugar = :lugar, cupo = :cupo WHERE id = :id"
        );

        $stmt->bindParam(":id", $datos->id);
        $stmt->bindParam(":nombre", $datos->nombre);
        $stmt->bindParam(":descripcion", $datos->descripcion);
        $stmt->bindParam(":fecha", $datos->fecha);
        $stmt->bindParam(":lugar", $datos->lugar);
        $stmt->bindParam(":cupo", $datos->cupo);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
    }

    static public function ctrEliminarEvento($id)
    {
        $tabla = "eventos";
        $stmt = Conexion::conectar()->prepare("DELETE FROM $tabla WHERE id = :id");
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
    }
}