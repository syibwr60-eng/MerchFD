import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export function MaterialsSection({ items, texture }) {
  const sectionRef = useRef(null)
  const { ref, isVisible } = useReveal()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const textureScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const textureY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <motion.img
        src={texture}
        alt="Texture detail"
        style={{ scale: textureScale, y: textureY }}
        className="absolute inset-y-0 right-[-10%] hidden h-full w-[50%] object-cover opacity-[0.18] blur-[2px] lg:block"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.96),rgba(10,10,10,0.78),rgba(10,10,10,0.95))]" />

      <div ref={ref} className="relative z-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.38em] text-acid"
          >
            Материалы
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-xl text-[14vw] font-semibold uppercase leading-[0.88] tracking-poster text-white sm:text-[10vw] lg:text-[6vw]"
          >
            Плотность, форма и аккуратная отделка.
          </motion.h2>
        </div>

        <div className="grid gap-6">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.1 }}
              className="border-t border-white/10 py-7"
            >
              <p className="text-[11px] uppercase tracking-[0.34em] text-zinc-500">
                {item.subtitle}
              </p>
              <h3 className="mt-3 text-3xl font-semibold uppercase tracking-poster text-white sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
