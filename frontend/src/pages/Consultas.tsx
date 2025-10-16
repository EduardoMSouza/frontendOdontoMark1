import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Plus,
  Filter,
  Search,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

const appointments = [
  {
    id: 1,
    patient: 'Maria Silva Santos',
    dentist: 'Dr. João Silva',
    date: '2024-01-25',
    time: '09:00',
    duration: 60,
    procedure: 'Limpeza e Aplicação de Flúor',
    status: 'confirmed',
    notes: 'Paciente com boa higiene bucal'
  },
  {
    id: 2,
    patient: 'João Pedro Oliveira',
    dentist: 'Dr. Ana Costa',
    date: '2024-01-25',
    time: '10:30',
    duration: 90,
    procedure: 'Tratamento de Canal',
    status: 'in-progress',
    notes: 'Sessão 2 de 3'
  },
  {
    id: 3,
    patient: 'Ana Costa Lima',
    dentist: 'Dr. Carlos Eduardo',
    date: '2024-01-25',
    time: '14:00',
    duration: 30,
    procedure: 'Ajuste de Aparelho',
    status: 'pending',
    notes: 'Primeira consulta de manutenção'
  },
  {
    id: 4,
    patient: 'Carlos Eduardo Souza',
    dentist: 'Dr. João Silva',
    date: '2024-01-25',
    time: '15:30',
    duration: 120,
    procedure: 'Instalação de Implante',
    status: 'confirmed',
    notes: 'Cirurgia programada'
  },
  {
    id: 5,
    patient: 'Fernanda Rodrigues',
    dentist: 'Dr. Ana Costa',
    date: '2024-01-26',
    time: '08:30',
    duration: 45,
    procedure: 'Consulta de Retorno',
    status: 'cancelled',
    notes: 'Paciente cancelou por motivos pessoais'
  }
]

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
]

export function Consultas() {
  const [selectedDate, setSelectedDate] = useState('2024-01-25')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.procedure.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.dentist.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || appointment.status === filterStatus
    const matchesDate = appointment.date === selectedDate
    
    return matchesSearch && matchesStatus && matchesDate
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <span className="badge badge-success"><CheckCircle className="h-3 w-3 mr-1" />Confirmada</span>
      case 'in-progress':
        return <span className="badge badge-warning"><Clock className="h-3 w-3 mr-1" />Em andamento</span>
      case 'pending':
        return <span className="badge badge-secondary"><AlertCircle className="h-3 w-3 mr-1" />Pendente</span>
      case 'cancelled':
        return <span className="badge badge-error"><XCircle className="h-3 w-3 mr-1" />Cancelada</span>
      default:
        return <span className="badge badge-secondary">{status}</span>
    }
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
            Consultas
          </h1>
          <p className="text-secondary-600 mt-1">
            Gerencie a agenda de consultas da clínica
          </p>
        </div>
        
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Consulta
        </Button>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="md:col-span-2">
          <Input
            placeholder="Buscar consultas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        
        <div>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="input w-full"
          />
        </div>
        
        <div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="input w-full"
          >
            <option value="all">Todos os status</option>
            <option value="confirmed">Confirmadas</option>
            <option value="pending">Pendentes</option>
            <option value="in-progress">Em andamento</option>
            <option value="cancelled">Canceladas</option>
          </select>
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
                <p className="text-sm text-secondary-600">Total Hoje</p>
                <p className="text-2xl font-bold text-secondary-900">
                  {appointments.filter(a => a.date === selectedDate).length}
                </p>
              </div>
              <div className="p-2 bg-primary-100 rounded-lg">
                <Calendar className="h-5 w-5 text-primary-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600">Confirmadas</p>
                <p className="text-2xl font-bold text-success-600">
                  {appointments.filter(a => a.status === 'confirmed' && a.date === selectedDate).length}
                </p>
              </div>
              <div className="p-2 bg-success-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-success-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600">Em Andamento</p>
                <p className="text-2xl font-bold text-warning-600">
                  {appointments.filter(a => a.status === 'in-progress' && a.date === selectedDate).length}
                </p>
              </div>
              <div className="p-2 bg-warning-100 rounded-lg">
                <Clock className="h-5 w-5 text-warning-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600">Pendentes</p>
                <p className="text-2xl font-bold text-accent-600">
                  {appointments.filter(a => a.status === 'pending' && a.date === selectedDate).length}
                </p>
              </div>
              <div className="p-2 bg-accent-100 rounded-lg">
                <AlertCircle className="h-5 w-5 text-accent-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Calendar View */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Time Slots */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-secondary-900">
              Horários Disponíveis
            </h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time, index) => {
                const isBooked = appointments.some(apt => 
                  apt.date === selectedDate && apt.time === time
                )
                return (
                  <motion.button
                    key={time}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isBooked}
                    className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                      isBooked 
                        ? 'bg-secondary-100 text-secondary-400 border-secondary-200 cursor-not-allowed' 
                        : 'bg-white text-secondary-700 border-secondary-300 hover:bg-primary-50 hover:border-primary-300'
                    }`}
                  >
                    {time}
                  </motion.button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Appointments List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-secondary-900">
                Consultas do Dia
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredAppointments.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-secondary-300 mx-auto mb-4" />
                    <p className="text-secondary-600">Nenhuma consulta encontrada</p>
                  </div>
                ) : (
                  filteredAppointments.map((appointment, index) => (
                    <motion.div
                      key={appointment.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="p-4 bg-gradient-to-r from-white to-secondary-50 rounded-lg border border-secondary-200 hover:shadow-medium transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-secondary-500" />
                              <span className="font-medium text-secondary-900">
                                {appointment.time}
                              </span>
                            </div>
                            <span className="text-sm text-secondary-500">
                              {appointment.duration} min
                            </span>
                          </div>
                          
                          <h3 className="font-semibold text-secondary-900 mb-1">
                            {appointment.patient}
                          </h3>
                          
                          <p className="text-sm text-secondary-600 mb-2">
                            {appointment.procedure}
                          </p>
                          
                          <div className="flex items-center gap-2 text-sm text-secondary-500">
                            <User className="h-4 w-4" />
                            <span>{appointment.dentist}</span>
                          </div>
                          
                          {appointment.notes && (
                            <p className="text-sm text-secondary-600 mt-2 italic">
                              "{appointment.notes}"
                            </p>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {getStatusBadge(appointment.status)}
                          
                          <div className="flex gap-1">
                            <button className="p-1 hover:bg-secondary-100 rounded">
                              <Edit className="h-4 w-4 text-secondary-500" />
                            </button>
                            <button className="p-1 hover:bg-error-100 rounded">
                              <Trash2 className="h-4 w-4 text-error-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}