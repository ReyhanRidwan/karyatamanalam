import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="kontak" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-5 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Wujudkan Taman Impian <br /> Anda Sekarang
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Konsultasikan kebutuhan landscape Anda dengan tim ahli kami. Kami siap memberikan solusi terbaik sesuai budget Anda.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all shadow-xl hover:shadow-accent/20 transform hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
