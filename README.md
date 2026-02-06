<div align="center">

# ✨ Portfolio

**A modern, animated portfolio website showcasing professional work and expertise**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.31.0-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

**🌐 [English](README.md) | [Português](README.pt-BR.md)**

</div>

---

## 🎯 Overview

A beautifully designed, responsive portfolio website built with modern web technologies. Features smooth animations, dark/light theme support, and a clean grid-based layout that showcases professional experience, projects, and technical expertise.

### ✨ Key Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Theme Toggle** - Seamless dark/light mode switching
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Performance Optimized** - Built with Vite for lightning-fast builds
- 🎭 **Smooth Animations** - Powered by Framer Motion for engaging interactions
- 🎯 **Component-Based** - Modular architecture for easy maintenance

---

## 🚀 Tech Stack

### Core Technologies
- **React 19.2.0** - Modern UI library
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Next-generation build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework

### Libraries & Tools
- **Framer Motion 12.31.0** - Animation library
- **Lucide React 0.563.0** - Beautiful icon library
- **ESLint** - Code quality and linting

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── CVCard.tsx     # CV download card
│   │   ├── ProjectCard.tsx # Project showcase cards
│   │   ├── SocialCard.tsx  # Social media links
│   │   ├── StatusCard.tsx  # Availability status
│   │   ├── TechStack.tsx   # Technology showcase
│   │   └── ThemeToggle.tsx # Theme switcher
│   ├── hooks/             # Custom React hooks
│   │   └── useTheme.ts     # Theme management hook
│   ├── lib/               # Utility libraries
│   │   └── framer.ts      # Framer Motion variants
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Components

### Hero Section
The main introduction area featuring a personalized greeting and professional tagline.

### Social Cards
Interactive cards linking to GitHub and LinkedIn profiles with hover animations.

### Status Card
Displays current availability status with a live indicator.

### CV Card
Downloadable CV card with smooth hover effects and visual feedback.

### Tech Stack
Showcases technical expertise organized by categories:
- **Interface**: React, Next.js, TypeScript, Tailwind v4
- **Systems**: Node.js, Fastify, PostgreSQL, NoSQL
- **Tools**: Git, GitHub, Docker, AI-Driven Development

### Project Cards
Featured projects with:
- Project title and description
- Technology tags
- Links to live demo and source code
- Hover animations and visual effects

---

## 🎭 Animations

The portfolio uses Framer Motion for smooth, professional animations:

- **Staggered entrance animations** - Components appear sequentially
- **Hover effects** - Interactive feedback on cards and links
- **Theme transitions** - Smooth color transitions when switching themes
- **Spring physics** - Natural, physics-based animations

Animation variants are centralized in `src/lib/framer.ts` for consistent behavior across components.

---

## 🎨 Theming

The portfolio supports both dark and light themes with:
- CSS custom properties for dynamic theming
- Smooth transitions between themes
- Persistent theme preference (via localStorage)
- Accessible color contrasts

---

## 📝 Customization

### Updating Personal Information

1. **Hero Section** - Edit `src/App.tsx`:
   ```tsx
   <h1>Olá, sou Pedro.</h1>
   <p>Software Engineer com visão de produto...</p>
   ```

2. **Social Links** - Update URLs in `src/App.tsx`:
   ```tsx
   <SocialCard platform="GitHub" href="https://github.com/yourusername" />
   <SocialCard platform="LinkedIn" href="https://linkedin.com/in/yourprofile" />
   ```

3. **CV File** - Place your CV PDF in `public/` and update the path in `CVCard.tsx`:
   ```tsx
   href="/seu-curriculo.pdf"
   ```

4. **Projects** - Modify project cards in `src/App.tsx`:
   ```tsx
   <ProjectCard
     title="Your Project"
     description="Project description..."
     tags={['Tech1', 'Tech2']}
     link="https://demo.com"
     github="https://github.com"
   />
   ```

5. **Tech Stack** - Update technologies in `src/components/TechStack.tsx`

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📄 License

This project is private and proprietary.

---

## 👤 Author

**Pedro**

- GitHub: [@pedrorfdev](https://github.com/pedrorfdev)
- LinkedIn: [pedroff](https://linkedin.com/in/pedroff)

---

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animation capabilities
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing-fast build tool

---

<div align="center">

**Built with ❤️ using React, TypeScript, and modern web technologies**

⭐ Star this repo if you find it helpful!

</div>
