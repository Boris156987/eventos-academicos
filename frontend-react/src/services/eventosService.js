import axiosClient from '../api/axiosClient';

export const getEventos = () => axiosClient.get('/eventos.php');

export const crearEvento = (evento) => axiosClient.post('/eventos.php', evento);

export const actualizarEvento = (evento) => axiosClient.put('/eventos.php', evento);

export const eliminarEvento = (id) => axiosClient.delete('/eventos.php', { data: { id } });