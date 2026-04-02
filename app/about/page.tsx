import type { Metadata } from 'next'
import AboutContent from '@/components/about/about-content'

export const metadata: Metadata = {
  title: 'About — Mike Tullo',
  description:
    'Product Manager and UX Designer at Yale University. Background in game design, passionate about higher-education UX and mission-driven work.',
}

export default function AboutPage() {
  return <AboutContent />
}
