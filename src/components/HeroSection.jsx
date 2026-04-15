import { motion } from 'framer-motion'

const heroText = 'ПРЕДЛОЖЕНИЕ ПО МЕРЧУ'

export function HeroSection({ product }) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-4 pb-5 pt-14 sm:px-8 sm:pb-8 sm:pt-20 lg:px-12">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12, opacity: 0.45 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(255,122,0,0.24),transparent_24%),linear-gradient(180deg,rgba(10,10,10,0.02),rgba(10,10,10,0.72)_48%,rgba(10,10,10,0.96))]" />
        <img
          src={product.print}
          alt=""
          aria-hidden="true"
          className="absolute right-[-26%] top-[8%] z-0 h-[50vh] w-[88vw] object-contain opacity-70 mix-blend-screen sm:right-[-10%] sm:top-[10%] sm:h-[48vh] sm:w-[46vw] lg:right-[2%] lg:top-[12%] lg:h-[52vh] lg:w-[28vw]"
          loading="eager"
        />
        <img
          src={product.mockup}
          alt={product.name}
          className="h-full w-full object-cover object-center opacity-86 blur-[1px]"
          loading="eager"
        />
      </motion.div>

      <div className="relative z-10 grid w-full gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-[10px] uppercase tracking-[0.38em] text-acid sm:mb-5 sm:text-[11px] sm:tracking-[0.45em]"
          >
            FunDuck / предложение по мерчу
          </motion.p>

          <h1 className="max-w-6xl text-[24vw] font-semibold uppercase leading-[0.8] tracking-poster text-white sm:text-[14vw] lg:text-[9vw]">
            {'FUNDUCK'.split('').map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                className="inline-block"
                initial={{ opacity: 0, y: '0.8em' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <div className="mt-4 max-w-4xl text-[10vw] font-medium uppercase leading-[0.86] tracking-poster text-zinc-100 sm:mt-8 sm:text-[5vw] lg:text-[3.5vw]">
            {heroText.split(' ').map((word, wordIndex) => (
              <span key={word} className="mr-[0.18em] inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: '115%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + wordIndex * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-5 max-w-[14rem] rounded-full border border-white/10 bg-black/40 px-4 py-3 text-[9px] uppercase tracking-[0.24em] text-zinc-200 backdrop-blur sm:max-w-xs sm:text-[10px] sm:tracking-[0.28em]"
          >
            Hero-модель: {product.name}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="justify-self-end text-right"
        >
          <div className="mt-4 text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:mt-6 sm:text-[11px] sm:tracking-[0.35em]">
            Скролл, чтобы посмотреть коллекцию
          </div>
        </motion.div>
      </div>
    </section>
  )
}
