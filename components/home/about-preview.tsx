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
          Product thinker. Game designer at heart.
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          I&apos;m a Product Manager and UX Designer at Yale University. My path here started with a degree in Game Design. What I fell in love with wasn&apos;t the engines or the code, it was the storyboarding, the user testing, and the craft of thinking through how someone would actually experience something.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
          I care about making things that genuinely work for the people using them, not just things that look good in a Figma file. Higher education gives me a context where the work actually matters: every friction point I remove gives someone back time to learn, teach, or create.
        </p>
        <Link
          href="/about"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
        >
          More about me <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </section>
  )
}
