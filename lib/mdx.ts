import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { CaseStudyMeta } from './types'

const CASE_STUDIES_DIR = path.join(process.cwd(), 'content/case-studies')

export function getCaseStudySlugs(): string[] {
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getCaseStudyBySlug(slug: string): { meta: CaseStudyMeta; content: string } | null {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    meta: { ...(data as Omit<CaseStudyMeta, 'slug'>), slug },
    content,
  }
}

export type Heading = { id: string; text: string }

/**
 * Convert a heading string to a URL-safe id.
 * Must stay in sync with the same function in the custom H2 MDX component
 * so that TOC anchor hrefs resolve to the correct element ids.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Parse H2 headings from raw MDX source to build the table of contents.
 * Only H2s (##) are included — H3s are sub-points, not top-level nav.
 */
export function getHeadings(source: string): Heading[] {
  const headingRegex = /^## (.+)$/gm
  const headings: Heading[] = []
  let match
  while ((match = headingRegex.exec(source)) !== null) {
    const text = match[1].trim()
    headings.push({ id: slugify(text), text })
  }
  return headings
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  return getCaseStudySlugs()
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((result): result is NonNullable<typeof result> => result !== null)
    .map((result) => result.meta)
    .sort((a, b) => a.order - b.order)
}
