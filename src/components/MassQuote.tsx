export default function MassQuote() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-burgundy-700 to-burgundy-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-burgundy-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 text-center">
        {/* Cross icon */}
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-300/30 bg-white/10 backdrop-blur-sm mb-6">
          <span className="text-gold-200 text-2xl">✝</span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-gold-200 sm:text-2xl">
          The Holy Sacrifice of the Mass
        </h3>

        <blockquote className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 italic">
          "The Sacrifice of the Mass is and ought to be considered one and the same Sacrifice as that of 
          the cross, for the victim is one and the same, namely, Christ our Lord, who offered Himself, 
          once only, a bloody Sacrifice on the altar of the cross. The bloody and unbloody victim are 
          not two, but one victim only, whose Sacrifice is daily renewed in the Eucharist, in obedience 
          to the command of our Lord: <span className="text-[#AD494A] not-italic font-semibold">Do this for a commemoration of me.</span>"
        </blockquote>

        <cite className="mt-5 block text-sm not-italic text-gold-300/60">
          — Catechism of the Council of Trent
        </cite>
      </div>
    </section>
  );
}
