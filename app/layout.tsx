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
  title: 'Mike Tullo | Product Manager & UX Designer',
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
      <body className="font-sans antialiased bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white">
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
