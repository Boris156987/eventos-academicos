import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `nav-link text-white d-flex align-items-center gap-2 py-2 px-3 rounded mb-1 ${
      location.pathname === path ? 'bg-primary' : ''
    }`;

  return (
    <aside style={{ width: '240px', minHeight: '100vh' }} className="bg-dark p-3">
      <h5 className="text-white mb-4 px-2">Eventos Académicos</h5>
      <nav className="nav flex-column">
        <Link className={linkClass('/eventos')} to="/eventos">
          Eventos
        </Link>
        <Link className={linkClass('/participantes')} to="/participantes">
          Participantes
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;