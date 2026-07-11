import axiosClient from '../api/axiosClient';

export const getInscripcionesPorEvento = (eventoId) =>
  axiosClient.get(`/inscripciones.php?evento_id=${eventoId}`);

export const crearInscripcion = (inscripcion) =>
  axiosClient.post('/inscripciones.php', inscripcion);

export const eliminarInscripcion = (id) =>
  axiosClient.delete('/inscripciones.php', { data: { id } });