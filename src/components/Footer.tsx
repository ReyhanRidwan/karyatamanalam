import { Instagram, Phone, MapPin, Mail } from 'lucide-react';

const LOGO_URL = "https://scontent.xx.fbcdn.net/v/t1.15752-9/671406972_970864115880069_5748911215132522925_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=2XFdtpUD0QoQ7kNvwHUI_PH&_nc_oc=AdqKFFp-4y898sXOr3rtlwGL2R3BPLA539xrBptjmteD7O5XQwZWT9vF4ZxAq25ya1prMwZ9S025I0Tclpv2eMdm&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AGdXjYxpIfbAJKGOeI7kTmM5uxJyA2ogU3strdT3hqoLg&oe=6A06D0AC";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={LOGO_URL} 
                alt="Karya Taman Alam Logo" 
                className="h-12 w-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-bold text-primary tracking-tight">
                Karya Taman Alam
              </span>
            </div>
            <p className="text-primary/60 text-sm leading-relaxed">
              Penyedia jasa landscape dan pembuatan taman profesional yang mengutamakan kualitas, estetika, dan kepuasan pelanggan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-natural rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-primary">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio', 'Kontak'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-primary/60 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-primary">Layanan</h4>
            <ul className="space-y-4">
              {['Taman Minimalis', 'Taman Tropis', 'Vertical Garden', 'Kolam Hias', 'Hardscape'].map((item) => (
                <li key={item}>
                  <span className="text-primary/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-primary">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent shrink-0 mt-1" />
                <span className="text-primary/60 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent shrink-0 mt-1" />
                <span className="text-primary/60 text-sm">info@karyatamanalam.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span className="text-primary/60 text-sm">
                  Melayani wilayah Jabodetabek & Jawa Barat
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/5 text-center">
          <p className="text-primary/40 text-xs uppercase tracking-widest font-semibold">
            © {new Date().getFullYear()} Karya Taman Alam. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
