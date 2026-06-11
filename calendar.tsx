import { useEffect } from 'react';

export default function Calendar() {
  useEffect(() => {
    // Only load the Elfsight script once
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="calendar" className="py-20 sm:py-28 bg-gradient-to-b from-[#f5efe4] to-[#faf7f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-burgundy-400">Upcoming</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy-800 sm:text-4xl">Parish Calendar</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold-400" />
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm">
            Stay up to date with parish events, holy days, and community gatherings.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-amber-100/60 bg-white p-4 sm:p-6 shadow-sm overflow-hidden">
          <div className="elfsight-app-d6c2cc88-2656-410e-a9b8-22bd67855510" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
