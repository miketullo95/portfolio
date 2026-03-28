export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 mt-24">
      <div className="mx-auto max-w-wide px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Mike Tullo</p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/miketullo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mike@miketullo.com"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
