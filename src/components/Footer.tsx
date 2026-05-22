export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">✝</span>
              <div>
                <span className="font-serif text-base font-semibold tracking-wide text-white">St. Benedict</span>
                <span className="block text-[10px] tracking-widest uppercase text-gold-300/60">Catholic Church</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              A faith-filled sacramental parish in Doniphan, Missouri, serving the community since 1859.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-300/70">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              <FooterLink href="#mass-times" label="Mass Times" />
              <FooterLink href="#sacraments" label="Sacraments" />
              <FooterLink href="#parish-life" label="Parish Life" />
              <FooterLink href="#history" label="History" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-300/70">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              <FooterLink href="https://bible.usccb.org/daily-bible-reading" label="Daily Readings" external />
              <FooterLink href="https://dioscg.org" label="Diocese Website" external />
              <FooterLink href="https://stbenedict8.flocknote.com/fundit/give" label="Give Online" external />
              <FooterLink href="https://www.facebook.com/stbenedictofdoniphan/" label="Facebook" external />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-300/70">Contact</h4>
            <div className="mt-4 space-y-2.5 text-sm text-white/50">
              <p>703 Pine Street</p>
              <p>Doniphan, MO 63935</p>
              <a href="tel:5733511107" className="block hover:text-white transition-colors">573-351-1107</a>
              <a href="mailto:office@stbenedictdoniphan.com" className="block hover:text-white transition-colors text-xs">office@stbenedictdoniphan.com</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">
            © {currentYear} St. Benedict Catholic Church, Doniphan, MO. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Diocese of Springfield–Cape Girardeau
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="text-sm text-white/50 hover:text-white transition-colors"
      >
        {label}
        {external && <span className="ml-1 text-[10px]">↗</span>}
      </a>
    </li>
  );
}
