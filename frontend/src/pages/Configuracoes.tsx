import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database,
  Palette,
  Globe,
  Save,
  Eye,
  EyeOff,
  Check,
  X
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

const settingsSections = [
  {
    id: 'profile',
    title: 'Perfil',
    icon: <User className="h-5 w-5" />,
    description: 'Informações pessoais e profissionais'
  },
  {
    id: 'notifications',
    title: 'Notificações',
    icon: <Bell className="h-5 w-5" />,
    description: 'Configurações de alertas e lembretes'
  },
  {
    id: 'security',
    title: 'Segurança',
    icon: <Shield className="h-5 w-5" />,
    description: 'Senha e configurações de segurança'
  },
  {
    id: 'appearance',
    title: 'Aparência',
    icon: <Palette className="h-5 w-5" />,
    description: 'Tema e personalização visual'
  },
  {
    id: 'data',
    title: 'Dados',
    icon: <Database className="h-5 w-5" />,
    description: 'Backup e gerenciamento de dados'
  },
  {
    id: 'general',
    title: 'Geral',
    icon: <Globe className="h-5 w-5" />,
    description: 'Configurações gerais do sistema'
  }
]

export function Configuracoes() {
  const [activeSection, setActiveSection] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    appointments: true,
    payments: true,
    reminders: true
  })

  const [profile, setProfile] = useState({
    name: 'Dr. João Silva',
    email: 'joao.silva@odontoclinica.com',
    phone: '(11) 99999-9999',
    specialty: 'Cirurgião Dentista',
    crm: '12345-SP',
    clinic: 'OdontoClínica São Paulo'
  })

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nome Completo"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
        <Input
          label="Email"
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <Input
          label="Telefone"
          value={profile.phone}
          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
        />
        <Input
          label="Especialidade"
          value={profile.specialty}
          onChange={(e) => setProfile({ ...profile, specialty: e.target.value })}
        />
        <Input
          label="CRM"
          value={profile.crm}
          onChange={(e) => setProfile({ ...profile, crm: e.target.value })}
        />
        <Input
          label="Clínica"
          value={profile.clinic}
          onChange={(e) => setProfile({ ...profile, clinic: e.target.value })}
        />
      </div>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Canais de Notificação</h3>
        <div className="space-y-3">
          {[
            { key: 'email', label: 'Email', description: 'Receber notificações por email' },
            { key: 'sms', label: 'SMS', description: 'Receber notificações por SMS' },
            { key: 'push', label: 'Push', description: 'Receber notificações push no navegador' }
          ].map((channel) => (
            <div key={channel.key} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
              <div>
                <p className="font-medium text-secondary-900">{channel.label}</p>
                <p className="text-sm text-secondary-600">{channel.description}</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, [channel.key]: !notifications[channel.key] })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications[channel.key] ? 'bg-primary-600' : 'bg-secondary-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications[channel.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Tipos de Notificação</h3>
        <div className="space-y-3">
          {[
            { key: 'appointments', label: 'Consultas', description: 'Lembretes de consultas e agendamentos' },
            { key: 'payments', label: 'Pagamentos', description: 'Notificações sobre pagamentos e cobranças' },
            { key: 'reminders', label: 'Lembretes', description: 'Lembretes gerais e avisos importantes' }
          ].map((type) => (
            <div key={type.key} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
              <div>
                <p className="font-medium text-secondary-900">{type.label}</p>
                <p className="text-sm text-secondary-600">{type.description}</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, [type.key]: !notifications[type.key] })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications[type.key] ? 'bg-primary-600' : 'bg-secondary-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications[type.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Alterar Senha</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Senha Atual"
            type={showPassword ? 'text' : 'password'}
            icon={showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            iconPosition="right"
          />
          <Input
            label="Nova Senha"
            type={showPassword ? 'text' : 'password'}
          />
          <Input
            label="Confirmar Nova Senha"
            type={showPassword ? 'text' : 'password'}
          />
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="flex items-center gap-2 text-sm text-secondary-600 hover:text-secondary-900"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showPassword ? 'Ocultar' : 'Mostrar'} senhas
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Autenticação de Dois Fatores</h3>
        <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning-100 rounded-lg">
              <Shield className="h-5 w-5 text-warning-600" />
            </div>
            <div>
              <p className="font-medium text-warning-900">2FA Desabilitado</p>
              <p className="text-sm text-warning-700">
                Adicione uma camada extra de segurança à sua conta
              </p>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              Ativar 2FA
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Tema</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Claro', value: 'light', active: true },
            { name: 'Escuro', value: 'dark', active: false },
            { name: 'Automático', value: 'auto', active: false }
          ].map((theme) => (
            <motion.button
              key={theme.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-lg border-2 transition-all ${
                theme.active
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-secondary-200 hover:border-secondary-300'
              }`}
            >
              <div className="text-center">
                <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                  theme.value === 'light' ? 'bg-white border-2 border-secondary-300' :
                  theme.value === 'dark' ? 'bg-secondary-800' : 'bg-gradient-to-r from-white to-secondary-800'
                }`} />
                <p className="font-medium text-secondary-900">{theme.name}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Cores</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Azul', color: 'bg-blue-500' },
            { name: 'Verde', color: 'bg-green-500' },
            { name: 'Roxo', color: 'bg-purple-500' },
            { name: 'Rosa', color: 'bg-pink-500' }
          ].map((color) => (
            <motion.button
              key={color.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-lg border-2 border-secondary-200 hover:border-secondary-300 transition-all"
            >
              <div className={`w-8 h-8 rounded-full mx-auto mb-2 ${color.color}`} />
              <p className="text-sm font-medium text-secondary-900">{color.name}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDataSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Backup de Dados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-success-100 rounded-lg">
                  <Database className="h-5 w-5 text-success-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Backup Automático</h4>
                  <p className="text-sm text-secondary-600">Último backup: Hoje, 02:00</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Fazer Backup Agora
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Database className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">Restaurar Dados</h4>
                  <p className="text-sm text-secondary-600">Restaurar de um backup anterior</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Restaurar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Exportar Dados</h3>
        <div className="p-4 bg-secondary-50 rounded-lg">
          <p className="text-sm text-secondary-600 mb-4">
            Exporte todos os dados da clínica em formato CSV ou JSON
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              Exportar CSV
            </Button>
            <Button variant="outline" size="sm">
              Exportar JSON
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-900">Configurações Gerais</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
            <div>
              <p className="font-medium text-secondary-900">Modo de Manutenção</p>
              <p className="text-sm text-secondary-600">Ativar modo de manutenção do sistema</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary-300">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
            <div>
              <p className="font-medium text-secondary-900">Logs de Auditoria</p>
              <p className="text-sm text-secondary-600">Registrar todas as ações do sistema</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
            <div>
              <p className="font-medium text-secondary-900">Atualizações Automáticas</p>
              <p className="text-sm text-secondary-600">Instalar atualizações automaticamente</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSettings()
      case 'notifications':
        return renderNotificationSettings()
      case 'security':
        return renderSecuritySettings()
      case 'appearance':
        return renderAppearanceSettings()
      case 'data':
        return renderDataSettings()
      case 'general':
        return renderGeneralSettings()
      default:
        return renderProfileSettings()
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
            Configurações
          </h1>
          <p className="text-secondary-600 mt-1">
            Personalize e configure o sistema conforme suas necessidades
          </p>
        </div>
        
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Salvar Alterações
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                {settingsSections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'hover:bg-secondary-50 text-secondary-700'
                    }`}
                  >
                    <div className={`p-1 rounded ${
                      activeSection === section.id ? 'bg-primary-100' : 'bg-secondary-100'
                    }`}>
                      {section.icon}
                    </div>
                    <div>
                      <p className="font-medium">{section.title}</p>
                      <p className="text-xs text-secondary-500">{section.description}</p>
                    </div>
                  </motion.button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-3"
        >
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-secondary-900">
                {settingsSections.find(s => s.id === activeSection)?.title}
              </h2>
              <p className="text-secondary-600">
                {settingsSections.find(s => s.id === activeSection)?.description}
              </p>
            </CardHeader>
            <CardContent>
              {renderSectionContent()}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}