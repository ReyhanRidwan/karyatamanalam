import { motion } from 'motion/react';
import { MessageSquare, MapPin, FileText, Hammer, Sparkles } from 'lucide-react';

const STEPS = [
  {
    title: "Konsultasi",
    desc: "Hubungi kami via WhatsApp untuk konsultasi awal.",
    icon: <MessageSquare size={24} />
  },
  {
    title: "Survey Lokasi",
    desc: "Kami datang ke lokasi untuk pengukuran dan analisa.",
    icon: <MapPin size={24} />
  },
  {
    title: "Desain & Penawaran",
    desc: "Pembuatan konsep desain dan rincian biaya.",
    icon: <FileText size={24} />
  },
  {
    title: "Pengerjaan",
    desc: "Proses pengerjaan taman oleh tim profesional.",
    icon: <Hammer size={24} />
  },
  {
    title: "Finishing",
    desc: "Penyelesaian akhir dan serah terima proyek.",
    icon: <Sparkles size={24} />
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Cara Kerja</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Proses Pengerjaan Kami</h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/5 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-primary">{step.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
