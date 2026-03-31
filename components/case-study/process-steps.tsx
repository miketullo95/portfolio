type Step = {
  title: string
  description: string
}

export default function ProcessSteps({ steps = [] }: { steps?: Step[] }) {
  if (!steps.length) return null

  return (
    <div className="not-prose my-10">
      {/* Desktop: horizontal row with arrow connectors */}
      <ol
        className="hidden lg:flex items-stretch gap-0 list-none"
        role="list"
      >
        {steps.map((step, i) => (
          <li key={i} className="flex items-stretch flex-1 min-w-0">
            <div className="flex flex-col w-full p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-sm transition-all duration-200">
              {/* Number badge */}
              <span
                aria-hidden="true"
                className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold flex items-center justify-center mb-4 flex-shrink-0 tabular-nums"
              >
                {i + 1}
              </span>
              <h4 className="font-semibold text-sm text-neutral-950 dark:text-white mb-2 leading-snug">
                {step.title}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-auto">
                {step.description}
              </p>
            </div>

            {/* Arrow connector between steps */}
            {i < steps.length - 1 && (
              <div
                aria-hidden="true"
                className="flex-shrink-0 flex items-center px-2 text-blue-200 dark:text-blue-900"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>

      {/* Mobile: vertical timeline with left accent line */}
      <ol
        className="flex lg:hidden flex-col gap-0 list-none border-l-2 border-blue-100 dark:border-blue-900/50 ml-4 pl-6"
        role="list"
      >
        {steps.map((step, i) => (
          <li key={i} className="relative pb-6 last:pb-0">
            {/* Dot on the timeline line */}
            <span
              aria-hidden="true"
              className="absolute -left-[2.125rem] top-1 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-neutral-950"
            >
              {i + 1}
            </span>
            <h4 className="font-semibold text-sm text-neutral-950 dark:text-white mb-1 leading-snug">
              {step.title}
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
