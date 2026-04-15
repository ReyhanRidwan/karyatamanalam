import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const LOGO_URL = "https://scontent.xx.fbcdn.net/v/t1.15752-9/671406972_970864115880069_5748911215132522925_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=2XFdtpUD0QoQ7kNvwHUI_PH&_nc_oc=AdqKFFp-4y898sXOr3rtlwGL2R3BPLA539xrBptjmteD7O5XQwZWT9vF4ZxAq25ya1prMwZ9S025I0Tclpv2eMdm&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AGdXjYxpIfbAJKGOeI7kTmM5uxJyA2ogU3strdT3hqoLg&oe=6A06D0AC";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        (isScrolled || isMenuOpen) ? 'bg-white shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="Karya Taman Alam Logo" 
            className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
            referrerPolicy="no-referrer"
          />
          <span className={cn(
            "font-serif text-xl font-bold tracking-tight",
            (isScrolled || isMenuOpen) ? "text-primary" : "text-white drop-shadow-md"
          )}>
            Karya Taman Alam
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                (isScrolled || isMenuOpen) ? "text-primary/80" : "text-white drop-shadow-sm"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890" // Placeholder WA
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary transition-all shadow-lg hover:shadow-primary/20"
          >
            <Phone size={16} />
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            (isScrolled || isMenuOpen) ? "text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out border-t border-primary/5",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif font-medium text-primary hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            className="flex items-center justify-center gap-2 bg-primary text-white p-4 rounded-xl text-lg font-bold mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={20} />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
