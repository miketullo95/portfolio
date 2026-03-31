type YouTubeEmbedProps = {
  id: string
  title: string
  caption?: string
}

/**
 * YouTubeEmbed — responsive 16:9 YouTube iframe for case studies.
 * Usage in MDX: <YouTubeEmbed id="VIDEO_ID" title="..." caption="..." />
 *
 * Uses a native <iframe> (not a third-party wrapper) so there's no
 * extra JS weight. The title prop maps to the iframe's title attribute
 * for screen reader accessibility — WCAG 2.4.1 / 4.1.2.
 */
export default function YouTubeEmbed({ id, title, caption }: YouTubeEmbedProps) {
  return (
    <figure className="not-prose my-10">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 shadow-md">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 text-center leading-snug">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
