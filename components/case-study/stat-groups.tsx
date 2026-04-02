type Stat = {
  value: string
  label: string
}

type Group = {
  title: string
  stats: Stat[]
}

export default function StatGroups({ groups = [] }: { groups?: Group[] }) {
  if (!groups.length) return null

  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
      {groups.map((group) => (
        <div
          key={group.title}
          className="bg-white dark:bg-neutral-950 px-7 py-8 flex flex-col gap-6"
        >
          {/* Group label */}
          <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            {group.title}
          </p>

          {/* Stats */}
          <ul className="flex flex-col gap-5 list-none [&>li]:list-none [&>li]:before:content-none [&>li]:pl-0" aria-label={group.title}>
            {group.stats.map(({ value, label }) => (
              <li key={label} aria-label={`${value} — ${label}`}>
                <p
                  aria-hidden="true"
                  className="font-display text-5xl font-black text-blue-600 dark:text-blue-400 leading-none mb-1 tracking-tight"
                >
                  {value}
                </p>
                <p
                  aria-hidden="true"
                  className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug"
                >
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
