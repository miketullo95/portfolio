import Hero from '@/components/home/hero'
import WorkGrid from '@/components/home/work-grid'
import AboutPreview from '@/components/home/about-preview'
import { getAllCaseStudies } from '@/lib/mdx'

export default function HomePage() {
  const projects = getAllCaseStudies()

  return (
    <>
      <Hero />
      <WorkGrid projects={projects} />
      <AboutPreview />
    </>
  )
}
