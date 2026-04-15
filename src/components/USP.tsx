import { motion } from 'motion/react';
import { ShieldCheck, Clock, BadgeDollarSign, Headphones } from 'lucide-react';

const USPS = [
  {
    title: "Konsultasi & Survey Gratis",
    description: "Kami berikan layanan konsultasi dan survey lokasi tanpa dipungut biaya sepeserpun.",
    icon: <Headphones className="text-accent" size={40} />
  },
  {
    title: "Desain Sesuai Budget",
    description: "Kami fleksibel dalam menyesuaikan desain taman dengan anggaran yang Anda miliki.",
    icon: <BadgeDollarSign className="text-accent" size={40} />
  },
  {
    title: "Tim Berpengalaman",
    description: "Dikerjakan oleh tenaga ahli yang sudah bertahun-tahun bergelut di dunia landscape.",
    icon: <ShieldCheck className="text-accent" size={40} />
  },
  {
    title: "Tepat Waktu & Rapi",
    description: "Komitmen kami adalah menyelesaikan pengerjaan sesuai deadline dengan hasil yang rapi.",
    icon: <Clock className="text-accent" size={40} />
  }
];

export default function USP() {
  return (
    <section className="py-24 px-6 bg-primary text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">Keunggulan Kami</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Mengapa Memilih Kami?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {USPS.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center space-y-6"
            >
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                {usp.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold">{usp.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
