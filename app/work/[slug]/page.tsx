import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const result = getCaseStudyBySlug(slug)
  if (!result) notFound()

  const { meta, content } = result

  return (
    // TODO: Build case study page layout
    <div>
      <MDXRemote source={content} />
    </div>
  )
}
