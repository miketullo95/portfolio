import Link from 'next/link'
import Image from 'next/image'

type CalloutProps = {
  href: string
  company: string
  title: string
  description: string
  cta: string
  coverImage?: string
}

export default function Callout({ href, company, title, description, cta, coverImage }: CalloutProps) {
  return (
    <div className="not-prose my-10">
      <Link
        href={href}
        className="group flex flex-col sm:flex-row rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-neutral-950/50 transition-all duration-300 bg-white dark:bg-neutral-900 !no-underline"
      >
        {/* Cover image — fixed width on desktop */}
        <div className="sm:w-56 sm:flex-shrink-0 aspect-video sm:aspect-auto relative bg-gradient-to-br from-blue-950 via-blue-900 to-neutral-900">
          {coverImage && (
            <Image
              src={coverImage}
              alt={`Cover image for ${title}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        {/* Text content */}
        <div className="p-6 flex flex-col justify-center flex-1">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-2">
            {company}
          </p>
          <h3 className="font-display text-lg text-neutral-950 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            {description}
          </p>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1">
            {cta}
            <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
          </p>
        </div>
      </Link>
    </div>
  )
}
