import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Bapak Hendra",
    location: "BSD City, Tangerang",
    text: "Sangat puas dengan hasil taman minimalisnya. Pengerjaannya rapi dan timnya sangat komunikatif. Rumah jadi jauh lebih asri.",
    rating: 5
  },
  {
    name: "Ibu Maya",
    location: "Sentul City, Bogor",
    text: "Kolam koinya jernih banget, sistem filtrasinya bagus. Gazebo yang dibuat juga kokoh dan desainnya pas dengan keinginan saya.",
    rating: 5
  },
  {
    name: "Bapak Ridwan",
    location: "Kemang, Jakarta Selatan",
    text: "Vertical garden di kantor kami jadi pusat perhatian tamu. Perawatannya juga mudah karena sudah dipasang sistem otomatis.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-natural/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Testimoni</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Apa Kata Klien Kami?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-primary/5 relative"
            >
              <Quote className="absolute top-8 right-8 text-accent/20" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary/80 italic leading-relaxed mb-8 text-lg">
                "{testi.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {testi.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testi.name}</h4>
                  <p className="text-xs text-primary/50 uppercase tracking-wider">{testi.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
