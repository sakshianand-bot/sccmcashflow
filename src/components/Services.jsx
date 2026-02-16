import React from 'react';

const Services = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 min-h-screen flex items-center font-serif">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Vertical Text & Main Heading */}
          <div className="md:col-span-4 flex flex-col justify-between h-full py-8">
            <div className="relative">
              {/* Rotated Sidebar Text */}
              <span className="absolute -left-12 top-24 -rotate-90 origin-left text-blue-300 uppercase tracking-widest text-xs font-sans whitespace-nowrap">
                Aesthetic & Elegant
              </span>
              
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight mb-12">
                SIERRA BNB <br /> ACADEMY <br /> SERVICES
              </h2>
            </div>

            <div className="mt-auto">
              <p className="text-blue-900/80 text-sm leading-relaxed max-w-xs">
                We empower entrepreneurs to create and scale turnkey short-term rental businesses.
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN: The Arched Image (The "Hero" of the layout) */}
          <div className="md:col-span-4 flex justify-center relative">
            {/* The Offset Frame Effect */}
            <div className="relative w-full max-w-[320px] aspect-[2/3]">
               {/* Background offset shape */}
               <div className="absolute inset-0 border-[1px] border-blue-900 rounded-t-[150px] rounded-b-[20px] translate-x-4 translate-y-4"></div>
               
               {/* Main Image Container */}
               <div className="relative h-full w-full overflow-hidden rounded-t-[150px] rounded-b-[20px] shadow-2xl">
                <img 
                  src="/bilderboken-rlwE8f8anOc-unsplash.webp" 
                  alt="Luxury Rental" 
                  className="w-full h-full object-cover"
                />
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Service Details */}
          <div className="md:col-span-4 space-y-12">
            
            {/* Service Item 1 */}
            <div className="group">
              <h3 className="text-xl font-bold text-blue-900 mb-2 uppercase tracking-wide">
                RENTAL HOME Getaway
              </h3>
              <p className="text-blue-900/70 text-sm leading-relaxed mb-4">
                We host short term Rental guests on the vacations in beautiful areas such as Lake Tahoe, Colorado, Florida and San Diego.
              </p>
              <div className="w-12 h-[1px] bg-blue-300 transition-all group-hover:w-24"></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-6">
              <a href="https://www.airbnb.co.in/s/homes" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-8 py-3 rounded-sm hover:bg-blue-800 transition-all uppercase text-xs tracking-widest font-sans inline-block text-center">
                Learn More
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-blue-900 text-blue-900 px-8 py-3 rounded-sm hover:bg-white transition-all uppercase text-xs tracking-widest font-sans"
              >
                Contact
              </button>
            </div>

          </div>
        </div>

        {/* Footer style element from template */}
        <div className="mt-20 border-t border-blue-300/30 pt-4 flex justify-end">
          <span className="text-[10px] text-blue-300 uppercase tracking-[0.3em]">Sierra Academy © 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Services;