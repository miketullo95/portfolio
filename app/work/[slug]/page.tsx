import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getCaseStudyBySlug, getCaseStudySlugs, getHeadings, getAllCaseStudies } from '@/lib/mdx'
import CaseStudyHeader from '@/components/case-study/header'
import StatBlock from '@/components/case-study/stat-block'
import Quote from '@/components/case-study/quote'
import MdxH2 from '@/components/case-study/mdx-heading'
import CaseStudyImage from '@/components/case-study/mdx-image'
import TableOfContents from '@/components/case-study/table-of-contents'
import RelatedStudies from '@/components/case-study/related-studies'
import ProcessSteps from '@/components/case-study/process-steps'
import YouTubeEmbed from '@/components/case-study/youtube-embed'

const mdxComponents = {
  StatBlock,
  Quote,
  CaseStudyImage,
  ProcessSteps,
  YouTubeEmbed,
  // Override the default h2 renderer so every heading gets an id + anchor
  h2: MdxH2,
}

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

// Per-page <title> and <meta description> — WCAG 2.4.2
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const result = getCaseStudyBySlug(slug)
  if (!result) return {}
  const { meta } = result
  return {
    title: `${meta.title} — Mike Tullo`,
    description: meta.subtitle,
  }
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
  const headings = getHeadings(content)
  const allStudies = getAllCaseStudies()

  return (
    <article>
      {/* Cover image — full-bleed. Gradient placeholder shown until a real
          image is provided. priority so it loads before LCP — WCAG 1.4.3 */}
      <div className="w-full h-56 md:h-80 relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-neutral-900">
        {meta.coverImage && (
          <Image
            src={meta.coverImage}
            alt={`Cover image for ${meta.title}`}
            fill
            priority
            className="object-cover"
          />
        )}
      </div>

      {/* Page header */}
      <CaseStudyHeader meta={meta} />

      <div className="mx-auto max-w-content px-6">
        <hr className="border-neutral-200 dark:border-neutral-800 mb-0" />
      </div>

      {/* Content area.
          The prose wrapper stays at max-w-content so it always aligns with
          the header above. The TOC is absolutely positioned outside that box
          to the left — it never affects the content column's position.
          Only rendered at xl+ (≥1280px) where there's guaranteed room. */}
      <div className="relative mx-auto max-w-content px-6 pb-24 pt-12">

        {/* TOC floats outside the content box.
            right-full puts its right edge at the content box's left padding edge.
            -translate-x-8 adds a 32px gap between the two columns.
            h-full is required — sticky only scrolls within its containing block,
            so the absolute wrapper must match the prose height for sticky to
            remain pinned for the full length of the article. */}
        <div className="hidden xl:block absolute top-0 right-full w-48 -translate-x-8 h-full">
          <div className="sticky top-24">
            <TableOfContents headings={headings} />
          </div>
        </div>

        {/* Prose content — width matches the header above it exactly */}
        <div className="prose">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

      </div>

      {/* Related case studies — filtered to exclude the current page */}
      <RelatedStudies studies={allStudies} currentSlug={slug} />
    </article>
  )
}
