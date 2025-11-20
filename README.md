# TESSERACT - Rede de Talentos Multidimensionais

Uma plataforma futurista e elegante para descobrir e conectar talentos multidimensionais. O talento humano não é linear - é multidimensional.

## 🎯 Sobre o Projeto

TESSERACT é uma rede de talentos que reconhece a natureza multidimensional dos profissionais modernos. A plataforma conecta especialistas em áreas emergentes e profissões do futuro, destacando suas competências técnicas, soft skills, projetos reais e trajetórias possíveis para 2030-2040.

## ✨ Características

- **Design Futurista**: Interface inspirada em Apple Vision Pro e sci-fi, com glassmorphism e animações suaves
- **Dark Mode**: Alternância entre temas claro e escuro com transições elegantes
- **60 Perfis Completos**: Base de dados rica com profissionais de áreas emergentes
- **Busca Avançada**: Filtros por área, cidade, tecnologia e busca por nome/cargo
- **Modal Detalhado**: Visualização completa do perfil com mapa de talentos e trajetórias futuras
- **Autenticação Local**: Sistema de login e cadastro funcional
- **Responsivo**: Design adaptável para todos os dispositivos

## 🛠️ Tecnologias

- **React** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI elegantes
- **React Router** - Roteamento client-side
- **Lucide React** - Ícones modernos

## 🚀 Como Rodar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta do projeto
cd tesseract

# Instale as dependências
npm install

# Rode o projeto em desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

### Build para Produção

```bash
# Gera build otimizado
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn)
│   ├── Navbar.tsx      # Barra de navegação
│   ├── ProfileCard.tsx # Card de perfil
│   ├── ProfileModal.tsx # Modal detalhado
│   └── Filters.tsx     # Filtros de busca
├── contexts/           # Contextos React
│   └── AuthContext.tsx # Autenticação
├── data/              # Dados estáticos
│   └── profissionais.json # 60 perfis completos
├── hooks/             # Hooks customizados
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useDarkMode.ts
├── pages/             # Páginas da aplicação
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Recommendations.tsx
│   ├── Messages.tsx
│   └── NotFound.tsx
├── lib/               # Utilitários
└── index.css          # Estilos globais e design system
```

## 🎨 Design System

O projeto utiliza um design system completo baseado em:

- **Paleta de Cores**:
  - Preto profundo (#000000)
  - Cinza chumbo (#0f0f0f)
  - Neon azul (#00e0ff)
  - Roxo vibrante (#7b2cff)
  - Branco puro (#ffffff)

- **Efeitos**:
  - Glassmorphism
  - Neon glow
  - Gradientes
  - Animações suaves

## 📄 Páginas

1. **Login** - Autenticação de usuários
2. **Cadastro** - Criação de novas contas
3. **Home** - Grid com todos os profissionais e filtros
4. **Sobre** - Informações sobre o TESSERACT
5. **Recomendações** - Formulário para recomendar profissionais
6. **Mensagens** - Sistema de mensagens para conexão
7. **Contato** - Formulário de contato

## 👥 Integrantes

- [Nome do Integrante 1]
- [Nome do Integrante 2]
- [Nome do Integrante 3]

## 📝 Licença

Este projeto foi desenvolvido como parte de um trabalho acadêmico.

## 🔗 Links

- [Repositório GitHub](https://github.com/seu-usuario/tesseract)
- [Demo Online](https://seu-deploy.vercel.app)
