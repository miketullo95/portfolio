'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-wide px-6 py-24 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        className="max-w-content"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-widest uppercase">
          About
        </p>
        <h2 className="font-display text-3xl text-neutral-950 dark:text-white mb-6">
          A designer who thinks like a game developer
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
          {/* TODO: Add about preview copy */}
        </p>
        <Link
          href="/about"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
        >
          More about me →
        </Link>
      </motion.div>
    </section>
  )
}
