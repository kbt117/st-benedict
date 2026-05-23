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
                  <svg className
