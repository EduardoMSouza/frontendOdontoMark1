import api from './api';

export const fichaMedicaService = {
  // Buscar todas as fichas médicas
  getAllFichasMedicas: async () => {
    try {
      const response = await api.get('/fichas-medicas');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar fichas médicas:', error);
      throw error;
    }
  },

  // Buscar ficha médica por ID
  getFichaMedicaById: async (id) => {
    try {
      const response = await api.get(`/fichas-medicas/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar ficha médica:', error);
      throw error;
    }
  },

  // Buscar fichas médicas por paciente
  getFichasMedicasByPaciente: async (pacienteId) => {
    try {
      const response = await api.get(`/fichas-medicas/paciente/${pacienteId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar fichas médicas do paciente:', error);
      throw error;
    }
  },

  // Criar nova ficha médica
  createFichaMedica: async (fichaData) => {
    try {
      const response = await api.post('/fichas-medicas', fichaData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar ficha médica:', error);
      throw error;
    }
  },

  // Atualizar ficha médica
  updateFichaMedica: async (id, fichaData) => {
    try {
      const response = await api.put(`/fichas-medicas/${id}`, fichaData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar ficha médica:', error);
      throw error;
    }
  },

  // Deletar ficha médica
  deleteFichaMedica: async (id) => {
    try {
      const response = await api.delete(`/fichas-medicas/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar ficha médica:', error);
      throw error;
    }
  }
};