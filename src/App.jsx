import { HERO_BLUR } from './heroBlur.js'

// The address the "Get in touch" button opens. Note this is .com, not the .org
// the site runs on: the mail for this project is on the .com domain.
const CONTACT_EMAIL = 'julia@3okefordscan.com'

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-hidden font-sans text-white antialiased">
      {/* Blurred stand-in, visible only for the moment before the photo paints. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
        style={{ backgroundImage: `url(${HERO_BLUR})` }}
      />

      <img
        src="/hero-1600.jpg"
        srcSet="/hero-900.jpg 900w, /hero-1600.jpg 1600w, /hero-2400.jpg 2400w"
        sizes="100vw"
        alt="The view north from Hambledon Hill across the Blackmore Vale, with parched summer grass in the foreground."
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Scrim: keeps the text readable wherever the photo crops to. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25"
      />

      <div className="relative mx-auto flex min-h-dvh max-w-3xl flex-col px-6 py-10 sm:py-14">
        <header>
          <a href="/" className="inline-flex items-baseline gap-2 no-underline">
            <span className="text-lg font-extrabold tracking-tight text-white drop-shadow">
              3 Okeford
            </span>
            <span className="text-lg font-light tracking-[0.2em] text-white/70">
              SCAN
            </span>
          </a>
        </header>

        <main className="flex flex-1 flex-col justify-center py-12 sm:py-16">
          <p className="mb-5 inline-flex w-fit items-center rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            Date change
          </p>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-balance drop-shadow-md sm:text-5xl">
            The screening of Peoples Emergency Briefing has moved
          </h1>

          <dl className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/15 shadow-lg backdrop-blur-md sm:grid-cols-2">
            <div className="px-6 py-6 sm:border-r sm:border-white/20">
              <dt className="text-xs font-semibold uppercase tracking-widest text-white/70">
                New date and time
              </dt>
              <dd className="mt-2 text-xl font-bold sm:text-2xl">
                2.30pm, 10 October 2026
              </dd>
            </div>
            <div className="border-t border-white/20 px-6 py-6 sm:border-t-0">
              <dt className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Venue
              </dt>
              <dd className="mt-2 text-xl font-bold sm:text-2xl">
                Child Okeford Community Centre
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-lg text-white/85 drop-shadow">
            More details to follow.
          </p>

          <div className="mt-9">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-stone-900 no-underline shadow-lg transition hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in touch
            </a>
          </div>
        </main>

        <footer className="border-t border-white/20 pt-6 text-sm text-white/70">
          3 Okeford SCAN
        </footer>
      </div>
    </div>
  )
}
