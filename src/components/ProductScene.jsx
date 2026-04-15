import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const cardMotion = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.025,
    rotate: -0.8,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ProductScene({ product, index, align = 'left' }) {
  const sectionRef = useRef(null)
  const { ref: revealRef, isVisible } = useReveal()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const [isOpen, setIsOpen] = useState(false)

  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '6%'])
  const printY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 0.96])
  const isRight = align === 'right'

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-[100svh] overflow-hidden px-4 py-8 sm:px-8 sm:py-12 lg:min-h-[120svh] lg:px-12"
      >
        <motion.img
          src={product.print}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{ y: printY }}
          initial={{ opacity: 0, scale: 1.14, filter: 'blur(18px)' }}
          animate={isVisible ? { opacity: 0.54, scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-none absolute top-[3%] z-0 w-[108vw] object-contain mix-blend-screen lg:hidden ${
            isRight ? 'left-[-16vw]' : 'right-[-16vw]'
          }`}
        />
        <motion.img
          src={product.print}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{ y: printY }}
          initial={{ opacity: 0, scale: 1.12, filter: 'blur(20px)' }}
          animate={isVisible ? { opacity: 0.4, scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-none absolute top-1/2 z-0 hidden max-h-[95vh] w-[56vw] -translate-y-1/2 object-contain mix-blend-screen lg:block ${
            isRight ? 'left-[-4vw]' : 'right-[-4vw]'
          }`}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.56),rgba(10,10,10,0.18),rgba(10,10,10,0.94))] lg:bg-[linear-gradient(90deg,rgba(10,10,10,0.88),rgba(10,10,10,0.4),rgba(10,10,10,0.88))]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.14),transparent_52%)]" />

        <div className="flex min-h-screen items-center lg:sticky lg:top-0">
          <div
            ref={revealRef}
            className={`relative z-10 grid w-full items-end gap-5 pt-[24vh] sm:gap-8 sm:pt-[28vh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-0 ${
              isRight ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              style={{ y: imageY, scale: imageScale }}
              initial={{ opacity: 0, filter: 'blur(18px)' }}
              animate={isVisible ? { opacity: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9 }}
              whileHover="hover"
              className="group relative mx-auto w-full max-w-[30rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-3 text-left shadow-glow sm:rounded-[2rem] sm:p-4 lg:max-w-none"
              aria-label={`Открыть модель ${product.name}`}
            >
              <motion.div
                variants={cardMotion}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="relative overflow-hidden rounded-[1.2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] sm:rounded-[1.5rem]"
              >
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={isVisible ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                  transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={product.mockup}
                    alt={product.name}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </motion.div>
              </motion.div>
              <div className="absolute bottom-4 right-4 rounded-full border border-white/12 bg-black/45 px-3 py-2 text-[9px] uppercase tracking-[0.24em] text-zinc-100 backdrop-blur-sm sm:text-[10px]">
                Нажми, чтобы открыть
              </div>
            </motion.button>

            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15 }}
              className={`relative mx-auto w-full max-w-[34rem] rounded-[1.5rem] border border-white/10 bg-black/34 p-5 backdrop-blur-md sm:p-6 lg:max-w-none lg:border-none lg:bg-transparent lg:p-0 lg:backdrop-blur-0 ${isRight ? 'lg:pr-8' : 'lg:pl-8'}`}
            >
              <div className="mb-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-zinc-500 sm:mb-5 sm:gap-4 sm:text-[10px] sm:tracking-[0.35em]">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span className="h-px w-14 bg-white/10" />
                <span className="text-acid">{product.tag}</span>
              </div>

              <h3 className="max-w-xl text-[14vw] font-semibold uppercase leading-[0.84] tracking-poster text-white sm:text-[11vw] lg:text-[6vw]">
                {product.name}
              </h3>

              <p className="mt-4 max-w-md text-[10px] uppercase tracking-[0.26em] text-zinc-500 sm:mt-6 sm:text-sm sm:tracking-[0.34em]">
                {product.tone}
              </p>

              <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-zinc-100 sm:hidden">
                {product.shortDescription ?? product.description}
              </p>

              <p className="mt-6 hidden max-w-lg text-[15px] leading-relaxed text-zinc-300 sm:mt-8 sm:block sm:text-lg">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-4">
                <div className="rounded-full border border-acid/25 bg-acid/10 px-3.5 py-2 text-[9px] uppercase tracking-[0.24em] text-acid sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.34em]">
                  {product.technique}
                </div>
                <div className="rounded-full border border-white/10 px-3.5 py-2 text-[9px] uppercase tracking-[0.24em] text-zinc-300 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.34em]">
                  {product.frontTechnique}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-4 shadow-[0_0_80px_rgba(255,122,0,0.16)] sm:p-5"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-zinc-100"
              >
                Закрыть
              </button>
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]">
                <img
                  src={product.mockup}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
