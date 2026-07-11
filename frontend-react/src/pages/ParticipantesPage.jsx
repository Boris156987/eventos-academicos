import { useState, useEffect } from 'react';
import { getParticipantes, crearParticipante, eliminarParticipante } from '../services/participantesService';

function ParticipantesPage() {
  const [participantes, setParticipantes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const cargarParticipantes = async () => {
    const res = await getParticipantes();
    setParticipantes(res.data);
  };

  useEffect(() => {
    cargarParticipantes();
  }, []);

  const handleRegistrar = async (e) => {
    e.preventDefault();
    await crearParticipante({ nombre, email, telefono });
    setNombre('');
    setEmail('');
    setTelefono('');
    cargarParticipantes();
  };

  const handleEliminar = async (id) => {
    await eliminarParticipante(id);
    cargarParticipantes();
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Participantes</h2>

      <form onSubmit={handleRegistrar} className="row g-2 mb-4">
        <div className="col-md-4">
          <input className="form-control" placeholder="Nombre"
            value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="col-md-4">
          <input type="email" className="form-control" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="col-md-3">
          <input className="form-control" placeholder="Teléfono"
            value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary w-100" type="submit">+</button>
        </div>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {participantes.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.email}</td>
              <td>{p.telefono}</td>
              <td>
                <button className="btn btn-danger btn-sm"
                  onClick={() => handleEliminar(p.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParticipantesPage;