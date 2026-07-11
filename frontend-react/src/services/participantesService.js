import axiosClient from '../api/axiosClient';

export const getParticipantes = () => axiosClient.get('/participantes.php');

export const crearParticipante = (participante) => axiosClient.post('/participantes.php', participante);

export const actualizarParticipante = (participante) => axiosClient.put('/participantes.php', participante);

export const eliminarParticipante = (id) => axiosClient.delete('/participantes.php', { data: { id } });