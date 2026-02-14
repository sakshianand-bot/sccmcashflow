import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[80vh] bg-white flex items-center overflow-hidden font-serif pt-20">
      {/* Decorative Editorial Lines */}
      <div className="absolute inset-0 border-l-[1px] border-blue-100 ml-12 md:ml-24 pointer-events-none" />
      <div className="absolute inset-0 border-t-[1px] border-blue-100 mt-20 pointer-events-none" />
      
      {/* Top Right Label */}
      <div className="absolute top-8 right-8 text-[10px] tracking-[0.4em] text-blue-300 uppercase font-sans">
        Sierra BNB Academy
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: The Arch Image */}
          <div className="relative w-full md:w-5/12">
            <div className="aspect-[4/5] overflow-hidden rounded-t-full bg-blue-100 border border-blue-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800" 
                alt="Elegant Rental Interior" 
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Sideways Text Label */}
            <div className="absolute -left-20 top-1/2 -rotate-90 origin-center text-[10px] tracking-[0.5em] text-blue-300 uppercase hidden lg:block whitespace-nowrap font-sans">
              Profitable Rentals
            </div>

            <div className="mt-6 text-[11px] tracking-widest text-blue-300 uppercase font-sans">
              Rental Business Success
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-7/12 text-left">
            <p className="text-blue-300 text-xs tracking-[0.2em] uppercase mb-6 font-sans">
              Professional Short-Term Rental Coaching
            </p>
            
            <h1 className="text-3xl lg:text-6xl font-medium text-blue-900 leading-[1.1] mb-10">
              Helping our clients <br/> turn their 
              <span className="italic font-light text-blue-300 ml-4">PASSION</span> 
              <br/> 
              <span className="text-2xl lg:text-4xl font-light opacity-90">& hobbies into a <br/> profitable business.</span>
            </h1>

            <div className="max-w-md mb-12 border-l border-blue-100 pl-6">
              <p className="text-blue-900/60 text-sm leading-relaxed italic">
                Transform your property into a thriving short-term rental business with proven strategies from a seasoned industry expert.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-blue-900 text-white text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-blue-300 hover:text-blue-900"
              >
                Contact Us
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[10px] tracking-[0.3em] uppercase text-blue-900 border-b border-blue-900 pb-2 hover:text-blue-300 hover:border-blue-300 transition-all font-sans"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Dark Accent Circle (Matches reference bottom right) */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-900 rounded-full opacity-10 pointer-events-none" />
      <div className="absolute bottom-6 right-6 flex flex-col gap-1 items-end opacity-40">
        <div className="w-8 h-[1px] bg-blue-900"></div>
        <div className="w-4 h-[1px] bg-blue-900"></div>
      </div>
    </section>
  );
};

export default Hero;
