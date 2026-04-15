import { motion } from 'framer-motion'
import { ScanLine, Sparkles, Spline } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const icons = {
  DTF: ScanLine,
  Шелкография: Spline,
  Вышивка: Sparkles,
}

export function TechniquesSection({ items, products }) {
  const { ref, isVisible } = useReveal()
  const techniqueBackdrops = [
    products.find((product) => product.id === 'shadow-front')?.print ?? products[0].print,
    products.find((product) => product.id === 'back-street-white-2')?.print ?? products[1].print,
    products.find((product) => product.id === 'back-punk-black')?.print ?? products[2].print,
  ]

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.38em] text-acid"
          >
            Технологии
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 44 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-md text-[13vw] font-semibold uppercase leading-[0.88] tracking-poster text-white sm:text-[9vw] lg:text-[5.4vw]"
          >
            Три способа сделать мерч сильнее.
          </motion.h2>
        </div>

        <div className="grid gap-6">
          {items.map((item, index) => {
            const Icon = icons[item.title]
            const backdrop = techniqueBackdrops[index]

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 48 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.14 + index * 0.12 }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="relative z-10 grid gap-4 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-acid/25 bg-acid/10 text-acid">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                      {item.kicker}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold uppercase tracking-poster text-white sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,122,0,0.12),rgba(255,255,255,0.02))] p-3">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.18),transparent_60%)]" />
                    <div className="relative flex min-h-[14rem] items-center justify-center rounded-[1rem] bg-black/20 p-3">
                      <img
                        src={backdrop}
                        alt=""
                        loading="lazy"
                        className="max-h-[17rem] w-full object-contain mix-blend-screen transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
