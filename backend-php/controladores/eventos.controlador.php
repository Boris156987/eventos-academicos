<?php

class ControladorEventos
{

    static public function ctrMostrarEventos()
    {
        return Eventos::ctrMostrarEventos();
    }

    static public function ctrRegistrarEvento($datos)
    {
        return Eventos::ctrRegistrarEvento($datos);
    }

    static public function ctrActualizarEvento($datos)
    {
        return Eventos::ctrActualizarEvento($datos);
    }

    static public function ctrEliminarEvento($id)
    {
        return Eventos::ctrEliminarEvento($id);
    }
}