import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Edit,
  Trash2,
  Eye,
  UserPlus
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Modal } from '../components/ui/Modal'

const patients = [
  {
    id: 1,
    name: 'Maria Silva Santos',
    email: 'maria.silva@email.com',
    phone: '(11) 99999-9999',
    age: 35,
    lastVisit: '2024-01-15',
    nextAppointment: '2024-02-15',
    status: 'active',
    procedures: ['Limpeza', 'Canal'],
    address: 'São Paulo, SP'
  },
  {
    id: 2,
    name: 'João Pedro Oliveira',
    email: 'joao.oliveira@email.com',
    phone: '(11) 88888-8888',
    age: 42,
    lastVisit: '2024-01-10',
    nextAppointment: null,
    status: 'inactive',
    procedures: ['Extração', 'Prótese'],
    address: 'São Paulo, SP'
  },
  {
    id: 3,
    name: 'Ana Costa Lima',
    email: 'ana.costa@email.com',
    phone: '(11) 77777-7777',
    age: 28,
    lastVisit: '2024-01-20',
    nextAppointment: '2024-01-25',
    status: 'active',
    procedures: ['Ortodontia'],
    address: 'São Paulo, SP'
  },
  {
    id: 4,
    name: 'Carlos Eduardo Souza',
    email: 'carlos.souza@email.com',
    phone: '(11) 66666-6666',
    age: 55,
    lastVisit: '2024-01-05',
    nextAppointment: '2024-02-05',
    status: 'active',
    procedures: ['Implante', 'Prótese'],
    address: 'São Paulo, SP'
  },
  {
    id: 5,
    name: 'Fernanda Rodrigues',
    email: 'fernanda.rodrigues@email.com',
    phone: '(11) 55555-5555',
    age: 31,
    lastVisit: '2023-12-20',
    nextAppointment: null,
    status: 'inactive',
    procedures: ['Limpeza'],
    address: 'São Paulo, SP'
  }
]

export function Pacientes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState(null)

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.phone.includes(searchTerm)
    
    const matchesStatus = filterStatus === 'all' || patient.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  const handleViewPatient = (patient: any) => {
    setSelectedPatient(patient)
    setShowModal(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">
            Pacientes
          </h1>
          <p className="text-secondary-600 mt-1">
            Gerencie todos os pacientes da sua clínica
          </p>
        </div>
        
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Novo Paciente
        </Button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1">
          <Input
            placeholder="Buscar pacientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Todos</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
          </select>
          
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600">Total</p>
                <p className="text-2xl font-bold text-secondary-900">{patients.length}</p>
              </div>
              <div className="p-2 bg-primary-100 rounded-lg">
                <UserPlus className="h-5 w-5 text-primary-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600">Ativos</p>
                <p className="text-2xl font-bold text-success-600">
                  {patients.filter(p => p.status === 'active').length}
                </p>
              </div>
              <div className="p-2 bg-success-100 rounded-lg">
                <Calendar className="h-5 w-5 text-success-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600">Inativos</p>
                <p className="text-2xl font-bold text-warning-600">
                  {patients.filter(p => p.status === 'inactive').length}
                </p>
              </div>
              <div className="p-2 bg-warning-100 rounded-lg">
                <Calendar className="h-5 w-5 text-warning-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600">Com Consulta</p>
                <p className="text-2xl font-bold text-accent-600">
                  {patients.filter(p => p.nextAppointment).length}
                </p>
              </div>
              <div className="p-2 bg-accent-100 rounded-lg">
                <Calendar className="h-5 w-5 text-accent-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Patients List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {filteredPatients.map((patient, index) => (
          <motion.div
            key={patient.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          >
            <Card hover clickable onClick={() => handleViewPatient(patient)}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {patient.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">
                        {patient.name}
                      </h3>
                      <p className="text-sm text-secondary-600">
                        {patient.age} anos
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <span className={`badge ${patient.status === 'active' ? 'badge-success' : 'badge-warning'}`}>
                      {patient.status === 'active' ? 'Ativo' : 'Inativo'}
                    </span>
                    <button className="p-1 hover:bg-secondary-100 rounded">
                      <MoreVertical className="h-4 w-4 text-secondary-500" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-secondary-600">
                    <Phone className="h-4 w-4" />
                    {patient.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary-600">
                    <Mail className="h-4 w-4" />
                    {patient.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary-600">
                    <MapPin className="h-4 w-4" />
                    {patient.address}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-secondary-600 mb-2">Procedimentos:</p>
                  <div className="flex flex-wrap gap-1">
                    {patient.procedures.map((procedure, idx) => (
                      <span key={idx} className="badge badge-info text-xs">
                        {procedure}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-secondary-600">Última visita:</p>
                    <p className="font-medium text-secondary-900">
                      {new Date(patient.lastVisit).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  {patient.nextAppointment && (
                    <div className="text-right">
                      <p className="text-secondary-600">Próxima consulta:</p>
                      <p className="font-medium text-primary-600">
                        {new Date(patient.nextAppointment).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Patient Detail Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={selectedPatient?.name}
        size="lg"
      >
        {selectedPatient && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-secondary-900 mb-3">Informações Pessoais</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-secondary-500" />
                    <span>{selectedPatient.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-secondary-500" />
                    <span>{selectedPatient.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary-500" />
                    <span>{selectedPatient.address}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-secondary-900 mb-3">Histórico</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-secondary-600">Última visita:</p>
                    <p className="font-medium">{new Date(selectedPatient.lastVisit).toLocaleDateString('pt-BR')}</p>
                  </div>
                  {selectedPatient.nextAppointment && (
                    <div>
                      <p className="text-sm text-secondary-600">Próxima consulta:</p>
                      <p className="font-medium text-primary-600">
                        {new Date(selectedPatient.nextAppointment).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Procedimentos Realizados</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPatient.procedures.map((procedure: string, idx: number) => (
                  <span key={idx} className="badge badge-info">
                    {procedure}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Fechar
              </Button>
              <Button>
                <Edit className="h-4 w-4 mr-2" />
                Editar Paciente
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}