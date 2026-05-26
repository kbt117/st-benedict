export default function History() {
  return (
    <section id="history" className="py-20 sm:py-28 bg-gradient-to-b from-[#f5efe4] to-[#faf7f2]">
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
        <div className="mt-20 rounded-2xl bg-gradient-to-br from-burgundy-600 to-burgundy-800 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-72 lg:w-80 shrink-0">
              <img
                src="https://www.scross.co.za/wp-content/uploads/2025/06/St-Benedict-of-Nursia.jpg"
                alt="St. Benedict of Nursia"
                className="h-64 w-full object-cover object-top md:h-full md:rounded-l-2xl"
              />
            </div>
            {/* Text */}
            <div className="relative p-8 sm:p-10 flex-1">
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
        {/* The St. Benedict Medal */}
        <div className="mt-10 rounded-2xl border border-amber-200/60 bg-gradient-to-br from-[#fffdf9] to-[#f5efe4] p-8 sm:p-10">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-burgundy-400">Sacramental</span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-navy-800 sm:text-3xl">The St. Benedict Medal</h3>
            <div className="mx-auto mt-3 h-1 w-16 rounded bg-gold-400" />
          </div>
          {/* Medal images */}
          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
            <div className="text-center">
              <div className="inline-block rounded-full bg-white p-3 shadow-md border border-amber-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Saint_Benedict_Medal_icon.svg/1280px-Saint_Benedict_Medal_icon.svg.png"
                  alt="St. Benedict Medal — Front (Obverse)"
                  className="h-44 w-44 sm:h-52 sm:w-52 object-contain"
                />
              </div>
              <p className="mt-3 text-xs font-semibold text-navy-700 uppercase tracking-wider">Front (Obverse)</p>
            </div>
            <div className="text-center">
              <div className="inline-block rounded-full bg-white p-3 shadow-md border border-amber-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/St_Benedict_Medal_icon.svg/1280px-St_Benedict_Medal_icon.svg.png"
                  alt="St. Benedict Medal — Back (Reverse)"
                  className="h-44 w-44 sm:h-52 sm:w-52 object-contain"
                />
              </div>
              <p className="mt-3 text-xs font-semibold text-navy-700 uppercase tracking-wider">Back (Reverse)</p>
            </div>
          </div>
          {/* Description */}
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-sm leading-relaxed text-gray-600">
              The St. Benedict Medal is one of the oldest and most honored medals in the Catholic Church. 
              Its origins trace back to the early Middle Ages, rooted in St. Benedict's deep veneration of the Holy Cross 
              and the power he exercised over the forces of evil. The meaning of the inscriptions was lost for 
              centuries until a manuscript dating to 1415 was discovered at Metten Abbey in Bavaria around 1647, 
              revealing the Latin prayers behind each letter. The medal's modern design was struck in 1880 to 
              commemorate the 1,400th anniversary of St. Benedict's birth at Monte Cassino.
            </p>
          </div>
          {/* Inscriptions grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Front */}
            <div className="rounded-xl bg-white/80 border border-amber-100/60 p-6">
              <h4 className="font-serif text-base font-semibold text-navy-800 flex items-center gap-2">
                <span className="text-lg">🪙</span> The Front — St. Benedict
              </h4>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                The front depicts St. Benedict holding a cross in his right hand and his Holy Rule in the left. 
                To his right, a cup from which a serpent emerges — representing the poisoned wine that shattered 
                when he blessed it. To his left, a raven carrying away a loaf of poisoned bread at his command.
              </p>
              <div className="mt-4 rounded-lg bg-burgundy-50/50 border border-burgundy-100/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-burgundy-500 mb-2">Around the margin</p>
                <p className="text-sm text-navy-700 italic">
                  "Eius in obitu nostro praesentia muniamur"
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  — May we be strengthened by his presence in the hour of our death.
                </p>
              </div>
            </div>
            {/* Back */}
            <div className="rounded-xl bg-white/80 border border-amber-100/60 p-6">
              <h4 className="font-serif text-base font-semibold text-navy-800 flex items-center gap-2">
                <span className="text-lg">✝️</span> The Back — The Cross &amp; Exorcism
              </h4>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                The reverse bears a large cross with the word <strong>PAX</strong> (Peace) — the Benedictine motto — at the top. 
                Every letter is an abbreviation of a powerful Latin prayer of protection and exorcism against evil.
              </p>
              <div className="mt-4 space-y-3">
                <InscriptionRow
                  letters="C.S.P.B."
                  latin="Crux Sancti Patris Benedicti"
                  english="The Cross of our Holy Father Benedict"
                />
                <InscriptionRow
                  letters="C.S.S.M.L."
                  latin="Crux Sacra Sit Mihi Lux"
                  english="May the Holy Cross be my light"
                />
                <InscriptionRow
                  letters="N.D.S.M.D."
                  latin="Non Draco Sit Mihi Dux"
                  english="Let not the dragon be my guide"
                />
                <InscriptionRow
                  letters="V.R.S.N.S.M.V."
                  latin="Vade Retro Satana, Nunquam Suade Mihi Vana"
                  english="Begone Satan! Never tempt me with your vanities"
                />
                <InscriptionRow
                  letters="S.M.Q.L.I.V.B."
                  latin="Sunt Mala Quae Libas, Ipse Venena Bibas"
                  english="What you offer me is evil — drink the poison yourself"
                />
              </div>
            </div>
          </div>
          {/* Usage note */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
              The medal may be worn around the neck, attached to a rosary, placed in the home, or carried in one's pocket. 
              Once blessed by a priest, it is a powerful sacramental — a continual silent prayer of protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function InscriptionRow({ letters, latin, english }: { letters: string; latin: string; english: string }) {
  return (
    <div className="rounded-lg bg-burgundy-50/50 border border-burgundy-100/50 px-3 py-2.5">
      <span className="text-xs font-bold text-burgundy-600 font-mono tracking-wide">{letters}</span>
      <p className="text-xs text-navy-700 italic mt-0.5">{latin}</p>
      <p className="text-[11px] text-gray-500">{english}</p>
    </div>
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
