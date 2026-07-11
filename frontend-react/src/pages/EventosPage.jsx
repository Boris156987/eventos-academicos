import { useState, useEffect } from 'react';
import { getEventos, crearEvento, eliminarEvento } from '../services/eventosService';
import InscripcionModal from '../components/eventos/InscripcionModal';

function EventosPage() {
  const [eventos, setEventos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [lugar, setLugar] = useState('');
  const [cupo, setCupo] = useState('');
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null); // ← nuevo

  const cargarEventos = async () => {
    const res = await getEventos();
    setEventos(res.data);
  };

  useEffect(() => {
    cargarEventos();
  }, []);

  const handleRegistrar = async (e) => {
    e.preventDefault();
    await crearEvento({ nombre, descripcion: '', fecha, lugar, cupo });
    setNombre('');
    setFecha('');
    setLugar('');
    setCupo('');
    cargarEventos();
  };

  const handleEliminar = async (id) => {
    await eliminarEvento(id);
    cargarEventos();
  };

return (
  <div>
    <h3 className="mb-4">Gestión de Eventos</h3>

    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <form onSubmit={handleRegistrar} className="row g-2">
          <div className="col-md-3">
            <input className="form-control" placeholder="Nombre"
              value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <input type="date" className="form-control"
              value={fecha} onChange={(e) => setFecha(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Lugar"
              value={lugar} onChange={(e) => setLugar(e.target.value)} />
          </div>
          <div className="col-md-2">
            <input className="form-control" placeholder="Cupo"
              value={cupo} onChange={(e) => setCupo(e.target.value)} />
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary w-100" type="submit">+</button>
          </div>
        </form>
      </div>
    </div>

    <div className="card shadow-sm">
      <div className="card-body">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Lugar</th>
              <th>Cupo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((ev) => (
              <tr key={ev.id}>
                <td>{ev.nombre}</td>
                <td>{ev.fecha}</td>
                <td>{ev.lugar}</td>
                <td>{ev.cupo}</td>
                <td className="d-flex gap-2">
                  <button className="btn btn-info btn-sm text-white"
                    onClick={() => setEventoSeleccionado(ev)}>
                    Inscribir
                  </button>
                  <button className="btn btn-danger btn-sm"
                    onClick={() => handleEliminar(ev.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {eventoSeleccionado && (
      <InscripcionModal
        evento={eventoSeleccionado}
        onClose={() => setEventoSeleccionado(null)}
      />
    )}
  </div>
);
}

export default EventosPage;