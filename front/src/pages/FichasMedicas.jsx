import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fichaMedicaService } from '../services/fichaMedicaService';

const FichasMedicas = () => {
  const [fichasMedicas, setFichasMedicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadFichasMedicas();
  }, []);

  const loadFichasMedicas = async () => {
    try {
      setLoading(true);
      const data = await fichaMedicaService.getAllFichasMedicas();
      setFichasMedicas(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar fichas médicas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta ficha médica?')) {
      try {
        await fichaMedicaService.deleteFichaMedica(id);
        loadFichasMedicas();
      } catch (err) {
        setError('Erro ao excluir ficha médica');
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
          <h1 className="text-2xl font-bold text-gray-900">Fichas Médicas</h1>
          <p className="mt-2 text-sm text-gray-700">
            Lista de todas as fichas médicas cadastradas no sistema
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/fichas-medicas/nova"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
          >
            Nova Ficha Médica
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
        {fichasMedicas.length === 0 ? (
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma ficha médica</h3>
            <p className="mt-1 text-sm text-gray-500">
              Comece criando uma nova ficha médica.
            </p>
            <div className="mt-6">
              <Link
                to="/fichas-medicas/nova"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Nova Ficha Médica
              </Link>
            </div>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {fichasMedicas.map((ficha) => (
              <li key={ficha.id}>
                <div className="px-4 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Ficha #{ficha.id}
                      </div>
                      <div className="text-sm text-gray-500">
                        Paciente: {ficha.paciente?.nome || 'Não informado'}
                      </div>
                      <div className="text-sm text-gray-500">
                        Data: {ficha.dataCriacao ? new Date(ficha.dataCriacao).toLocaleDateString('pt-BR') : 'Não informada'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/fichas-medicas/${ficha.id}`}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                    >
                      Ver
                    </Link>
                    <Link
                      to={`/fichas-medicas/${ficha.id}/editar`}
                      className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(ficha.id)}
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

export default FichasMedicas;