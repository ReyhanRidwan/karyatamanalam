import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ABOUT_IMAGE = "https://instagram.fcgk33-1.fna.fbcdn.net/v/t1.15752-9/657762933_1420976045996876_5059208154390473513_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=O6tSPjPnyDoQ7kNvwH16T7I&_nc_oc=AdpGZutdkhBO1X8ULfDbeJqJHoMBkqUV3Q854IqfEIOOycw3co2f74W7zvGPPNtzh580WI95fvj1KTApetXfLzqh&_nc_zt=23&_nc_ht=instagram.fcgk33-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AGfORrlpbuslnilOZTEdSqMO_V0zw72eOlQTQJjXpK0pQ&oe=69FB3AEC";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="tentang" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={ABOUT_IMAGE} 
                alt="Tentang Karya Taman Alam" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full -z-0 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-0 blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-semibold tracking-widest uppercase text-sm">Tentang Kami</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Ahli Landscape & <br /> Tata Taman Profesional
              </h2>
              <p className="text-primary/70 leading-relaxed text-lg">
                Karya Taman Alam adalah mitra terpercaya Anda dalam menghadirkan keindahan alam ke lingkungan hunian. Kami memiliki pengalaman bertahun-tahun dalam desain, pembuatan, hingga perawatan taman dengan standar kualitas tinggi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Jasa Desain Taman Custom",
                "Pembuatan Taman Profesional",
                "Perawatan Taman Berkala",
                "Solusi Landscape Terpadu"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span className="text-primary/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/10">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  <Counter value={150} suffix="+" />
                </div>
                <p className="text-xs md:text-sm text-primary/60 uppercase tracking-wider font-semibold mt-1">Proyek Selesai</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  <Counter value={120} suffix="+" />
                </div>
                <p className="text-xs md:text-sm text-primary/60 uppercase tracking-wider font-semibold mt-1">Klien Puas</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  <Counter value={10} suffix="+" />
                </div>
                <p className="text-xs md:text-sm text-primary/60 uppercase tracking-wider font-semibold mt-1">Tahun Pengalaman</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
