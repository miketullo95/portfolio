type Stat = {
  value: string
  label: string
}

/**
 * StatBlock — outcome metrics display for case studies.
 * Used directly in MDX: <StatBlock stats={[...]} />
 *
 * Renders as a <ul> so screen readers get a proper list of metrics
 * rather than a run of anonymous divs — WCAG 1.3.1.
 */
export default function StatBlock({ stats = [] }: { stats: Stat[] }) {
  if (!stats.length) return null
  return (
    <ul
      aria-label="Key metrics"
      className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-12 p-8 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/50 list-none"
    >
      {stats.map(({ value, label }) => (
        <li key={label} className="text-center">
          {/* aria-label combines value + label so screen readers announce
              "73 percent of users struggled with basic content updates"
              rather than the number in isolation — WCAG 1.3.1 */}
          <p
            aria-label={`${value} — ${label}`}
            className="font-display text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
            aria-hidden="true"
          >
            {value}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug" aria-hidden="true">
            {label}
          </p>
        </li>
      ))}
    </ul>
  )
}
