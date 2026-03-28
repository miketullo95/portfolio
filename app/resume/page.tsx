import type { Metadata } from 'next'
import { Download, MapPin, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume — Mike Tullo',
  description:
    'Professional experience, education, and skills of Mike Tullo — Product Manager and UX Designer at Yale University.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
  {
    title: 'Product Manager, YaleSites Platform',
    company: 'Yale University',
    location: 'New Haven, CT',
    period: 'October 2024 – Present',
    current: true,
    bullets: [
      'Spearheaded the YaleSites platform as Product Manager, orchestrating cross-functional teams of engineers, designers, and project managers to deliver a user-centric web platform used by 1,500+ Yale websites.',
      'Led feature prioritization and roadmap development based on user research insights, balancing stakeholder needs with technical constraints.',
      'Managed product backlog in Jira, efficiently organizing user stories, bugs, and feature requests to maximize team productivity.',
      'Collaborated with multiple academic and administrative units across Yale to identify requirements, select and hire development vendors to contribute features back to the open-source platform.',
    ],
  },
  {
    title: 'User Experience Analyst 3',
    company: 'Yale University',
    location: 'New Haven, CT',
    period: 'July 2024 – Present',
    current: true,
    bullets: [
      'Mentored junior UX team members, providing guidance on user research methodologies and fostering professional growth.',
      'Led the LUX (lux.yale.edu) project as UX lead, facilitating wireframes, requirements gathering, and working with a complex data model.',
      'Created and maintained a comprehensive relational database of all 1,500 Yale websites to support data-informed decisions for platform migration.',
    ],
  },
  {
    title: 'User Experience Analyst 2',
    company: 'Yale University',
    location: 'New Haven, CT',
    period: 'September 2019 – July 2024',
    current: false,
    bullets: [
      'Designed the experience and visual design for Yale SSO and account management — used by the entire Yale community daily.',
      'Designed and delivered the Yale MFA Opt-In experience, reducing compromised NetID accounts to zero since launch.',
    ],
  },
  {
    title: 'UX Designer',
    company: 'Timex Group',
    location: 'Middlebury, CT',
    period: 'December 2018 – August 2019',
    current: false,
    bullets: [
      'Contributed to the launch of the Timex Family Connect smartwatch and companion app — 100,000+ downloads and 1,500+ reviews at 4.1/5 stars.',
      'Designed and implemented the iOS and Android application from conceptualization through launch.',
    ],
  },
]

const education = [
  {
    degree: 'M.S. Interactive Communications',
    concentration: 'UX Concentration',
    school: 'Quinnipiac University',
    year: '2019',
  },
  {
    degree: 'B.A. Game Design & Development',
    concentration: null,
    school: 'Quinnipiac University',
    year: '2017',
  },
]

const certifications = [
  {
    name: 'Nielsen Norman Group UX Certification',
    detail: 'UX Research Specialty',
    id: 'Certification ID: 1061640',
  },
]

const skills = [
  {
    category: 'Product Management',
    items: [
      'Feature Prioritization',
      'User Segmentation',
      'Data-Driven Decision Making',
      'Metrics Definition',
      'Vendor Management',
    ],
  },
  {
    category: 'UX Design',
    items: [
      'User Research',
      'Wireframing',
      'A/B Testing',
      'Usability Testing',
      'Information Architecture',
    ],
  },
  {
    category: 'Tools & Technologies',
    items: ['Figma', 'Jira & Confluence', 'HTML/CSS', 'JavaScript', 'Data Analysis'],
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display text-xl text-neutral-950 dark:text-white mb-6"
    >
      {/* Accent bar matches the case study H2 treatment */}
      <span aria-hidden="true" className="block w-6 h-0.5 bg-blue-600 dark:bg-blue-400 mb-2.5 rounded-full" />
      {children}
    </h2>
  )
}

