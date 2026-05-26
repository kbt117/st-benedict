import type { ReactNode } from 'react';

export default function Contact() {

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-burgundy-400">Get In Touch</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy-800 sm:text-4xl">Contact Us</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold-400" />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact info */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-navy-800">St. Benedict Catholic Church</h3>
            <p className="mt-2 text-sm text-gray-500">We'd love to hear from you. Whether you're new to the parish, returning, or just visiting — you are welcome here.</p>

            <div className="mt-8 space-y-5">
              <ContactRow
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                }
                label="Address"
                value="703 Pine Street, Doniphan, MO 63935"
                subValue="Mailing: P.O. Box 595, Doniphan, MO 63935"
              />
              <ContactRow
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                }
                label="Phone"
                value="573-351-1107"
                href="tel:5733511107"
              />
              <ContactRow
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                }
                label="Email"
                value="office@stbenedictdoniphan.com"
                href="mailto:office@stbenedictdoniphan.com"
              />
              <ContactRow
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                label="Pastor Phone"
                value="573-785-9635"
                href="tel:5737859635"
              />
            </div>

            {/* Map embed */}
            <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <iframe
                title="St. Benedict Catholic Church Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200!2d-90.823!3d36.621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d7e8e8e8e8e8e8%3A0x0!2s703+Pine+St%2C+Doniphan%2C+MO+63935!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-6">
            {/* Stained glass image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-100/60">
              <img
                src="/st-benedict/images/stained-glass.jpg"
                alt="Stained glass window at St. Benedict Catholic Church"
                className="w-full h-72 sm:h-96 object-cover brightness-105 contrast-105 saturate-110"
              />
            </div>

            {/* Become a Parishioner */}
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
              <h4 className="font-semibold text-navy-800 text-sm flex items-center gap-2">
                <span>📋</span> Become a Parishioner
              </h4>
              <p className="mt-2 text-sm text-navy-600/80 leading-relaxed">
                Registration lets us know you're a member of our parish family. Contact the office or pick up 
                a form in the church vestibule. You are very important to us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  subValue,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  subValue?: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-burgundy-50 text-burgundy-500">
        {icon}
      </div>
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{label}</span>
        {href ? (
          <a href={href} className="block text-sm font-medium text-navy-700 hover:text-burgundy-600 transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-navy-700">{value}</p>
        )}
        {subValue && <p className="text-xs text-gray-400 mt-0.5">{subValue}</p>}
      </div>
    </div>
  );
}
