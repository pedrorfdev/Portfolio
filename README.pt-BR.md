<div align="center">

# ✨ Portfólio

**Um site de portfólio moderno e animado que exibe trabalhos profissionais e expertise**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.31.0-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

**🌐 [English](README.md) | [Português](README.pt-BR.md)**

</div>

---

## 🎯 Visão Geral

Um site de portfólio responsivo e bem projetado, construído com tecnologias web modernas. Possui animações suaves, suporte a temas claro/escuro e um layout limpo baseado em grid que exibe experiência profissional, projetos e expertise técnica.

### ✨ Principais Funcionalidades

- 🎨 **UI/UX Moderna** - Design limpo e profissional com animações suaves
- 🌓 **Alternância de Tema** - Troca perfeita entre modo claro e escuro
- 📱 **Totalmente Responsivo** - Otimizado para todos os tamanhos de tela
- ⚡ **Otimizado para Performance** - Construído com Vite para builds ultrarrápidos
- 🎭 **Animações Suaves** - Alimentado por Framer Motion para interações envolventes
- 🎯 **Baseado em Componentes** - Arquitetura modular para fácil manutenção

---

## 🚀 Stack Tecnológico

### Tecnologias Principais
- **React 19.2.0** - Biblioteca de UI moderna
- **TypeScript 5.9.3** - Desenvolvimento com tipagem estática
- **Vite 7.2.4** - Ferramenta de build de próxima geração
- **Tailwind CSS 4.1.18** - Framework CSS utility-first

### Bibliotecas e Ferramentas
- **Framer Motion 12.31.0** - Biblioteca de animações
- **Lucide React 0.563.0** - Biblioteca de ícones bonitos
- **ESLint** - Qualidade de código e linting

---

## 📁 Estrutura do Projeto

```
portfolio/
├── public/                 # Assets estáticos
├── src/
│   ├── assets/            # Imagens e arquivos de mídia
│   ├── components/        # Componentes React
│   │   ├── CVCard.tsx     # Card de download do CV
│   │   ├── ProjectCard.tsx # Cards de exibição de projetos
│   │   ├── SocialCard.tsx  # Links de redes sociais
│   │   ├── StatusCard.tsx  # Status de disponibilidade
│   │   ├── TechStack.tsx   # Exibição de tecnologias
│   │   └── ThemeToggle.tsx # Alternador de tema
│   ├── hooks/             # Hooks customizados do React
│   │   └── useTheme.ts     # Hook de gerenciamento de tema
│   ├── lib/               # Bibliotecas utilitárias
│   │   └── framer.ts      # Variantes do Framer Motion
│   ├── App.tsx            # Componente principal da aplicação
│   ├── main.tsx           # Ponto de entrada da aplicação
│   └── index.css          # Estilos globais
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração do TypeScript
├── vite.config.ts         # Configuração do Vite
└── README.md              # Documentação do projeto
```

---

## 🛠️ Instalação e Configuração

### Pré-requisitos

- **Node.js** (v18 ou superior recomendado)
- **npm** ou **yarn** como gerenciador de pacotes

### Começando

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositório>
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra seu navegador**
   Navegue até `http://localhost:5173` (ou a porta mostrada no terminal)

### Build para Produção

```bash
npm run build
```

Os arquivos prontos para produção serão gerados no diretório `dist/`.

### Visualizar Build de Produção

```bash
npm run preview
```

---

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot module replacement |
| `npm run build` | Constrói o projeto para produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa ESLint para verificar a qualidade do código |

---

## 🎨 Componentes

### Seção Hero
A área principal de introdução com uma saudação personalizada e slogan profissional.

### Cards Sociais
Cards interativos que vinculam aos perfis do GitHub e LinkedIn com animações de hover.

### Card de Status
Exibe o status atual de disponibilidade com um indicador ao vivo.

### Card de CV
Card de CV para download com efeitos de hover suaves e feedback visual.

### Stack Tecnológico
Exibe expertise técnica organizada por categorias:
- **Interface**: React, Next.js, TypeScript, Tailwind v4
- **Sistemas**: Node.js, Fastify, PostgreSQL, NoSQL
- **Ferramentas**: Git, GitHub, Docker, Desenvolvimento Orientado por IA

### Cards de Projetos
Projetos em destaque com:
- Título e descrição do projeto
- Tags de tecnologias
- Links para demonstração ao vivo e código-fonte
- Animações de hover e efeitos visuais

---

## 🎭 Animações

O portfólio usa Framer Motion para animações suaves e profissionais:

- **Animações de entrada escalonadas** - Componentes aparecem sequencialmente
- **Efeitos de hover** - Feedback interativo em cards e links
- **Transições de tema** - Transições suaves de cores ao alternar temas
- **Física de mola** - Animações baseadas em física natural

As variantes de animação estão centralizadas em `src/lib/framer.ts` para comportamento consistente em todos os componentes.

---

## 🎨 Temas

O portfólio suporta temas claro e escuro com:
- Propriedades CSS customizadas para temas dinâmicos
- Transições suaves entre temas
- Preferência de tema persistente (via localStorage)
- Contrastes de cores acessíveis

---

## 📝 Personalização

### Atualizando Informações Pessoais

1. **Seção Hero** - Edite `src/App.tsx`:
   ```tsx
   <h1>Olá, sou Pedro.</h1>
   <p>Software Engineer com visão de produto...</p>
   ```

2. **Links Sociais** - Atualize as URLs em `src/App.tsx`:
   ```tsx
   <SocialCard platform="GitHub" href="https://github.com/seuusuario" />
   <SocialCard platform="LinkedIn" href="https://linkedin.com/in/seuperfil" />
   ```

3. **Arquivo de CV** - Coloque seu PDF de CV em `public/` e atualize o caminho em `CVCard.tsx`:
   ```tsx
   href="/seu-curriculo.pdf"
   ```

4. **Projetos** - Modifique os cards de projetos em `src/App.tsx`:
   ```tsx
   <ProjectCard
     title="Seu Projeto"
     description="Descrição do projeto..."
     tags={['Tech1', 'Tech2']}
     link="https://demo.com"
     github="https://github.com"
   />
   ```

5. **Stack Tecnológico** - Atualize as tecnologias em `src/components/TechStack.tsx`

---

## 🌐 Suporte a Navegadores

- Chrome (mais recente)
- Firefox (mais recente)
- Safari (mais recente)
- Edge (mais recente)

---

## 📄 Licença

Este projeto é privado e proprietário.

---

## 👤 Autor

**Pedro**

- GitHub: [@pedrorfdev](https://github.com/pedrorfdev)
- LinkedIn: [pedroff](https://linkedin.com/in/pedroff)

---

## 🙏 Agradecimentos

- [Framer Motion](https://www.framer.com/motion/) pelas incríveis capacidades de animação
- [Lucide](https://lucide.dev/) pelos ícones bonitos
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS utility-first
- [Vite](https://vitejs.dev/) pela ferramenta de build ultrarrápida

---

<div align="center">

**Construído com ❤️ usando React, TypeScript e tecnologias web modernas**

⭐ Dê uma estrela neste repositório se achou útil!

</div>
