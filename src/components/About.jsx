import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-100 font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Top Header Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 border-t border-blue-300 pt-8 relative">
            {/* Template/Year indicator like the top-right of your image */}
            <span className="absolute top-2 right-0 text-xs font-mono text-blue-900 uppercase tracking-widest">
                Est. 2012 / Sierra BnB
            </span>

          {/* Left: Large Title */}
          <div className="md:col-span-4">
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-blue-900 leading-tight">
              About<br/>Us
            </h2>
            <p className="mt-4 text-xs uppercase tracking-widest text-blue-900 font-bold border-l-2 border-blue-900 pl-4 py-2">
                Aesthetic & Expert
            </p>
          </div>

          {/* Middle: Short Description */}
          <div className="md:col-span-4">
            <p className="text-blue-900 font-medium leading-relaxed">
              Veteran Short Term Rental Super Host of 12 years offering coaching to get your business dialed in for Airbnb.
            </p>
          </div>

          {/* Right: Detailed Description */}
          <div className="md:col-span-4">
            <p className="text-blue-900 text-sm opacity-80 leading-relaxed">
              Helping you learn the pros and cons of my mistakes and how to optimize your strategies. 
              We look for business opportunities and partnerships to help others create cash flow 
              so the average investor can have more free time.
            </p>
            <button className="mt-6 border-b border-blue-900 text-blue-900 font-bold text-sm pb-1 hover:text-blue-300 hover:border-blue-300 transition-all">
                CONTACT US
            </button>
          </div>
        </div>

        {/* Bottom Visual Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          
          {/* Left Image (Square/Rectangle) */}
          <div className="md:col-span-4 h-64 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Middle Image (Rounded Design like reference) */}
          <div className="md:col-span-4 h-64 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" 
              alt="Bnb Property" 
              className="w-full h-full object-cover rounded-tr-[100px] rounded-bl-[20px]" 
            />
          </div>

          {/* Right Quote Block (Dark Background) */}
          <div className="md:col-span-4 bg-blue-900 p-8 flex flex-col justify-center text-white">
            <p className="text-lg italic font-light leading-snug mb-4">
              "We look for business opportunities and partnerships to help others create cash flow so the average investor can have more free time"
            </p>
            <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-blue-300"></div>
                <span className="text-sm font-bold tracking-tighter uppercase text-blue-300">
                    Cory McGeehon
                </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;