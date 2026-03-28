import type { Metadata } from 'next'
import { getAllCaseStudies } from '@/lib/mdx'
import WorkIndexContent from '@/components/work/work-index-content'

export const metadata: Metadata = {
  title: 'Work — Mike Tullo',
  description:
    'Case studies from Mike Tullo — Product Manager and UX Designer. Projects spanning Yale University platforms, Timex wearables, and enterprise UX.',
}

export default function WorkPage() {
  const projects = getAllCaseStudies()
  return <WorkIndexContent projects={projects} />
}
