import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Home, 
  Users, 
  Calendar, 
  BarChart3, 
  Settings, 
  X,
  Stethoscope,
  FileText,
  Shield
} from 'lucide-react'

interface SidebarProps {
  onClose: () => void
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Pacientes', href: '/pacientes', icon: Users },
  { name: 'Consultas', href: '/consultas', icon: Calendar },
  { name: 'Relatórios', href: '/relatorios', icon: BarChart3 },
  { name: 'Configurações', href: '/configuracoes', icon: Settings },
]

const quickActions = [
  { name: 'Nova Consulta', icon: Stethoscope, color: 'text-primary-600' },
  { name: 'Novo Paciente', icon: Users, color: 'text-success-600' },
  { name: 'Relatório', icon: FileText, color: 'text-warning-600' },
  { name: 'Backup', icon: Shield, color: 'text-accent-600' },
]

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col h-full bg-white border-r border-secondary-200 shadow-medium"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-secondary-200">
        <div>
          <h2 className="text-xl font-bold gradient-text">
            OdontoClínica
          </h2>
          <p className="text-sm text-secondary-600">
            Sistema de Gestão
          </p>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
        >
          <X className="h-5 w-5 text-secondary-600" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? 'active' : ''}`
              }
              onClick={onClose}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-secondary-200">
        <h3 className="text-sm font-semibold text-secondary-700 mb-3">
          Ações Rápidas
        </h3>
        <div className="space-y-2">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 4) * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-secondary-700 rounded-lg hover:bg-secondary-100 transition-all duration-200"
            >
              <action.icon className={`h-4 w-4 ${action.color}`} />
              {action.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-secondary-200">
        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg">
          <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
            <Stethoscope className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-secondary-900">
              Sistema Atualizado
            </p>
            <p className="text-xs text-secondary-600">
              Versão 2.1.0
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}