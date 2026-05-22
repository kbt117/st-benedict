export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-gradient-to-b from-gold-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://www.stbenedictdoniphan.com/s/cc_images/teaserbox_951028912.JPG?t=1666019054"
                alt="St. Benedict Catholic Church, Doniphan, Missouri"
                className="h-80 w-full object-cover sm:h-[28rem] brightness-110 contrast-105 saturate-110"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 overflow-hidden rounded-xl shadow-lg border-4 border-white hidden sm:block">
              <img
                src="https://www.stbenedictdoniphan.com/s/cc_images/teaserbox_951478396.JPG?t=1496024644"
                alt="Our Marian Grotto"
                className="h-44 w-52 object-cover brightness-110 contrast-105 saturate-115"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-burgundy-400">Welcome</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy-800 sm:text-4xl">Our Mission</h2>
            <div className="mt-4 h-1 w-16 rounded bg-gold-400" />

            <p className="mt-6 text-base leading-relaxed text-gray-600">
              St. Benedict Catholic Church is a parish of the Diocese of Springfield–Cape Girardeau 
              in southern Missouri. We are a faith-filled sacramental parish, striving to bring God's 
              word and loving presence to all. Through the Gospel of Jesus Christ and empowered by the 
              Holy Spirit, we seek to know, love, and serve God and others.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <span className="text-2xl">⛪</span>
                <h4 className="mt-2 font-semibold text-navy-700 text-sm">Est. 1859</h4>
                <p className="text-xs text-gray-500 mt-1">Over 165 years of faith</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <span className="text-2xl">🕊️</span>
                <h4 className="mt-2 font-semibold text-navy-700 text-sm">Parish Family</h4>
                <p className="text-xs text-gray-500 mt-1">~100 registered families</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <span className="text-2xl">🙏</span>
                <h4 className="mt-2 font-semibold text-navy-700 text-sm">Marian Grotto</h4>
                <p className="text-xs text-gray-500 mt-1">Built 2014, on parish grounds</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                <span className="text-2xl">🏛️</span>
                <h4 className="mt-2 font-semibold text-navy-700 text-sm">Parish Hall</h4>
                <p className="text-xs text-gray-500 mt-1">Seats 300, completed 2019</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-burgundy-50 border border-burgundy-100 p-5">
              <h4 className="font-semibold text-burgundy-700 text-sm flex items-center gap-2">
                <span>🔔</span> Returning to the Church?
              </h4>
              <p className="mt-2 text-sm text-burgundy-600/80 leading-relaxed">
                We welcome you back with open arms. The best way to begin is simply to come to Mass. 
                You can also schedule an appointment with one of our priests by calling 
                <a href="tel:5733511107" className="font-semibold underline decoration-burgundy-300 hover:text-burgundy-800"> 573-351-1107</a>.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="http://www.catholicscomehome.org" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-3 py-1 text-xs font-medium text-burgundy-600 border border-burgundy-200 hover:bg-burgundy-100 transition-colors">Catholics Come Home</a>
                <a href="https://www.wordonfire.org/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-3 py-1 text-xs font-medium text-burgundy-600 border border-burgundy-200 hover:bg-burgundy-100 transition-colors">Word on Fire</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
