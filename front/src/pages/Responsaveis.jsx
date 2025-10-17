import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { responsavelService } from '../services/responsavelService';

const Responsaveis = () => {
  const [responsaveis, setResponsaveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadResponsaveis();
  }, []);

  const loadResponsaveis = async () => {
    try {
      setLoading(true);
      const data = await responsavelService.getAllResponsaveis();
      setResponsaveis(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar responsáveis');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este responsável?')) {
      try {
        await responsavelService.deleteResponsavel(id);
        loadResponsaveis();
      } catch (err) {
        setError('Erro ao excluir responsável');
        console.error(err);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold text-gray-900">Responsáveis</h1>
          <p className="mt-2 text-sm text-gray-700">
            Lista de todos os responsáveis cadastrados no sistema
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/responsaveis/novo"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:w-auto"
          >
            Novo Responsável
          </Link>
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Erro
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {responsaveis.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum responsável</h3>
            <p className="mt-1 text-sm text-gray-500">
              Comece criando um novo responsável.
            </p>
            <div className="mt-6">
              <Link
                to="/responsaveis/novo"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                Novo Responsável
              </Link>
            </div>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {responsaveis.map((responsavel) => (
              <li key={responsavel.id}>
                <div className="px-4 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {responsavel.nome || 'Nome não informado'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {responsavel.email || 'Email não informado'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {responsavel.telefone || 'Telefone não informado'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/responsaveis/${responsavel.id}`}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                    >
                      Ver
                    </Link>
                    <Link
                      to={`/responsaveis/${responsavel.id}/editar`}
                      className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(responsavel.id)}
                      className="text-red-600 hover:text-red-900 text-sm font-medium"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Responsaveis;