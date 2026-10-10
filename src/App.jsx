import { HERO_BLUR } from './heroBlur.js'

// The address the "Get in touch" button opens. Note this is .com, not the .org
// the site runs on: the mail for this project is on the .com domain.
const CONTACT_EMAIL = 'julia@3okefordscan.com'

// Everything the QR code points at. Kept here so the link, the printed URL and
// the regenerated QR can never drift apart.
const NEXT_STEPS_URL = 'https://www.nebriefing.org/peb'
const NEXT_STEPS_LABEL = 'www.nebriefing.org/peb'

const NEXT_STEPS = [
  {
    title: 'Support the Parliamentary Call',
    body: 'Guidance on encouraging your MP to support a televised national briefing.',
  },
  {
    title: 'Help bring the film to more communities',
    body: 'Find out how to host a screening in your area, workplace or organisation.',
  },
  {
    title: 'Share your response',
    body: 'Complete the University of Bath questionnaires before and after the film to help build understanding of how people respond to this information.',
  },
  {
    title: 'Stay connected',
    body: 'Receive updates from the National Emergency Briefing and explore further practical next steps.',
  },
]

function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden text-white">
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
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"
      />

      <div className="relative mx-auto flex min-h-dvh max-w-3xl flex-col px-6 py-10 sm:py-14">
        <header>
          <a href="/" className="text-lg font-extrabold tracking-tight text-white no-underline drop-shadow">
            3OkefordsCan
          </a>
        </header>

        <div className="flex flex-1 flex-col justify-center py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-balance drop-shadow-md sm:text-5xl">
            Thank you to everyone who attended
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow sm:text-xl">
            The 3OkefordsCan screening of the People’s Emergency Briefing at
            Child Okeford Community Centre. Here is the follow up information.
          </p>

          <a
            href="#next"
            className="group mt-10 inline-flex w-fit items-center gap-2 text-base font-semibold text-white no-underline"
          >
            What you can do next
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

function NextSteps() {
  return (
    <section id="next" className="scroll-mt-4 bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
          What you can do next
        </h2>

        <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:flex sm:items-center sm:gap-8 sm:p-8">
          <img
            src="/qr-peb.svg"
            alt={`QR code linking to ${NEXT_STEPS_LABEL}`}
            width="176"
            height="176"
            className="mx-auto h-44 w-44 shrink-0 sm:mx-0"
          />
          <div className="mt-6 text-center sm:mt-0 sm:text-left">
            <p className="text-lg font-semibold">
              Open your camera and point it at the QR code to begin.
            </p>
            <p className="mt-2 text-stone-600">
              Already reading this on your phone? Just tap the button.
            </p>
            <a
              href={NEXT_STEPS_URL}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-teal-800 px-6 py-3 text-base font-semibold text-white no-underline shadow-sm transition hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              {NEXT_STEPS_LABEL}
            </a>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {NEXT_STEPS.map((step) => (
            <li
              key={step.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-stone-600">{step.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 border-t border-stone-200 pt-10">
          <p className="text-lg text-stone-600">
            Any questions about the screening?
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-stone-900 px-7 py-3.5 text-base font-semibold text-white no-underline shadow-sm transition hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            Get in touch
          </a>
        </div>
      </div>

      <footer className="border-t border-stone-200">
        <div className="mx-auto max-w-3xl px-6 py-6 text-sm text-stone-500">
          3OkefordsCan
        </div>
      </footer>
    </section>
  )
}

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <NextSteps />
    </div>
  )
}
