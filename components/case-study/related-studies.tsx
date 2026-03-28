import Link from 'next/link'
import Image from 'next/image'
import type { CaseStudyMeta } from '@/lib/types'

function RelatedCard({ study }: { study: CaseStudyMeta }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-neutral-950/50 transition-all duration-300 bg-white dark:bg-neutral-900"
    >
      {/* Cover image / gradient placeholder */}
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-neutral-900">
        {study.coverImage && (
          <Image
            src={study.coverImage}
            alt={`Cover image for ${study.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-widest mb-2">
          {study.company}
        </p>
        <h3 className="font-display text-lg text-neutral-950 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {study.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2 flex-1">
          {study.subtitle}
        </p>
        {/* Arrow indicator — decorative, aria-hidden */}
        <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1">
          View case study
          <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
        </p>
      </div>
    </Link>
  )
}

export default function RelatedStudies({
  studies,
  currentSlug,
}: {
  studies: CaseStudyMeta[]
  currentSlug: string
}) {
  const related = studies
    .filter((s) => s.slug !== currentSlug)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section
      aria-labelledby="related-studies-heading"
      className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/50 py-20 mt-0"
    >
      <div className="mx-auto max-w-wide px-6">
        <div className="mb-10">
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            More Work
          </p>
          <h2
            id="related-studies-heading"
            className="font-display text-2xl text-neutral-950 dark:text-white"
          >
            Continue exploring
          </h2>
        </div>

        <ul
          className={[
            'grid gap-6 list-none p-0 m-0',
            related.length === 1 ? 'grid-cols-1 max-w-sm' : '',
            related.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : '',
            related.length >= 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : '',
          ].join(' ')}
        >
          {related.map((study) => (
            <li key={study.slug}>
              <RelatedCard study={study} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
