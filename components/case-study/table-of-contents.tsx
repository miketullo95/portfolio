'use client'

import { useEffect, useState } from 'react'
import type { Heading } from '@/lib/mdx'

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    // rootMargin: top offset accounts for the sticky nav (64px) + breathing room.
    // The large negative bottom margin means a heading becomes "active" as soon
    // as it enters the top quarter of the viewport — feels natural while reading.
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting heading and set it as active
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id)
        }
      },
      { rootMargin: '-80px 0% -70% 0%', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    // <nav> landmark with a unique label so it's distinct from the main nav
    // in the accessibility tree — WCAG 2.4.1, 4.1.2
    <nav aria-label="Table of contents">
      <p
        className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4"
        // Treat this as a visual label, not a heading, to avoid polluting the
        // page heading hierarchy — WCAG 1.3.1
        aria-hidden="true"
      >
        Contents
      </p>

      <ol className="space-y-1 list-none m-0 p-0">
        {headings.map(({ id, text }) => {
          const isActive = activeId === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                // aria-current="true" signals the active section to screen readers.
                // We use "true" (not "page") because this is within-page navigation.
                aria-current={isActive ? 'true' : undefined}
                className={[
                  'block text-sm py-1 pl-3 border-l-2 transition-colors duration-150 leading-snug',
                  isActive
                    ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium'
                    : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-600',
                ].join(' ')}
              >
                {text}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
