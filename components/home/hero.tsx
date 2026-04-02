'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})


export default function Hero() {
  return (
    <section className="mx-auto max-w-wide px-6 py-24 md:py-32">
      <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        {/* Text */}
        <div className="flex-1">
          <motion.p
            className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-widest uppercase"
            {...fadeUp(0)}
          >
            Product Manager
          </motion.p>

          <motion.h1
            className="font-display text-5xl md:text-6xl leading-[1.1] text-neutral-950 dark:text-white mb-6"
            {...fadeUp(0.1)}
          >
            👋 Hey, I'm Mike.
          </motion.h1>

          <motion.p
            className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-lg"
            {...fadeUp(0.2)}
          >
            A PM with a game design background and UX depth — building platforms and
            experiences that earn trust, reduce friction, and make people actually
            want to use them.
          </motion.p>

          <motion.div className="flex gap-4" {...fadeUp(0.3)}>
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              <Link
                href="/work"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
              >
                View Work
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              <Link
                href="/about"
                className="inline-block px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-500 dark:hover:border-neutral-500 text-sm font-medium rounded-lg transition-colors"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="relative shrink-0 w-64 h-64 md:w-80 md:h-80 cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{
            opacity: { duration: 0.6, ease: 'easeOut' },
            scale: { type: 'spring', stiffness: 300, damping: 22 },
          }}
        >
          <div className="w-full h-full rounded-2xl bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
            <Image
              src="/images/me.jpg"
              alt="Mike Tullo, Product Manager and UX Designer"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Purely decorative — hidden from assistive technology — WCAG 1.1.1 */}
          <div aria-hidden="true" className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-blue-500/25 -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
