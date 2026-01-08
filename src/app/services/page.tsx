export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-20">
      <h1 className="text-5xl font-bold mb-10 text-blue-500">Our Services</h1>
      <div className="grid gap-10">
        <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Web & Mobile Development</h2>
          <p className="text-gray-400 text-lg">We build high-performance apps using Next.js and Flutter.</p>
        </div>
        <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Cybersecurity</h2>
          <p className="text-gray-400 text-lg">Protecting your digital assets with advanced audits.</p>
        </div>
      </div>
    </div>
  );
}