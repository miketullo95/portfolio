import type { Metadata } from 'next'
import ContactContent from '@/components/contact/contact-content'

export const metadata: Metadata = {
  title: 'Contact — Mike Tullo',
  description: 'Get in touch with Mike Tullo, Product Manager and UX Designer at Yale University.',
}

export default function ContactPage() {
  return <ContactContent />
}
