import { motion } from 'framer-motion'
import { itemVariants } from '../lib/framer'

interface ProjectProps {
  title: string
  description: string
  tags: string[]
  link: string
  github: string
}

export function ProjectCard({ title, description, tags, link, github }: ProjectProps) {
  return (
    <motion.section 
      variants={itemVariants}
      whileHover={{ 
        y: -8,
        scale: 1.01,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 17 
        } 
      }}
      whileTap={{ scale: 0.98 }}
      className="group md:col-span-2 p-6 rounded-3xl bg-card-bg flex flex-col justify-between overflow-hidden relative border border-border-main hover:border-accent-main/50 hover:shadow-[0_0_20px_-5px_var(--color-accent-main)] transition-[background-color,border-color,shadow] duration-500"
    >

      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-main opacity-0 blur-[80px] group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
        </div>

        <p className="text-text-muted mb-6 leading-relaxed text-balance">
          {description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-border-main/50 text-[10px] uppercase tracking-wider font-bold text-text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={link}
            target="_blank"
            className="text-sm font-semibold text-accent-main hover:underline flex items-center gap-1"
          >
            Explorar Solução ↗
          </a>
          <a
            href={github}
            target="_blank"
            className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
          >
            Ver Código
          </a>
        </div>
      </div>

    </motion.section>
  )
}