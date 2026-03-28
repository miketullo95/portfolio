'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const personal = [
  {
    emoji: '⚾',
    label: 'Baseball',
    description: "Lifelong Mets fan. Every season is an act of faith.",
  },
  {
    emoji: '🏒',
    label: 'College Hockey',
    description: 'Quinnipiac Bobcats hockey. Watched the program grow into one of the best in the country.',
  },
  {
    emoji: '👧',
    label: 'Family',
    description: 'Dad to an almost 2-year-old daughter. She keeps me humble and moving fast.',
  },
  {
    emoji: '🎮',
    label: 'World of Warcraft',
    description: 'Twenty-year player currently exploring addon development. UX for Azeroth.',
  },
]

export default function AboutContent() {
  return (
    <div>

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-intro-heading"
        className="mx-auto max-w-wide px-6 py-20 md:py-28"
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">

          <div className="flex-1">
            <motion.p
              className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4"
              {...fadeUp(0)}
            >
              About Me
            </motion.p>
            <motion.h1
              id="about-intro-heading"
              className="font-display text-4xl md:text-5xl text-neutral-950 dark:text-white leading-tight mb-6"
              {...fadeUp(0.1)}
            >
              Product thinker.<br />Game designer at heart.
            </motion.h1>
            <motion.p
              className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 max-w-prose"
              {...fadeUp(0.2)}
            >
              I&apos;m a Product Manager and UX Designer at Yale University, where I help build
              the digital experiences that students, faculty, and staff rely on every day.
              My path here started with a love of video games and took a few interesting
              turns along the way.
            </motion.p>
            <motion.p
              className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-prose"
              {...fadeUp(0.25)}
            >
              I care about making things that genuinely work for the people using them,
              not just things that look good in a Figma file.
            </motion.p>
          </div>

          <motion.div
            className="relative shrink-0 w-64 h-64 md:w-72 md:h-72"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              {/* TODO: Replace with updated photo when available */}
              <Image
                src="/images/me.jpg"
                alt="Mike Tullo, Product Manager and UX Designer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div aria-hidden="true" className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-blue-500/20 -z-10" />
          </motion.div>

        </div>
      </section>

      {/* ── My Story ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="story-heading"
        className="border-t border-neutral-200 dark:border-neutral-800 py-20"
      >
        <div className="mx-auto max-w-content px-6">
          <motion.div {...fadeUp(0)}>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">
              My Story
            </p>
            <h2
              id="story-heading"
              className="font-display text-3xl text-neutral-950 dark:text-white mb-10"
            >
              From game worlds to university systems
            </h2>
          </motion.div>

          <div className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <motion.p {...fadeUp(0.05)}>
              I went to school for Game Design at Quinnipiac University, drawn by how
              games can completely captivate players and give them a space to express
              their creativity in another world. What I fell in love with wasn&apos;t the
              engines or the code. It was the{' '}
              <strong className="font-semibold text-neutral-950 dark:text-white">storyboarding</strong>,
              the{' '}
              <strong className="font-semibold text-neutral-950 dark:text-white">user testing</strong>,
              and the{' '}
              <strong className="font-semibold text-neutral-950 dark:text-white">UI design</strong>
              {': the craft of thinking through how someone would actually experience something.'}
            </motion.p>

            <motion.p {...fadeUp(0.1)}>
              When I graduated, I went back for my master&apos;s degree, and that&apos;s where I
              discovered UX. It clicked immediately. It was everything I loved about game
              design, just in the context of the web. The same empathy for users, the
              same obsession with flow and friction, the same satisfaction when something
              finally just <em>works</em>.
            </motion.p>

            <motion.p {...fadeUp(0.15)}>
              My first role after graduation was at Timex, designing the Family Connect
              smartwatch experience. From there I joined Yale, where I&apos;ve spent the last
              several years growing from UX Analyst II to UX Analyst III to Product Manager.
              Each step has pushed me to think less about individual screens and more
              about the systems, people, and decisions behind them.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── What I care about ─────────────────────────────────────── */}
      <section
        aria-labelledby="values-heading"
        className="border-t border-neutral-200 dark:border-neutral-800 py-20 bg-neutral-50 dark:bg-neutral-950/50"
      >
        <div className="mx-auto max-w-content px-6">
          <motion.div {...fadeUp(0)}>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">
              What I Care About
            </p>
            <h2
              id="values-heading"
              className="font-display text-3xl text-neutral-950 dark:text-white mb-10"
            >
              Mission over metrics
            </h2>
          </motion.div>

          <div className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <motion.p {...fadeUp(0.05)}>
              Higher education UX interests me for a specific reason: it&apos;s not about
              shareholder value or extracting money from users. When I&apos;m working at Yale,
              I&apos;m working in the context of making experiences better for students,
              faculty, and staff: people who are there to learn, teach, and push the
              boundaries of what&apos;s known.
            </motion.p>

            <motion.p {...fadeUp(0.1)}>
              There&apos;s something meaningful about being a small part of that mission. Yale
              has been advancing education for over 300 years. When I remove friction from
              a content editing workflow or redesign an authentication flow, I&apos;m not
              moving a conversion metric. I&apos;m giving a department administrator back
              thirty minutes to focus on something that actually matters.
            </motion.p>

            <motion.p {...fadeUp(0.15)}>
              That&apos;s the work I want to do. Not design for its own sake, but design in
              service of something larger.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Beyond the screen ─────────────────────────────────────── */}
      <section
        aria-labelledby="personal-heading"
        className="border-t border-neutral-200 dark:border-neutral-800 py-20"
      >
        <div className="mx-auto max-w-wide px-6">
          <motion.div className="mb-10" {...fadeUp(0)}>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-3">
              Beyond the Screen
            </p>
            <h2
              id="personal-heading"
              className="font-display text-3xl text-neutral-950 dark:text-white"
            >
              When I&apos;m not designing
            </h2>
          </motion.div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none">
            {personal.map((item, i) => (
              <motion.li key={item.label} {...fadeUp(i * 0.08)}>
                <div className="h-full p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md transition-all duration-300">
                  {/* role="img" + aria-label gives the emoji meaning for screen readers — WCAG 1.1.1 */}
                  <span role="img" aria-label={item.label} className="text-3xl block mb-4">
                    {item.emoji}
                  </span>
                  <h3 className="font-semibold text-neutral-950 dark:text-white text-sm mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-cta-heading"
        className="border-t border-neutral-200 dark:border-neutral-800 py-20"
      >
        <motion.div
          className="mx-auto max-w-content px-6 text-center"
          {...fadeUp(0)}
        >
          <h2
            id="about-cta-heading"
            className="font-display text-3xl text-neutral-950 dark:text-white mb-4"
          >
            Want to see the work?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">
            Browse case studies from Yale and Timex, or get in touch if you want to talk shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/work"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-500 dark:hover:border-neutral-500 text-sm font-medium rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
