import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Mass Times', href: '#mass-times' },
  { label: 'About', href: '#about' },
  { label: 'Sacraments', href: '#sacraments' },
  { label: 'Parish Life', href: '#parish-life' },
  { label: 'History', href: '#history' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf7f2]/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo / Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="text-2xl">✝</span>
            <div className="leading-tight">
              <span
                className={`font-serif text-sm font-semibold tracking-wide transition-colors sm:text-base ${
                  scrolled ? 'text-burgundy-700' : 'text-white'
                }`}
              >
                St. Benedict
              </span>
              <span
                className={`block text-[10px] tracking-widest uppercase transition-colors ${
                  scrolled ? 'text-burgundy-400' : 'text-gold-200'
                }`}
              >
                Catholic Church
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-navy-600 hover:bg-burgundy-50 hover:text-burgundy-600'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://stbenedict8.flocknote.com/fundit/give"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 rounded-lg bg-gold-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gold-500 hover:shadow-md"
            >
              Give Online
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden rounded-lg p-2 transition-colors ${
              scrolled ? 'text-navy-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'
        } bg-[#faf7f2]/95 backdrop-blur-md`}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-burgundy-50 hover:text-burgundy-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://stbenedict8.flocknote.com/fundit/give"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg bg-gold-400 px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Give Online
          </a>
        </div>
      </div>
    </nav>
  );
}