function TimelineDot({ current }: { current?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={[
        'absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border-2 shrink-0',
        current
          ? 'bg-blue-600 border-blue-600 dark:bg-blue-400 dark:border-blue-400'
          : 'bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700',
      ].join(' ')}
    />
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-wide px-6 py-16 pb-24">

      {/* Page header — full width */}
      <header className="mb-12 pb-12 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-neutral-950 dark:text-white mb-2">
              Mike Tullo
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-5">
              Product Manager &amp; UX Designer
            </p>
            {/* Contact meta — <ul> so screen readers announce as a list — WCAG 1.3.1 */}
            <ul
              aria-label="Contact information"
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400 list-none"
            >
              <li className="flex items-center gap-1.5">
                <MapPin size={13} aria-hidden="true" />
                Connecticut
              </li>
              <li className="flex items-center gap-1.5">
                <Mail size={13} aria-hidden="true" />
                <a
                  href="mailto:mike@miketullo.com"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors underline underline-offset-2"
                >
                  mike@miketullo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Download — aria-label names the file format so screen reader
              users know what they're getting before activating — WCAG 2.4.4 */}
          <a
            href="/Mike-Tullo-Resume.pdf"
            download
            aria-label="Download resume as a PDF"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors self-start sm:self-auto shrink-0"
          >
            <Download size={15} aria-hidden="true" />
            Download PDF
          </a>
        </div>
      </header>

      {/* Two-column layout
          DOM order: experience first (primary), then the sidebar sections.
          This matches visual and reading order — WCAG 1.3.2.
          Right column is sticky so it stays in view while scrolling long experience. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-x-16 gap-y-14 items-start">

        {/* ── Left: Experience ─────────────────────────────────────── */}
        <section aria-labelledby="experience-heading">
          <SectionHeading id="experience-heading">Experience</SectionHeading>

          {/* <ol> — entries have meaningful chronological order — WCAG 1.3.1 */}
          <ol className="space-y-10 list-none">
            {experience.map((job) => (
              <li
                key={`${job.title}-${job.period}`}
                className="relative pl-5 border-l-2 border-neutral-200 dark:border-neutral-800"
              >
                <TimelineDot current={job.current} />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-semibold text-neutral-950 dark:text-white text-base leading-snug">
                      {job.title}
                      {job.current && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium align-middle">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {job.company} &mdash; {job.location}
                    </p>
                  </div>
                  <time className="text-sm text-neutral-500 shrink-0 sm:text-right tabular-nums">
                    {job.period}
                  </time>
                </div>

                <ul className="space-y-2 list-none">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed flex gap-2"
                    >
                      <span aria-hidden="true" className="text-blue-400 dark:text-blue-500 shrink-0 mt-0.5">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Right: Education, Certifications, Skills ─────────────── */}
        <div className="lg:sticky lg:top-24 lg:self-start space-y-10">

          {/* Education */}
          <section aria-labelledby="education-heading">
            <SectionHeading id="education-heading">Education</SectionHeading>
            <ol className="space-y-5 list-none">
              {education.map((edu) => (
                <li
                  key={edu.degree}
                  className="relative pl-5 border-l-2 border-neutral-200 dark:border-neutral-800"
                >
                  <TimelineDot />
                  <h3 className="font-semibold text-neutral-950 dark:text-white text-sm leading-snug">
                    {edu.degree}
                  </h3>
                  {edu.concentration && (
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">{edu.concentration}</p>
                  )}
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                    {edu.school}, {edu.year}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Certifications */}
          <section aria-labelledby="certifications-heading">
            <SectionHeading id="certifications-heading">Certifications</SectionHeading>
            <ul className="space-y-4 list-none">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="relative pl-5 border-l-2 border-neutral-200 dark:border-neutral-800"
                >
                  <TimelineDot />
                  <h3 className="font-semibold text-neutral-950 dark:text-white text-sm leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">{cert.detail}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">{cert.id}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills — <dl> is semantically correct for category → items — WCAG 1.3.1 */}
          <section aria-labelledby="skills-heading">
            <SectionHeading id="skills-heading">Skills</SectionHeading>
            <dl className="space-y-5">
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <dt className="text-xs font-semibold text-neutral-950 dark:text-white uppercase tracking-wide mb-2">
                    {category}
                  </dt>
                  <dd>
                    <ul aria-label={`${category} skills`} className="flex flex-wrap gap-1.5 list-none">
                      {items.map((skill) => (
                        <li key={skill}>
                          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

        </div>
      </div>
    </div>
  )
}
