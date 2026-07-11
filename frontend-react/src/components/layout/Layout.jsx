import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="d-flex" style={{ minHeight: '100vh', background: '#f4f6f9' }}>
      <Sidebar />
      <div className="flex-grow-1 p-4">{children}</div>
    </div>
  );
}

export default Layout;