import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Filter,
  Calendar,
  DollarSign,
  Users,
  Calendar as CalendarIcon,
  FileText,
  PieChart
} from 'lucide-react'
import { Card, CardContent, CardHeader, StatCard } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const revenueData = [
  { month: 'Jan', revenue: 32000, patients: 45 },
  { month: 'Fev', revenue: 38000, patients: 52 },
  { month: 'Mar', revenue: 42000, patients: 48 },
  { month: 'Abr', revenue: 35000, patients: 41 },
  { month: 'Mai', revenue: 45000, patients: 58 },
  { month: 'Jun', revenue: 48000, patients: 62 }
]

const procedureData = [
  { name: 'Limpeza', count: 45, percentage: 35, color: 'bg-primary-500' },
  { name: 'Canal', count: 28, percentage: 22, color: 'bg-success-500' },
  { name: 'Extração', count: 20, percentage: 16, color: 'bg-warning-500' },
  { name: 'Ortodontia', count: 18, percentage: 14, color: 'bg-accent-500' },
  { name: 'Implante', count: 17, percentage: 13, color: 'bg-error-500' }
]

const monthlyStats = [
  {
    title: 'Faturamento Total',
    value: 'R$ 240.000',
    change: { value: 12, type: 'positive' as const },
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    title: 'Pacientes Atendidos',
    value: '306',
    change: { value: 8, type: 'positive' as const },
    icon: <Users className="h-5 w-5" />
  },
  {
    title: 'Consultas Realizadas',
    value: '1.247',
    change: { value: 15, type: 'positive' as const },
    icon: <CalendarIcon className="h-5 w-5" />
  },
  {
    title: 'Ticket Médio',
    value: 'R$ 192',
    change: { value: 5, type: 'positive' as const },
    icon: <TrendingUp className="h-5 w-5" />
  }
]

export function Relatorios() {
  const [selectedPeriod, setSelectedPeriod] = useState('6months')
  const [selectedReport, setSelectedReport] = useState('revenue')

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
            Relatórios
          </h1>
          <p className="text-secondary-600 mt-1">
            Análise de performance e métricas da clínica
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </motion.div>

      {/* Period Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {[
          { value: '1month', label: 'Último mês' },
          { value: '3months', label: 'Últimos 3 meses' },
          { value: '6months', label: 'Últimos 6 meses' },
          { value: '1year', label: 'Último ano' }
        ].map((period) => (
          <button
            key={period.value}
            onClick={() => setSelectedPeriod(period.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedPeriod === period.value
                ? 'bg-primary-600 text-white shadow-medium'
                : 'bg-white text-secondary-700 border border-secondary-300 hover:bg-secondary-50'
            }`}
          >
            {period.label}
          </button>
        ))}
      </motion.div>

      {/* Monthly Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {monthlyStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-secondary-900">
                  Faturamento Mensal
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedReport('revenue')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      selectedReport === 'revenue'
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-secondary-600 hover:bg-secondary-100'
                    }`}
                  >
                    Faturamento
                  </button>
                  <button
                    onClick={() => setSelectedReport('patients')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      selectedReport === 'patients'
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-secondary-600 hover:bg-secondary-100'
                    }`}
                  >
                    Pacientes
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {revenueData.map((data, index) => (
                  <motion.div
                    key={data.month}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 text-sm font-medium text-secondary-600">
                        {data.month}
                      </span>
                      <div className="w-32 bg-secondary-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: selectedReport === 'revenue' 
                              ? `${(data.revenue / 50000) * 100}%` 
                              : `${(data.patients / 70) * 100}%`
                          }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                          className={`h-2 rounded-full ${
                            selectedReport === 'revenue' 
                              ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                              : 'bg-gradient-to-r from-success-500 to-primary-500'
                          }`}
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-secondary-900">
                        {selectedReport === 'revenue' 
                          ? `R$ ${data.revenue.toLocaleString()}`
                          : `${data.patients} pacientes`
                        }
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Procedures Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-secondary-900">
                Procedimentos Realizados
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {procedureData.map((procedure, index) => (
                  <motion.div
                    key={procedure.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${procedure.color}`} />
                      <span className="text-sm font-medium text-secondary-700">
                        {procedure.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-secondary-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${procedure.percentage}%` }}
                          transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                          className={`h-2 rounded-full ${procedure.color}`}
                        />
                      </div>
                      <span className="text-sm font-semibold text-secondary-900 w-8">
                        {procedure.count}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Detailed Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Top Procedures */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-secondary-900">
              Top Procedimentos
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {procedureData.slice(0, 3).map((procedure, index) => (
                <motion.div
                  key={procedure.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${procedure.color} flex items-center justify-center text-white text-sm font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-secondary-900">{procedure.name}</p>
                      <p className="text-sm text-secondary-600">{procedure.count} procedimentos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-secondary-900">
                      {procedure.percentage}%
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Comparison */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-secondary-900">
              Comparativo Mensal
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-600">Crescimento</span>
                <span className="text-sm font-semibold text-success-600">+12%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-600">Novos Pacientes</span>
                <span className="text-sm font-semibold text-primary-600">+8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-600">Retenção</span>
                <span className="text-sm font-semibold text-accent-600">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-600">Satisfação</span>
                <span className="text-sm font-semibold text-warning-600">4.8/5</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-secondary-900">
              Relatórios Rápidos
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Relatório Financeiro', icon: <DollarSign className="h-4 w-4" /> },
                { name: 'Relatório de Pacientes', icon: <Users className="h-4 w-4" /> },
                { name: 'Relatório de Consultas', icon: <CalendarIcon className="h-4 w-4" /> },
                { name: 'Relatório de Procedimentos', icon: <FileText className="h-4 w-4" /> }
              ].map((report, index) => (
                <motion.button
                  key={report.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-3 p-3 text-left bg-gradient-to-r from-white to-secondary-50 rounded-lg border border-secondary-200 hover:shadow-medium transition-all duration-200"
                >
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    {report.icon}
                  </div>
                  <span className="text-sm font-medium text-secondary-900">
                    {report.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}