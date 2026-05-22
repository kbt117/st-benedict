export default function MassTimes() {
  return (
    <section id="mass-times" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-burgundy-400">Schedule</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy-800 sm:text-4xl">Mass &amp; Confession Times</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold-400" />
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Weekend Masses */}
          <div className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-burgundy-50 to-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy-500 text-white shadow-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-navy-800">Weekend Masses</h3>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-white/80 px-3 py-2">
                <span className="text-sm font-medium text-navy-600">Saturday</span>
                <span className="text-sm font-bold text-burgundy-600">6:00 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/80 px-3 py-2">
                <span className="text-sm font-medium text-navy-600">Sunday</span>
                <span className="text-sm font-bold text-burgundy-600">9:00 AM</span>
              </div>
            </div>
          </div>

          {/* Weekday Masses */}
          <div className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-navy-50 to-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500 text-white shadow-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-navy-800">Weekday Masses</h3>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-white/80 px-3 py-2">
                <span className="text-sm font-medium text-navy-600">Tue – Fri</span>
                <span className="text-sm font-bold text-navy-700">9:00 AM</span>
              </div>
              <p className="text-xs text-gray-500 italic mt-1 px-1">Verify with Parish Office</p>
            </div>
          </div>

          {/* Confession */}
          <div className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-gold-50 to-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 text-white shadow-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-navy-800">Reconciliation</h3>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-white/80 px-3 py-2">
                <span className="text-sm font-medium text-navy-600">Saturday</span>
                <span className="text-sm font-bold text-gold-600">5:15–5:45 PM</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/80 px-3 py-2">
                <span className="text-sm font-medium text-navy-600">Sunday</span>
                <span className="text-sm font-bold text-gold-600">8:15–8:45 AM</span>
              </div>
            </div>
          </div>

          {/* Special Schedule */}
          <div className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500 text-white shadow-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-navy-800">Special Days</h3>
            <div className="mt-3 space-y-2">
              <div className="rounded-lg bg-white/80 px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-500">First Friday</span>
                <p className="text-sm text-navy-600 mt-0.5">Adoration 5 PM · Mass 6 PM</p>
              </div>
              <div className="rounded-lg bg-white/80 px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-500">Third Thursday</span>
                <p className="text-sm text-navy-600 mt-0.5">Mass 9 AM · Adoration til 11 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
