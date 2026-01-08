import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code.Net | Tech Agency & Academy",
  description: "Agency and Academy Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        
        {/* --- WHITE HEADER (Navigation) --- */}
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-100 bg-white/90">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
            <Link href="/" className="text-2xl font-black tracking-tighter italic text-black">
              Co<span className="text-blue-600">de</span>.NET
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
              <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
              <Link href="/academy" className="hover:text-blue-600 transition">Academy</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>
            <Link href="/services">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer">
                Join Now
              </button>
            </Link>
          </div>
        </nav>

        {/* --- PAGE CONTENT --- */}
        <main>{children}</main>

        {/* --- DARK FOOTER (Co.Net will be white here) --- */}
        <footer className="bg-[#0a0a0a] pt-20 pb-10 px-6 border-t border-white/5 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              
              <div className="col-span-1 md:col-span-1">
                {/* Logo is white because the footer background is dark */}
                <div className="text-2xl font-black tracking-tighter italic mb-6 text-white">
                  Co<span className="text-blue-500">de</span>.NET
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering Lebanon's tech landscape through premium software development and expert-led education.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 underline decoration-blue-500 underline-offset-8">Platform</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
                  <li><Link href="/academy" className="hover:text-white transition">Tech Academy</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 underline decoration-blue-500 underline-offset-8">Support</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                  <li><a href="https://wa.me/96176724176" className="hover:text-green-400 transition">WhatsApp Help</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 underline decoration-blue-500 underline-offset-8">Contact</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li>Nabatieh, South Lebanon</li>
                  <li>+961 76 724 176</li>
                  <li>info@codenet.ai</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
              <p>© {new Date().getFullYear()} Code.Net. All rights reserved.</p>
              <div className="flex gap-6 uppercase tracking-widest font-bold">
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>

        {/* --- WHATSAPP BUTTON --- */}
        <a
          href="https://wa.me/96176724176"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.627 1.435h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  );
}