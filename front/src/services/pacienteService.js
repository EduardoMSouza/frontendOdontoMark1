import api from './api';

export const pacienteService = {
  // Buscar todos os pacientes
  getAllPacientes: async () => {
    try {
      const response = await api.get('/pacientes');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
      throw error;
    }
  },

  // Buscar paciente por ID
  getPacienteById: async (id) => {
    try {
      const response = await api.get(`/pacientes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar paciente:', error);
      throw error;
    }
  },

  // Criar novo paciente
  createPaciente: async (pacienteData) => {
    try {
      const response = await api.post('/pacientes', pacienteData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar paciente:', error);
      throw error;
    }
  },

  // Atualizar paciente
  updatePaciente: async (id, pacienteData) => {
    try {
      const response = await api.put(`/pacientes/${id}`, pacienteData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar paciente:', error);
      throw error;
    }
  },

  // Deletar paciente
  deletePaciente: async (id) => {
    try {
      const response = await api.delete(`/pacientes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
      throw error;
    }
  }
};