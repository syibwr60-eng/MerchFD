import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export function SectionDivider({ label }) {
  const { ref, isVisible } = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative h-24 overflow-hidden sm:h-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0),rgba(0,0,0,0.95)_40%,rgba(10,10,10,0))]" />
      <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between border-t border-white/10 pt-4 text-[9px] uppercase tracking-[0.32em] text-zinc-500 sm:inset-x-8 sm:pt-5 sm:text-[10px] sm:tracking-[0.4em] lg:inset-x-12">
        <span>{label}</span>
        <span>Переход / Следующий блок</span>
      </div>
    </motion.div>
  )
}
