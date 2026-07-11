<?php

class ControladorParticipantes
{

    static public function ctrMostrarParticipantes()
    {
        return Participantes::ctrMostrarParticipantes();
    }

    static public function ctrRegistrarParticipante($datos)
    {
        return Participantes::ctrRegistrarParticipante($datos);
    }

    static public function ctrActualizarParticipante($datos)
    {
        return Participantes::ctrActualizarParticipante($datos);
    }

    static public function ctrEliminarParticipante($id)
    {
        return Participantes::ctrEliminarParticipante($id);
    }
}