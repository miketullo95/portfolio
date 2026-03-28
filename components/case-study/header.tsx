import Link from 'next/link'
import type { CaseStudyMeta } from '@/lib/types'

type MetaItem = { label: string; value: string }

function MetaCell({ label, value }: MetaItem) {
  return (
    <div>
      {/* dt/dd pairs are semantically correct for key-value metadata — WCAG 1.3.1 */}
      <dt className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-1">
        {label}
      </dt>
      <dd className="text-sm text-neutral-950 dark:text-white font-medium">{value}</dd>
    </div>
  )
}

export default function CaseStudyHeader({ meta }: { meta: CaseStudyMeta }) {
  const { title, subtitle, company, role, timeline, tags } = meta

  return (
    <header className="mx-auto max-w-content px-6 pt-12 pb-10">
      {/* Back navigation — clear label for screen readers — WCAG 2.4.4 */}
      <Link
        href="/work"
        aria-label="Back to all work"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors mb-10 group"
      >
        <span aria-hidden="true" className="group-hover:-translate-x-0.5 transition-transform">←</span>
        All Work
      </Link>

      {/* Company label */}
      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">
        {company}
      </p>

      {/* H1 — one per page, describes the document — WCAG 2.4.6 */}
      <h1 className="font-display text-4xl md:text-5xl text-neutral-950 dark:text-white leading-tight mb-5">
        {title}
      </h1>

      <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10 max-w-prose">
        {subtitle}
      </p>

      {/* Meta — description list is the correct semantic element for labeled data */}
      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 border-t border-b border-neutral-200 dark:border-neutral-800 mb-4">
        <MetaCell label="Role" value={role} />
        <MetaCell label="Timeline" value={timeline} />
        <MetaCell label="Company" value={company} />
      </dl>

      {/* Tags */}
      {tags.length > 0 && (
        <ul aria-label="Case study tags" className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="text-xs px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
