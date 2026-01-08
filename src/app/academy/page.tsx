import React from 'react';

export default function AcademyPage() {
  const courses = [
    { title: 'Ethical Hacking', level: 'Intermediate', duration: '8 Weeks', desc: 'Master penetration testing and network security.', color: 'from-red-600 to-red-900' },
    { title: 'Full-Stack JS', level: 'Beginner', duration: '12 Weeks', desc: 'Build modern web apps with React, Node.js, and MongoDB.', color: 'from-yellow-500 to-orange-700' },
    { title: 'Python for AI', level: 'Advanced', duration: '10 Weeks', desc: 'Dive into Machine Learning and Neural Networks.', color: 'from-blue-600 to-indigo-900' },
    { title: 'Flutter Mobile', level: 'Intermediate', duration: '8 Weeks', desc: 'Create cross-platform apps for iOS and Android.', color: 'from-cyan-500 to-blue-700' },
    { title: 'UI/UX Mastery', level: 'Beginner', duration: '6 Weeks', desc: 'Design stunning interfaces using Figma and Adobe XD.', color: 'from-pink-500 to-purple-700' },
    { title: 'Cyber Security', level: 'Advanced', duration: '14 Weeks', desc: 'Professional certification for digital defense.', color: 'from-emerald-500 to-teal-800' },
  ];

  // Specific link for the Free Orientation Session
  const freeSessionLink = `https://wa.me/96176724176?text=${encodeURIComponent(
    "Hello CodeNet! I would like to book a free career orientation session to help me choose the right path."
  )}`;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Skills for the future</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter">
            CodeNet <span className="text-blue-500">Academy</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Accelerate your career with project-based learning. Get certified by industry experts at CodeNet Lebanon.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => {
            const courseLink = `https://wa.me/96176724176?text=${encodeURIComponent(
              `Hello CodeNet! I am interested in the ${course.title} course. Can you provide the start date and price?`
            )}`;

            return (
              <div key={i} className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className={`h-2 w-full bg-gradient-to-r ${course.color}`}></div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-blue-400 border border-white/10">
                      {course.level}
                    </span>
                    <span className="text-gray-500 text-xs font-medium uppercase tracking-widest">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {course.desc}
                  </p>

                  <a 
                    href={courseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white text-black rounded-2xl font-black text-center text-sm hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- FREE SESSION BANNER --- */}
        <div className="mt-32 p-10 rounded-3xl bg-blue-600 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <div>
            <h2 className="text-3xl font-black mb-2">Not sure where to start?</h2>
            <p className="text-blue-100 italic">Get a free career orientation session with CodeNet experts.</p>
          </div>
          <a 
            href={freeSessionLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Book Free Session
          </a>
        </div>
      </div>
    </div>
  );
}