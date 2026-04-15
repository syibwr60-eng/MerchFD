import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export function FinalSection() {
  const { ref, isVisible } = useReveal()

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-end overflow-hidden px-4 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 lg:px-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.15),rgba(0,0,0,0.92)_45%,#000)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.2),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 w-full"
      >
        <p className="text-[11px] uppercase tracking-[0.45em] text-acid">
          Финал
        </p>
        <h2 className="mt-4 whitespace-nowrap text-[20vw] font-semibold uppercase leading-[0.82] tracking-poster text-white sm:mt-5 sm:text-[16vw] lg:text-[11vw]">
          FUNDUCK
        </h2>
        <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-lg">
            <span className="whitespace-nowrap">FunDuck</span>. Финальный экран предложения по мерчу.
          </p>
          <a
            href="#products"
            className="inline-flex w-fit items-center rounded-full border border-acid/30 bg-acid px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black transition hover:scale-[1.03] sm:px-7 sm:py-4 sm:text-[11px] sm:tracking-[0.35em]"
          >
            Смотреть модели
          </a>
        </div>
      </motion.div>
    </section>
  )
}
