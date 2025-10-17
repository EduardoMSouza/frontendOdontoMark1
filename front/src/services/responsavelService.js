import api from './api';

export const responsavelService = {
  // Buscar todos os responsáveis
  getAllResponsaveis: async () => {
    try {
      const response = await api.get('/responsaveis');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar responsáveis:', error);
      throw error;
    }
  },

  // Buscar responsável por ID
  getResponsavelById: async (id) => {
    try {
      const response = await api.get(`/responsaveis/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar responsável:', error);
      throw error;
    }
  },

  // Criar novo responsável
  createResponsavel: async (responsavelData) => {
    try {
      const response = await api.post('/responsaveis', responsavelData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar responsável:', error);
      throw error;
    }
  },

  // Atualizar responsável
  updateResponsavel: async (id, responsavelData) => {
    try {
      const response = await api.put(`/responsaveis/${id}`, responsavelData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar responsável:', error);
      throw error;
    }
  },

  // Deletar responsável
  deleteResponsavel: async (id) => {
    try {
      const response = await api.delete(`/responsaveis/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar responsável:', error);
      throw error;
    }
  }
};