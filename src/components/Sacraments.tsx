const sacraments = [
  {
    icon: '💧',
    title: 'Baptism',
    description:
      'Registered parishioners attending Mass regularly may schedule a meeting with a priest. No date should be set before your meeting.',
  },
  {
    icon: '💍',
    title: 'Marriage',
    description:
      'Requires a six-month preparation period, regular Mass attendance, parish registration, and Marriage Preparation classes. Meet with the priest before setting a date.',
  },
  {
    icon: '✝️',
    title: 'Reconciliation',
    description:
      'Saturday 5:15–5:45 PM and Sunday 8:15–8:45 AM before Mass. Appointments are also available by request.',
  },
  {
    icon: '🙏',
    title: 'Anointing of the Sick',
    description:
      'This sacrament offers special grace to the sick and can be repeated as needed — it is not only for those near death.',
  },
  {
    icon: '📖',
    title: 'OCIA',
    description:
      'The Order of Christian Initiation for Adults is for those interested in joining the Catholic Church. Contact the pastor to begin.',
  },
  {
    icon: '🕯️',
    title: 'Mass Intentions',
    description:
      'To have a Mass celebrated for a living or deceased loved one, place your intention in an envelope at Mass or contact the Parish Office.',
  },
];

export default function Sacraments() {
  return (
    <section id="sacraments" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-burgundy-400">How Do I…?</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy-800 sm:text-4xl">Sacraments &amp; Services</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold-400" />
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm">
            For all sacramental inquiries, please contact the Parish Office at{' '}
            <a href="tel:5733511107" className="font-semibold text-burgundy-500 hover:text-burgundy-700 underline decoration-burgundy-300">
              573-351-1107
            </a>
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sacraments.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50/50 to-white p-6 transition-all hover:shadow-lg hover:border-burgundy-100 hover:-translate-y-1"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-navy-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
