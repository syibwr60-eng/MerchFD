import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export function StorySection() {
  const { ref, isVisible } = useReveal()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-10 sm:px-8 lg:px-12 lg:py-14"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.88),rgba(10,10,10,0.4),rgba(10,10,10,0.9)),radial-gradient(circle_at_20%_20%,rgba(255,122,0,0.14),transparent_22%),radial-gradient(circle_at_75%_45%,rgba(255,255,255,0.06),transparent_16%)]" />
      <div className="relative z-10 grid gap-4 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.38em] text-acid"
        >
          Концепция
        </motion.p>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-3xl text-[10vw] font-semibold uppercase leading-[0.88] tracking-poster text-white sm:text-[7vw] lg:text-[3.8vw]"
          >
            Живая подача коллекции с фокусом на графику и носибельность.
          </motion.h2>
        </div>
      </div>
    </section>
  )
}
