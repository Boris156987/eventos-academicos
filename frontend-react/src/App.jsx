import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import EventosPage from './pages/EventosPage';
import ParticipantesPage from './pages/ParticipantesPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<EventosPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/participantes" element={<ParticipantesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;