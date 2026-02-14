import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const CardWrapper = ({ children, title, compact }) => (
    <div className="relative group">
      {/* Delicate Arched Line */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[90%] h-20 border-t border-x border-slate-300 rounded-t-[160px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className={`bg-white/80 backdrop-blur-sm border border-slate-100 text-slate-800 rounded-t-[160px] rounded-b-2xl flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${compact ? 'p-6 pt-8 min-h-[420px]' : 'p-8 pt-12 min-h-[580px]'}`}>
        {/* Blue Dot in place of image */}
        <div className={`w-16 h-16 bg-blue-900 rounded-full ${compact ? 'mb-8' : 'mb-10'} shadow-lg`}></div>
        
        <h3 className="font-serif text-lg mb-6 tracking-[0.3em] uppercase text-slate-900">{title}</h3>
        <div className="w-full text-center font-sans text-sm text-slate-500 leading-relaxed flex-grow">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-12 bg-[#f8f9fa] relative overflow-hidden text-slate-800">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase text-slate-400 mb-4 block">Connect With Us</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-[0.15em] mb-6 font-serif">SIERRA BNB ACADEMY</h2>
          <div className="h-[1px] w-12 bg-slate-300 mx-auto mb-12"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          
          {/* COLUMN 1: Contact Info */}
          <div className="mt-12">
            <CardWrapper 
              title="Inquiries" 
              compact
            >
              <div className="space-y-8 mt-4">
                <div className="flex flex-col items-center">
                  <span className="text-slate-400 text-[9px] uppercase tracking-widest mb-2">Electronic Mail</span>
                  <p className="text-slate-700 text-sm font-light hover:text-blue-600 transition-colors cursor-pointer">cory.mcgeehon@gmail.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-slate-400 text-[9px] uppercase tracking-widest mb-2">Telephone</span>
                  <p className="text-slate-700 text-sm font-light">619.408.0022</p>
                </div>
              </div>
            </CardWrapper>
          </div>

          {/* COLUMN 2: The Form */}
          <CardWrapper 
            title="Correspondence" 
          >
            <form onSubmit={handleSubmit} className="space-y-5 mt-2 px-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-slate-900 outline-none text-xs transition-all placeholder:text-slate-300 placeholder:uppercase placeholder:tracking-tighter"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-slate-900 outline-none text-xs transition-all placeholder:text-slate-300 placeholder:uppercase placeholder:tracking-tighter"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="3"
                className="w-full bg-transparent border-b border-slate-200 py-2 focus:border-slate-900 outline-none text-xs transition-all resize-none placeholder:text-slate-300 placeholder:uppercase placeholder:tracking-tighter"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-8 w-full py-4 bg-slate-900 text-white font-light uppercase tracking-[0.2em] text-[10px] hover:bg-slate-700 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </CardWrapper>

          {/* COLUMN 3: Socials */}
          <div className="mt-12">
            <CardWrapper 
              title="Social Presence" 
              compact
            >
              <div className="flex justify-center gap-10 mt-10">
                <a href="https://www.instagram.com/corym32/" className="text-slate-400 hover:text-slate-900 transition-all hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
                </a>
                <a href="https://www.facebook.com/cory.mcgeehon.7" className="text-slate-400 hover:text-slate-900 transition-all hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
              <p className="mt-12 text-[9px] tracking-[0.4em] uppercase opacity-40">Est. 2026</p>
            </CardWrapper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
