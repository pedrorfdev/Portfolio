import { motion } from 'framer-motion'
import { ProjectCard } from "./components/ProjectCard";
import { SocialCard } from "./components/SocialCard";
import { StatusCard } from "./components/StatusCard";
import { TechStack } from "./components/TechStack";
import { ThemeToggle } from "./components/ThemeToggle";
import { Sparkles } from "lucide-react";
import { containerVariants, itemVariants } from './lib/framer';
import { CVCard } from './components/CvCard';

export function App() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-app-bg text-text-main p-4 md:p-8"
    >
      <header className="max-w-6xl mx-auto flex justify-end mb-4">
        <ThemeToggle />
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-4">

        <motion.section
          variants={itemVariants}
          className="md:col-span-2 md:row-span-2 p-10 rounded-3xl bg-card-bg border border-border-main flex flex-col justify-center transition-[background-color,border-color] duration-700"
        >
          <Sparkles className="text-accent-main mb-6 opacity-80" size={32} />
          <h1 className="text-5xl font-bold mb-6 tracking-tighter text-text-main">Olá, sou Pedro.</h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-[90%]">
            Software Engineer com visão de produto. Transformo códigos em soluções estratégicas que geram valor real.
          </p>
        </motion.section>

        <SocialCard platform="GitHub" href="https://github.com/pedrorfdev" />
        <StatusCard />
        <SocialCard platform="LinkedIn" href="https://linkedin.com/in/pedroff" />
        <CVCard />

        <TechStack />

        <ProjectCard
          title="E-commerce Engine"
          description="Desenvolvimento de uma API escalável com Node.js e integração de pagamentos, focada na redução do tempo de checkout em 15%."
          tags={['Node.js', 'PostgreSQL', 'Stripe', 'Redis']}
          link="https://demo.com"
          github="https://github.com"
        />

        <ProjectCard
          title="Finance Dashboard"
          description="Interface analítica para gestão financeira pessoal com visualização de dados em tempo real utilizando gráficos complexos."
          tags={['React', 'TypeScript', 'Tailwind v4', 'Chart.js']}
          link="https://demo2.com"
          github="https://github.com"
        />
      </main>
    </motion.div>
  )
}
