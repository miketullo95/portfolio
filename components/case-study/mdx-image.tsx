import Image from 'next/image'

/**
 * CaseStudyImage — full-width image for use inside MDX content.
 * Usage: <CaseStudyImage src="/images/..." alt="..." caption="..." />
 *
 * - Renders as a <figure> with optional <figcaption> — WCAG 1.1.1 / 1.3.1
 * - alt is required and enforced by TypeScript
 * - caption is optional but recommended for context
 */
export default function CaseStudyImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="not-prose my-10">
      <div className="relative w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-center text-neutral-500 dark:text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
