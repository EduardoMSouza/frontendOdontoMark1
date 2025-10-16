export interface Patient {
  id: number
  name: string
  email: string
  phone: string
  age: number
  lastVisit: string
  nextAppointment: string | null
  status: 'active' | 'inactive'
  procedures: string[]
  address: string
}

export interface Appointment {
  id: number
  patient: string
  dentist: string
  date: string
  time: string
  duration: number
  procedure: string
  status: 'confirmed' | 'pending' | 'in-progress' | 'cancelled'
  notes: string
}

export interface StatCard {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'positive' | 'negative'
  }
  icon?: React.ReactNode
  className?: string
}

export interface NotificationSettings {
  email: boolean
  sms: boolean
  push: boolean
  appointments: boolean
  payments: boolean
  reminders: boolean
}

export interface Profile {
  name: string
  email: string
  phone: string
  specialty: string
  crm: string
  clinic: string
}

export interface RevenueData {
  month: string
  revenue: number
  patients: number
}

export interface ProcedureData {
  name: string
  count: number
  percentage: number
  color: string
}