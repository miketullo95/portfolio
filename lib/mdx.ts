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

export function getAllCaseStudies(): CaseStudyMeta[] {
  return getCaseStudySlugs()
    .map((slug) => getCaseStudyBySlug(slug).meta)
    .sort((a, b) => a.order - b.order)
}
