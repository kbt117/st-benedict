export default function History() {
  return (
    <section id="history" className="py-20 sm:py-28 bg-gradient-to-b from-gold-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-burgundy-400">Our Story</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy-800 sm:text-4xl">Parish History</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold-400" />
        </div>

        {/* Timeline */}
        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-burgundy-300 via-gold-300 to-navy-300 hidden md:block md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10 md:space-y-16">
            <TimelineItem
              year="1857–1859"
              title="The Irish Wilderness"
              side="left"
              description="Father John Hogan, a St. Louis diocesan priest, led Irish immigrants to settle in southeastern Missouri. By spring 1859, 200 Irish families had established the settlement, and a church named in honor of St. Benedict was built."
            />
            <TimelineItem
              year="1860s"
              title="Civil War"
              side="right"
              description='The Civil War led to the demise of the settlement as the area was overrun by the outlaw band of "Missouri Bushwhackers." The community scattered and the original church was lost.'
            />
            <TimelineItem
              year="1878"
              title="A New Beginning"
              side="left"
              description="Michael and Annie Stack donated land for a new St. Benedict Church to be built near Doniphan on what is now Ballpark Road — the site of the current St. Benedict Cemetery."
            />
            <TimelineItem
              year="1889"
              title="Church in Doniphan"
              side="right"
              description="A new St. Benedict Church was completed in the town of Doniphan itself. Mission chapels were built at Beaver Dam, Oxly, and Pulaski to serve the growing Catholic population."
            />
            <TimelineItem
              year="1949"
              title="Present Church Dedicated"
              side="left"
              description="As the parish outgrew its frame church, Archbishop Ritter approved a new structure. The current St. Benedict Church was dedicated in 1949, followed by a new rectory in 1953."
            />
            <TimelineItem
              year="2014–2019"
              title="Modern Additions"
              side="right"
              description='The Marian Grotto was built in 2014 in memory of Dr. Jack G. Hunt. The "Dr. Jack G. and Shirley J. Hunt Parish Hall," seating over 300, was completed in 2019.'
            />
            <TimelineItem
              year="Today"
              title="A Living Parish"
              side="left"
              description="St. Benedict continues its missionary labor with Father Allen Kirchner and Father Samson Dorival attending to the faithful of Doniphan, with roughly 100 families in the parish."
            />
          </div>
        </div>

        {/* Patron Saint callout */}
        <div className="mt-20 rounded-2xl bg-gradient-to-br from-burgundy-600 to-burgundy-800 p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-300">Our Patron Saint</span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
              St. Benedict of Nursia
            </h3>
            <p className="mt-1 text-sm text-gold-200/70">c. 480 – c. 547 · Feast Day: July 11</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Born into a distinguished family in Nursia, Italy, Benedict fled the vices of Rome to live 
              as a hermit. He eventually founded the great monastery at Monte Cassino around 525 and 
              wrote his famous Rule — prescribing a balanced life of prayer, study, and work. His Rule 
              became the foundation of Western monasticism and influenced the spiritual life of the Church 
              for centuries. Benedictine charity has always shown concern for the people in the surrounding 
              countryside — a spirit that lives on in our parish today.
            </p>
            <p className="mt-3 text-xs text-white/50">
              Patron of civil engineers, farmers, Europe, monks, schoolchildren, and spelunkers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  year,
  title,
  description,
  side,
}: {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}) {
  return (
    <div className={`relative flex flex-col md:flex-row md:items-start ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Dot */}
      <div className="absolute left-4 top-1.5 h-3 w-3 rounded-full border-2 border-burgundy-400 bg-white z-10 hidden md:block md:left-1/2 md:-translate-x-1/2" />

      {/* Content */}
      <div className={`pl-10 md:pl-0 md:w-1/2 ${side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <span className="inline-block rounded-full bg-burgundy-50 px-3 py-1 text-xs font-bold text-burgundy-600 mb-2">
          {year}
        </span>
        <h4 className="font-serif text-lg font-semibold text-navy-800">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}
