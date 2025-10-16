import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Sun,
  Moon
} from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications] = useState(3)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-sm border-b border-secondary-200 shadow-soft"
    >
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
          >
            <Menu className="h-5 w-5 text-secondary-600" />
          </button>
          
          <div className="hidden lg:block">
            <h1 className="text-2xl font-bold gradient-text">
              OdontoClínica
            </h1>
            <p className="text-sm text-secondary-600">
              Sistema de Gestão
            </p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
            <input
              type="text"
              placeholder="Buscar pacientes, consultas..."
              className="w-full pl-10 pr-4 py-2.5 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-warning-500" />
            ) : (
              <Moon className="h-5 w-5 text-secondary-600" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200 relative">
              <Bell className="h-5 w-5 text-secondary-600" />
              {notifications > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-5 w-5 bg-error-500 text-white text-xs rounded-full flex items-center justify-center font-medium"
                >
                  {notifications}
                </motion.span>
              )}
            </button>
          </div>

          {/* User menu */}
          <div className="relative group">
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200">
              <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium text-secondary-900">Dr. João Silva</p>
                <p className="text-xs text-secondary-600">Cirurgião Dentista</p>
              </div>
            </button>

            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-hard border border-secondary-200 py-1 z-50 hidden group-hover:block"
            >
              <button className="w-full px-4 py-2 text-left text-sm text-secondary-700 hover:bg-secondary-50 flex items-center gap-2">
                <User className="h-4 w-4" />
                Perfil
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-secondary-700 hover:bg-secondary-50 flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Configurações
              </button>
              <hr className="my-1 border-secondary-200" />
              <button className="w-full px-4 py-2 text-left text-sm text-error-600 hover:bg-error-50 flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Sair
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}