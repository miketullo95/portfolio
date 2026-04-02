'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Check, Copy } from 'lucide-react'

const EMAIL = 'miketullo95@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/miketullo'

export default function ContactContent() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="mx-auto max-w-content px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">
          Contact
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-neutral-950 dark:text-white leading-tight mb-6">
          Let&apos;s connect
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-14 max-w-md">
          LinkedIn is the best place to reach me. If you prefer email, copy it below — I try to respond within a few days.
        </p>
      </motion.div>

      <div className="space-y-4">

        {/* LinkedIn — primary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            /* Describes the destination and that it opens in a new tab — WCAG 2.4.4 */
            aria-label="Connect on LinkedIn (opens in new tab)"
            className="group flex items-center justify-between w-full px-6 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Linkedin size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-base leading-tight">LinkedIn</p>
                <p className="text-sm text-blue-100 mt-0.5">linkedin.com/in/miketullo</p>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="text-blue-200 group-hover:translate-x-0.5 transition-transform text-lg"
            >
              →
            </span>
          </a>
        </motion.div>

        {/* Email — copy to clipboard */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25, ease: 'easeOut' }}
        >
          <button
            onClick={copyEmail}
            /* aria-live region announces the copied state to screen readers
               without requiring focus — WCAG 4.1.3 */
            aria-label={copied ? 'Email address copied to clipboard' : `Copy email address ${EMAIL}`}
            className="group flex items-center justify-between w-full px-6 py-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md transition-all duration-200 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                <Mail size={20} aria-hidden="true" className="text-neutral-600 dark:text-neutral-400" />
              </div>
              <div>
                <p className="font-semibold text-base text-neutral-950 dark:text-white leading-tight">
                  Email
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {EMAIL}
                </p>
              </div>
            </div>

            {/* Copy / copied indicator */}
            <div
              aria-live="polite"
              className={[
                'flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0',
                copied
                  ? 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300',
              ].join(' ')}
            >
              {copied ? (
                <>
                  <Check size={13} aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={13} aria-hidden="true" />
                  Copy
                </>
              )}
            </div>
          </button>
        </motion.div>

      </div>

      {/* Availability note */}
      <motion.p
        className="mt-10 text-sm text-neutral-500 dark:text-neutral-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Currently based in Connecticut &mdash; open to conversations about product and UX opportunities.
      </motion.p>
    </section>
  )
}
