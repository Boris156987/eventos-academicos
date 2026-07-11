<?php

class ControladorInscripciones
{

    static public function ctrMostrarInscripciones()
    {
        return Inscripciones::ctrMostrarInscripciones();
    }

    static public function ctrMostrarInscripcionesPorEvento($eventoId)
    {
        return Inscripciones::ctrMostrarInscripcionesPorEvento($eventoId);
    }

    static public function ctrRegistrarInscripcion($datos)
    {
        return Inscripciones::ctrRegistrarInscripcion($datos);
    }

    static public function ctrEliminarInscripcion($id)
    {
        return Inscripciones::ctrEliminarInscripcion($id);
    }
}