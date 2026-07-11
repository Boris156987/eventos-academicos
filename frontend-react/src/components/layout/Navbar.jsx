import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">Eventos Académicos</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/eventos">Eventos</Link>
          <Link className="nav-link" to="/participantes">Participantes</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;