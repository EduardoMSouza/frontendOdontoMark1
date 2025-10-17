import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Pacientes from './pages/Pacientes';
import NovoPaciente from './pages/NovoPaciente';
import FichasMedicas from './pages/FichasMedicas';
import Responsaveis from './pages/Responsaveis';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/pacientes/novo" element={<NovoPaciente />} />
          <Route path="/fichas-medicas" element={<FichasMedicas />} />
          <Route path="/responsaveis" element={<Responsaveis />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
