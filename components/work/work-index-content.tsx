'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { CaseStudyMeta } from '@/lib/types'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

function CardTags({ tags }: { tags: string[] }) {
  return (
    <ul aria-label="Tags" className="flex flex-wrap gap-2 list-none">
      {tags.map((tag) => (
        <li key={tag}>
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )
}

function ProjectCard({ project, index }: { project: CaseStudyMeta; index: number }) {
  const isFeatured = index === 0

  if (isFeatured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        <Link
          href={`/work/${project.slug}`}
          className="group flex flex-col md:flex-row rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-neutral-950/50 transition-all duration-300"
          aria-label={`View case study: ${project.title}`}
        >
          {/* Cover image */}
          <div className="md:w-3/5 aspect-video md:aspect-auto min-h-64 bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>

          {/* Card body */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-3 tracking-wide uppercase font-medium">
              {project.company}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-neutral-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
              {project.subtitle}
            </p>

            {/* Role + timeline meta */}
            <dl className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-500 dark:text-neutral-500 mb-6">
              <div className="flex gap-1.5">
                <dt className="sr-only">Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="sr-only">Timeline</dt>
                <dd>{project.timeline}</dd>
              </div>
            </dl>

            <CardTags tags={project.tags} />

            <span
              aria-hidden="true"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2.5 transition-all duration-200"
            >
              Read case study →
            </span>
          </div>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
      className="h-full"
    >
      <Link
        href={`/work/${project.slug}`}
        className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-neutral-950/50 transition-all duration-300 h-full"
        aria-label={`View case study: ${project.title}`}
      >
        {/* Cover image */}
        <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full" />
          )}
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 tracking-wide uppercase font-medium">
            {project.company}
          </p>
          <h2 className="font-display text-lg text-neutral-950 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {project.title}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 leading-relaxed flex-1">
            {project.subtitle}
          </p>

          <dl className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-500 mb-4">
            <div>
              <dt className="sr-only">Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt className="sr-only">Timeline</dt>
              <dd>{project.timeline}</dd>
            </div>
          </dl>

          <CardTags tags={project.tags} />
        </div>
      </Link>
    </motion.div>
  )
}

export default function WorkIndexContent({ projects }: { projects: CaseStudyMeta[] }) {
  const [featured, ...rest] = projects

  return (
    <div className="mx-auto max-w-wide px-6 py-16 pb-24">

      {/* Page header */}
      <header className="mb-14">
        <motion.p
          className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4"
          {...fadeUp(0)}
        >
          Portfolio
        </motion.p>
        <motion.h1
          className="font-display text-4xl md:text-5xl text-neutral-950 dark:text-white leading-tight mb-4"
          {...fadeUp(0.05)}
        >
          Case Studies
        </motion.h1>
        <motion.p
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed"
          {...fadeUp(0.1)}
        >
          A collection of product and UX work spanning higher education, consumer electronics, and enterprise platforms.
        </motion.p>
      </header>

      {/* Projects */}
      <div className="space-y-6">
        {/* Featured — full width */}
        {featured && <ProjectCard project={featured} index={0} />}

        {/* Rest — 3-column grid */}
        {rest.length > 0 && (
          <ul
            aria-label="Additional case studies"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none"
          >
            {rest.map((project, i) => (
              <li key={project.slug} className="h-full">
                <ProjectCard project={project} index={i + 1} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
