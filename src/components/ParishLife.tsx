export default function ParishLife() {
  return (
    <section id="parish-life" className="py-20 sm:py-28 bg-gradient-to-b from-navy-800 to-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-300">Community</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">Parish Life</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold-400" />
        </div>

        {/* Content grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Staff */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8">
            <h3 className="font-serif text-xl font-semibold text-gold-200 flex items-center gap-2">
              <span className="text-2xl">👥</span> Our Staff
            </h3>
            <div className="mt-5 space-y-4">
              <StaffMember role="Administrator" name="Father Allen Kirchner" />
              <StaffMember role="Associate Pastor" name="Father Samson Dorival" />
              <StaffMember role="Secretary" name="" />
              <StaffMember role="PSR Director" name="Mrs. Terri Wright" />
            </div>
          </div>

          {/* Programs & Faith Formation */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8">
            <h3 className="font-serif text-xl font-semibold text-gold-200 flex items-center gap-2">
              <span className="text-2xl">📚</span> Faith Formation
            </h3>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                <h4 className="font-semibold text-white text-sm">Parish School of Religion (PSR)</h4>
                <p className="mt-1 text-sm text-white/60">Youth religious education program. Contact Terri Wright for info.</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                <h4 className="font-semibold text-white text-sm">OCIA (formerly RCIA)</h4>
                <p className="mt-1 text-sm text-white/60">For adults interested in joining the Catholic Church.</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                <h4 className="font-semibold text-white text-sm">Grow + Go</h4>
                <p className="mt-1 text-sm text-white/60">Scripture insights helping us grow as disciples and go evangelize, using the Sunday readings.</p>
              </div>
            </div>
          </div>

          {/* Parish Hall & Giving */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://www.stbenedictdoniphan.com/s/cc_images/teaserbox_955959472.jpg?t=1673558628"
                alt="Dr. Jack G. and Shirley J. Hunt Parish Hall"
                className="h-48 w-full object-cover brightness-110 contrast-105 saturate-110"
              />
              <div className="bg-white/5 backdrop-blur-sm p-5">
                <h3 className="font-serif text-lg font-semibold text-gold-200">Parish Hall</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  The "Dr. Jack G. &amp; Shirley J. Hunt Parish Hall" seats 300+ with a stage and ample parking. 
                  Available for community, civic, and charity events. Contact the office for info.
                </p>
              </div>
            </div>

            {/* Quick action - Give Online */}
            <div className="rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-300/10 border border-gold-400/30 p-6 text-center">
              <span className="text-3xl">💛</span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-gold-200">Support Our Parish</h3>
              <p className="mt-2 text-sm text-white/60">Online giving is easy, secure, and requires no login.</p>
              <a
                href="https://stbenedict8.flocknote.com/fundit/give"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-xl bg-gold-400 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gold-500 hover:shadow-md"
              >
                Give Online
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <QuickLink href="https://bible.usccb.org/daily-bible-reading" label="Daily Readings" />
          <QuickLink href="http://www.usccb.org/bible/books-of-the-bible/index.cfm" label="Bible Online" />
          <QuickLink href="http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/index.cfm" label="How to Pray the Rosary" />
          <QuickLink href="https://dioscg.org" label="Diocese Website" />
          <QuickLink href="https://www.facebook.com/stbenedictofdoniphan/" label="Facebook" />
          <QuickLink href="http://stbenedict8.flocknote.com" label="Flocknote Updates" />
        </div>
      </div>
    </section>
  );
}

function StaffMember({ role, name }: { role: string; name: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-300/70">{role}</span>
      <span className="text-sm text-white/80">{name}</span>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white hover:border-white/30"
    >
      {label} ↗
    </a>
  );
}
