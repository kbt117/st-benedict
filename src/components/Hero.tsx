export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — original church photo, CSS-enhanced */}
      <div className="absolute inset-0">
        <img
          src="https://www.stbenedictdoniphan.com/s/cc_images/teaserbox_951233564.jpg?t=1492722475"
          alt="St. Benedict Catholic Church"
          className="h-full w-full object-cover brightness-105 contrast-105 saturate-110 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/75 via-navy-800/55 to-burgundy-800/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block rounded-full border border-gold-300/40 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-gold-200 backdrop-blur-sm">
            Diocese of Springfield–Cape Girardeau
          </span>
        </div>

        <h1 className="animate-fade-in-up opacity-0 mt-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: '0.25s' }}>
          St. Benedict
          <span className="block mt-1 text-gold-200">Catholic Church</span>
        </h1>

        <p className="animate-fade-in-up opacity-0 mt-5 text-base text-white/80 sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.4s' }}>
          Doniphan, Missouri — A faith-filled sacramental parish, striving to bring God's word and loving presence to all.
        </p>

        <div className="animate-fade-in-up opacity-0 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: '0.55s' }}>
          <a
            href="#mass-times"
            className="w-full sm:w-auto rounded-xl bg-burgundy-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-burgundy-600 hover:shadow-xl hover:-translate-y-0.5"
          >
            View Mass Times
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
          >
            Visit Us
          </a>
        </div>

        {/* Scripture quote */}
        <div className="animate-fade-in-up opacity-0 mt-12 border-t border-white/10 pt-6" style={{ animationDelay: '0.7s' }}>
          <blockquote className="mx-auto max-w-xl text-sm italic text-white/60 leading-relaxed">
            "Go, therefore, and make disciples of all nations… And behold, I am with you always, until the end of the age."
            <cite className="mt-1 block not-italic text-gold-300/70 text-xs">— Matthew 28:19-20</cite>
          </blockquote>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#mass-times" className="text-white/40 hover:text-white/70 transition-colors">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
