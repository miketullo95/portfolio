import { slugify } from '@/lib/mdx'

/**
 * Custom H2 rendered for all MDX case study content.
 * Auto-generates an id from the heading text using the same slugify()
 * function used to build the TOC — ensuring anchor hrefs always resolve.
 *
 * The anchor link (#) lets keyboard and mouse users copy a deep link
 * to any section — a progressive enhancement, not required for compliance.
 */
export default function MdxH2({ children }: { children?: React.ReactNode }) {
  const text = typeof children === 'string' ? children : ''
  const id = slugify(text)

  return (
    <h2
      id={id}
      tabIndex={-1}
      className="group font-display text-2xl text-neutral-950 dark:text-white mt-14 mb-4 leading-snug scroll-mt-24"
    >
      {/* Accent bar — purely decorative, hidden from screen readers.
          Short blue line above the text adds visual rhythm without
          overwhelming the minimal aesthetic. */}
      <span
        aria-hidden="true"
        className="block w-7 h-0.5 bg-blue-600 dark:bg-blue-400 mb-3 rounded-full"
      />

      {children}

      {/* Visible-on-hover anchor — aria-hidden so screen readers skip it */}
      <a
        href={`#${id}`}
        aria-hidden="true"
        tabIndex={-1}
        className="ml-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 text-neutral-400 dark:text-neutral-600 text-xl font-normal transition-opacity"
      >
        #
      </a>
    </h2>
  )
}
