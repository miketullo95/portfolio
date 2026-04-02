export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 mt-24">
      <div className="mx-auto max-w-wide px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        {/* neutral-600 on white = 5.74:1; dark:neutral-400 on neutral-900 = 7.37:1
            Both pass WCAG 1.4.3 AA (4.5:1 required for small text) */}
        <p className="text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Mike Tullo
        </p>

        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/miketullo"
            target="_blank"
            rel="noopener noreferrer"
            /* Screen readers announce the full label including the new-tab
               warning, satisfying WCAG 2.4.4 and avoiding surprise — WCAG 3.2.2 */
            aria-label="LinkedIn profile (opens in new tab)"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:miketullo95@gmail.com"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
