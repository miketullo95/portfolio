type Step = {
  title: string
  description: string
}

export default function ProcessSteps({ steps = [] }: { steps?: Step[] }) {
  if (!steps.length) return null

  return (
    <div className="not-prose my-10">
      {/* Grid: 2 cols on md, 3 cols on lg — more breathing room than a single cramped row */}
      <ol className="flex flex-col gap-3 list-none" role="list">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-5 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-sm transition-all duration-200 list-none">
            {/* Number badge */}
            <span
              aria-hidden="true"
              className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 tabular-nums mt-0.5"
            >
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-neutral-950 dark:text-white mb-1 leading-snug">
                {step.title}
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
