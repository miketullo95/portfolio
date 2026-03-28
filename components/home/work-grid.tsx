'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { CaseStudyMeta } from '@/lib/types'

export default function WorkGrid({ projects }: { projects: CaseStudyMeta[] }) {
  return (
    <section className="mx-auto max-w-wide px-6 py-24 border-t border-neutral-200 dark:border-neutral-800">
      <motion.h2
        className="font-display text-3xl text-neutral-950 dark:text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Selected Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group block rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-neutral-900 transition-all duration-300"
            >
              {/* Cover image */}
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-xs text-neutral-500 mb-2 tracking-wide uppercase">
                  {project.company}
                </p>
                <h3 className="font-display text-xl text-neutral-950 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
