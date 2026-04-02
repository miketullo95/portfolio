'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { CaseStudyMeta } from '@/lib/types'

function CardTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function CoverPlaceholder() {
  return <div className="w-full h-full" />
}

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

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group flex flex-col md:flex-row rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-neutral-950/50 transition-all duration-300"
            >
              {/* Cover image */}
              <div className="md:w-3/5 aspect-video md:aspect-auto bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <CoverPlaceholder />
                )}
              </div>

              {/* Card body */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-xs text-neutral-500 tracking-wide uppercase">
                    {project.company}
                  </p>
                  {i === 0 && (
                    <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-neutral-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {project.subtitle}
                </p>
                <CardTags tags={project.tags} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
