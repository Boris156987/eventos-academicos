import { useState, useEffect } from 'react';
import { getParticipantes } from '../../services/participantesService';
import { getInscripcionesPorEvento, crearInscripcion, eliminarInscripcion } from '../../services/inscripcionesService';

function InscripcionModal({ evento, onClose }) {
  const [participantes, setParticipantes] = useState([]);
  const [inscritos, setInscritos] = useState([]);
  const [participanteId, setParticipanteId] = useState('');

  const cargarDatos = async () => {
    const resParticipantes = await getParticipantes();
    setParticipantes(resParticipantes.data);

    const resInscritos = await getInscripcionesPorEvento(evento.id);
    setInscritos(resInscritos.data);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleInscribir = async (e) => {
    e.preventDefault();
    if (!participanteId) return;
    await crearInscripcion({ evento_id: evento.id, participante_id: participanteId });
    setParticipanteId('');
    cargarDatos();
  };

  const handleQuitar = async (id) => {
    await eliminarInscripcion(id);
    cargarDatos();
  };

  const nombreParticipante = (id) => {
    const p = participantes.find((p) => p.id == id);
    return p ? p.nombre : 'Desconocido';
  };

  return (
    <div className="modal show d-block" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Inscripciones — {evento.nombre}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleInscribir} className="d-flex gap-2 my-3">
            <select className="form-select" value={participanteId}
              onChange={(e) => setParticipanteId(e.target.value)}>
              <option value="">Selecciona un participante</option>
              {participantes.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
            <button className="btn btn-primary" type="submit">Inscribir</button>
          </form>

          <ul className="list-group">
            {inscritos.map((ins) => (
              <li key={ins.id} className="list-group-item d-flex justify-content-between align-items-center">
                {nombreParticipante(ins.participante_id)}
                <button className="btn btn-sm btn-outline-danger"
                  onClick={() => handleQuitar(ins.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InscripcionModal;