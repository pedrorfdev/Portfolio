import { motion } from 'framer-motion';
import { itemVariants } from '../lib/framer';
import { UserCheck } from 'lucide-react'; // Ícone do Lucide

export function StatusCard() {
  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-3xl bg-card-bg border border-border-main flex flex-col justify-between transition-[background-color,border-color] duration-700 h-full"
    >
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-xl bg-accent-main/10 text-accent-main">
          <UserCheck size={24} />
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">
            Online
          </span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-text-muted text-xs font-semibold uppercase tracking-tight mb-1">Disponibilidade</h3>
        <p className="text-text-main font-medium leading-tight">Pronto para novos projetos e colaborações.</p>
      </div>
    </motion.div>
  );
}