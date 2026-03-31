'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const navLinkVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.2, ease: 'easeOut' } },
}

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Avoid hydration mismatch — only render theme-dependent UI after mount
  useEffect(() => setMounted(true), [])

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  // Prevent body scroll when mobile menu is open — WCAG 2.1.2
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-wide px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Mike Tullo — home"
            className="font-sans font-semibold text-neutral-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Mike Tullo
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const isCurrent = pathname === href || pathname.startsWith(href + '/')
              return (
                <MotionLink
                  key={href}
                  href={href}
                  aria-current={isCurrent ? 'page' : undefined}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className={[
                    // Minimum 44px touch target height via py-2.5 — WCAG 2.5.8
                    'relative text-sm px-3 py-2.5 rounded-md transition-colors',
                    isCurrent
                      ? 'text-neutral-950 dark:text-white font-medium'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
                  ].join(' ')}
                >
                  {label}
                  {/* Animated underline — expands from center on hover */}
                  {!isCurrent && (
                    <motion.span
                      aria-hidden="true"
                      className="absolute bottom-1.5 left-3 right-3 h-px bg-current opacity-40 origin-center"
                      variants={navLinkVariants}
                    />
                  )}
                </MotionLink>
              )
            })}

            {/* Theme toggle — aria-label describes the *action* — WCAG 4.1.2 */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="ml-2 p-2.5 rounded-md text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun size={16} aria-hidden="true" />
                ) : (
                  <Moon size={16} aria-hidden="true" />
                )}
              </button>
            )}
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1">
            {/* Theme toggle — visible on mobile too */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2.5 rounded-md text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun size={16} aria-hidden="true" />
                ) : (
                  <Moon size={16} aria-hidden="true" />
                )}
              </button>
            )}

            {/* Hamburger — aria-expanded communicates state to screen readers — WCAG 4.1.2 */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="p-2.5 rounded-md text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {menuOpen ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay
          role="dialog" + aria-modal tells screen readers this is a modal layer — WCAG 1.3.1 */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop — click to close */}
          <div
            className="absolute inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer — slides in from top, below the nav bar */}
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-lg">
            <ul className="px-4 py-3 space-y-1 list-none" role="list">
              {links.map(({ href, label }) => {
                const isCurrent = pathname === href || pathname.startsWith(href + '/')
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={[
                        'flex items-center w-full px-4 py-3 rounded-xl text-base transition-colors',
                        isCurrent
                          ? 'text-neutral-950 dark:text-white font-semibold bg-neutral-100 dark:bg-neutral-800'
                          : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
                      ].join(' ')}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
