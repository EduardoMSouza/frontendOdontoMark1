# OdontoClínica - Sistema de Gestão

Um sistema moderno e responsivo para gestão de clínicas odontológicas, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Moderno**: Interface limpa e intuitiva com animações suaves
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Componentes Reutilizáveis**: Biblioteca de componentes UI customizados
- **Animações Fluidas**: Transições e micro-interações usando Framer Motion
- **Tema Personalizável**: Sistema de cores e temas flexível
- **TypeScript**: Tipagem estática para maior confiabilidade
- **Tailwind CSS**: Estilização utilitária e moderna

## 🛠️ Tecnologias

- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **React Router** - Roteamento
- **Lucide React** - Ícones
- **Vite** - Build tool e dev server

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Componentes

### Layout
- **Layout**: Container principal com sidebar e header
- **Header**: Barra superior com busca, notificações e perfil
- **Sidebar**: Navegação lateral com menu e ações rápidas

### UI Components
- **Button**: Botão com variantes e tamanhos
- **Input**: Campo de entrada com validação
- **Card**: Container para conteúdo
- **Modal**: Janela modal responsiva
- **StatCard**: Card para exibir estatísticas

### Páginas
- **Dashboard**: Visão geral com métricas e resumos
- **Pacientes**: Gestão de pacientes com busca e filtros
- **Consultas**: Agenda de consultas com visualização em tempo real
- **Relatórios**: Análises e métricas da clínica
- **Configurações**: Configurações do sistema e perfil

## 🎯 Funcionalidades

### Dashboard
- Métricas em tempo real
- Gráficos de performance
- Ações rápidas
- Resumo do dia

### Gestão de Pacientes
- Lista de pacientes com busca
- Filtros por status
- Modal de detalhes
- Estatísticas rápidas

### Agenda de Consultas
- Visualização por data
- Status de consultas
- Horários disponíveis
- Filtros avançados

### Relatórios
- Faturamento mensal
- Procedimentos realizados
- Comparativos
- Exportação de dados

### Configurações
- Perfil do usuário
- Notificações
- Segurança
- Aparência
- Backup de dados

## 🎨 Design System

### Cores
- **Primary**: Azul (#0ea5e9)
- **Secondary**: Cinza (#64748b)
- **Accent**: Roxo (#d946ef)
- **Success**: Verde (#22c55e)
- **Warning**: Amarelo (#f59e0b)
- **Error**: Vermelho (#ef4444)

### Animações
- Fade in/out
- Slide in/out
- Scale in/out
- Bounce in
- Float
- Glow effects

### Tipografia
- **Sans**: Inter (corpo do texto)
- **Display**: Poppins (títulos)

## 📱 Responsividade

O sistema é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- Lazy loading de componentes
- Otimização de imagens
- Bundle splitting
- Tree shaking
- CSS purging

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env.local`:

```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=OdontoClínica
```

### Tailwind CSS
O projeto usa Tailwind CSS com configuração customizada em `tailwind.config.js`.

### TypeScript
Configuração otimizada para React em `tsconfig.json`.

## 📄 Licença

Este projeto está sob a licença MIT.