/**
 * Quote — styled pull quote for MDX case study content.
 * Usage in MDX:
 *   <Quote cite="Person, Role">
 *     The quote text goes here.
 *   </Quote>
 */
export default function Quote({
  children,
  cite,
}: {
  children: React.ReactNode
  cite?: string
}) {
  return (
    /* <figure> + <figcaption> is the correct semantic pairing for a
       quote with attribution — WCAG 1.3.1 */
    <figure className="not-prose my-12 pl-6 border-l-4 border-blue-600 dark:border-blue-400">
      <blockquote>
        {/* span with block display avoids <p>-in-<p> hydration error —
            MDX wraps text children in <p> automatically, so we can't use <p> here */}
        <span className="block font-display text-xl italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {children}
        </span>
      </blockquote>
      {cite && (
        <figcaption className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          {cite}
        </figcaption>
      )}
    </figure>
  )
}
