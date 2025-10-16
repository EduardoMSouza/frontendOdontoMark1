import { motion } from 'framer-motion'
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  UserPlus,
  CalendarPlus,
  BarChart3
} from 'lucide-react'
import { Card, CardContent, CardHeader, StatCard } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const stats = [
  {
    title: 'Total de Pacientes',
    value: '1,234',
    change: { value: 12, type: 'positive' as const },
    icon: <Users className="h-5 w-5" />
  },
  {
    title: 'Consultas Hoje',
    value: '18',
    change: { value: 5, type: 'positive' as const },
    icon: <Calendar className="h-5 w-5" />
  },
  {
    title: 'Faturamento Mensal',
    value: 'R$ 45.230',
    change: { value: 8, type: 'positive' as const },
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    title: 'Taxa de Ocupação',
    value: '87%',
    change: { value: 3, type: 'positive' as const },
    icon: <TrendingUp className="h-5 w-5" />
  }
]

const recentAppointments = [
  {
    id: 1,
    patient: 'Maria Silva',
    time: '09:00',
    procedure: 'Limpeza',
    status: 'confirmed',
    dentist: 'Dr. João'
  },
  {
    id: 2,
    patient: 'João Santos',
    time: '10:30',
    procedure: 'Canal',
    status: 'in-progress',
    dentist: 'Dr. Ana'
  },
  {
    id: 3,
    patient: 'Ana Costa',
    time: '14:00',
    procedure: 'Ortodontia',
    status: 'pending',
    dentist: 'Dr. Carlos'
  },
  {
    id: 4,
    patient: 'Pedro Lima',
    time: '15:30',
    procedure: 'Extração',
    status: 'confirmed',
    dentist: 'Dr. João'
  }
]

const quickActions = [
  {
    title: 'Novo Paciente',
    description: 'Cadastrar novo paciente',
    icon: <UserPlus className="h-6 w-6" />,
    color: 'bg-primary-500',
    href: '/pacientes'
  },
  {
    title: 'Nova Consulta',
    description: 'Agendar consulta',
    icon: <CalendarPlus className="h-6 w-6" />,
    color: 'bg-success-500',
    href: '/consultas'
  },
  {
    title: 'Relatórios',
    description: 'Ver relatórios',
    icon: <BarChart3 className="h-6 w-6" />,
    color: 'bg-warning-500',
    href: '/relatorios'
  }
]

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">
            Bem-vindo de volta! 👋
          </h1>
          <p className="text-secondary-600 mt-1">
            Aqui está um resumo do que está acontecendo na sua clínica hoje.
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Ver Agenda
          </Button>
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Novo Paciente
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Appointments */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-secondary-900">
                  Consultas de Hoje
                </h2>
                <Button variant="ghost" size="sm">
                  Ver todas
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAppointments.map((appointment, index) => (
                  <motion.div
                    key={appointment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-secondary-500" />
                        <span className="font-medium text-secondary-900">
                          {appointment.time}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900">
                          {appointment.patient}
                        </p>
                        <p className="text-sm text-secondary-600">
                          {appointment.procedure} • {appointment.dentist}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {appointment.status === 'confirmed' && (
                        <span className="badge badge-success">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Confirmada
                        </span>
                      )}
                      {appointment.status === 'in-progress' && (
                        <span className="badge badge-warning">
                          <Clock className="h-3 w-3 mr-1" />
                          Em andamento
                        </span>
                      )}
                      {appointment.status === 'pending' && (
                        <span className="badge badge-secondary">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Pendente
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-secondary-900">
                Ações Rápidas
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-4 text-left bg-gradient-to-r from-white to-secondary-50 rounded-lg border border-secondary-200 hover:shadow-medium transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg text-white ${action.color}`}>
                        {action.icon}
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900">
                          {action.title}
                        </p>
                        <p className="text-sm text-secondary-600">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Summary */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-secondary-900">
                Resumo do Dia
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-secondary-600">Consultas realizadas</span>
                  <span className="font-semibold text-secondary-900">12/18</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div className="bg-success-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-600">Pacientes atendidos</span>
                  <span className="font-semibold text-secondary-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-600">Faturamento</span>
                  <span className="font-semibold text-success-600">R$ 2.340</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}