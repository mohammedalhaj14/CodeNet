import React from 'react';
import Link from 'next/link'; // Import the Link component

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">

      {/* 2. HERO SECTION */}
      <header className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
            Lebanon's Premier Tech Hub
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-tight">
            Design. Code. <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Empower.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We build high-performance software and train the next generation of 
            developers with industry-leading courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/academy">
              <button className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform w-full sm:w-auto">
                Start Learning
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-gray-900 border border-white/10 px-10 py-4 rounded-2xl font-black hover:bg-gray-800 transition-colors w-full sm:w-auto">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our Services</h2>
            <p className="text-gray-500">How we help businesses scale.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Mobile Dev', desc: 'Expert Flutter and React Native apps.', icon: '📱' },
            { title: 'Web Solutions', desc: 'Next.js, SEO, and Full-stack systems.', icon: '💻' },
            { title: 'UI/UX Design', desc: 'Modern, intuitive digital experiences.', icon: '🎨' }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-blue-600/5 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACADEMY SECTION */}
     {/* 4. ACADEMY SECTION */}
      <section id="academy" className="bg-[#0a0a0a] py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Academy</h2>
            <p className="text-gray-400">Join 5,000+ students learning tech in Arabic & English.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { course: 'Ethical Hacking', level: 'Intermediate', color: 'bg-red-500' },
              { course: 'Full-Stack JS', level: 'Beginner', color: 'bg-yellow-500' },
              { course: 'Python for AI', level: 'Advanced', color: 'bg-blue-500' },
              { course: 'Flutter Mobile', level: 'Intermediate', color: 'bg-cyan-500' }
            ].map((course, i) => {
              
              // This creates the WhatsApp link with a custom message
              const whatsappLink = `https://wa.me/96176724176?text=${encodeURIComponent(
                `Hello Code.Net! I am interested in enrolling in the ${course.course} course. Can I get more details?`
              )}`;

              return (
                <div key={i} className="overflow-hidden rounded-2xl bg-[#151515] border border-white/10 group hover:-translate-y-2 transition-transform">
                  <div className={`h-40 ${course.color} opacity-20 group-hover:opacity-40 transition-opacity flex items-center justify-center text-4xl font-bold`}>
                    {course.course[0]}
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold text-blue-400 uppercase mb-2 tracking-tighter">{course.level}</div>
                    <h4 className="font-bold text-lg mb-4">{course.course}</h4>
                    
                    {/* ENROLL VIA WHATSAPP BUTTON */}
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-white/5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-[#25D366] group-hover:text-white transition-all underline-none decoration-transparent"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.627 1.435h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Enroll Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}