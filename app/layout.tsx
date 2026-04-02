import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/layout/theme-provider'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mike Tullo | Product Manager',
  description:
    'Portfolio of Mike Tullo — Product Manager and UX Designer with a background in game design and user experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${lora.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white">
        <ThemeProvider>
          {/* Skip link — allows keyboard users to bypass repeated nav
              and jump directly to page content — WCAG 2.4.1 */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white dark:focus:bg-neutral-900 focus:text-blue-600 focus:border focus:border-blue-600 focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Nav />
          {/* id="main-content" is the skip link target — WCAG 2.4.1 */}
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
