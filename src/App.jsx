// The address the "Get in touch" button opens. Replace with the real one.
const CONTACT_EMAIL = 'info@3okefordscan.org'

export default function App() {
  return (
    <div className="min-h-dvh bg-stone-50 font-sans text-stone-900 antialiased">
      <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-6 py-12 sm:py-20">
        <header>
          <a href="/" className="inline-flex items-baseline gap-2 no-underline">
            <span className="text-lg font-extrabold tracking-tight text-teal-800">
              3 Okeford
            </span>
            <span className="text-lg font-light tracking-[0.2em] text-stone-500">
              SCAN
            </span>
          </a>
        </header>

        <main className="flex flex-1 flex-col justify-center py-14 sm:py-20">
          <p className="mb-5 inline-flex w-fit items-center rounded-full bg-teal-800/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-900">
            Date change
          </p>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
            The screening of{' '}
            <span className="text-teal-800">Peoples Emergency Briefing</span> has
            moved
          </h1>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 shadow-sm sm:grid-cols-2">
            <div className="bg-white px-6 py-6">
              <dt className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                New date and time
              </dt>
              <dd className="mt-2 text-xl font-bold sm:text-2xl">
                2.30pm, 10 October 2026
              </dd>
            </div>
            <div className="bg-white px-6 py-6">
              <dt className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Venue
              </dt>
              <dd className="mt-2 text-xl font-bold sm:text-2xl">
                Child Okeford Community Centre
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-lg text-stone-600">More details to follow.</p>

          <div className="mt-10">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-full bg-teal-800 px-7 py-3.5 text-base font-semibold text-white no-underline shadow-sm transition hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              Get in touch
            </a>
          </div>
        </main>

        <footer className="border-t border-stone-200 pt-6 text-sm text-stone-500">
          3 Okeford SCAN
        </footer>
      </div>
    </div>
  )
}
