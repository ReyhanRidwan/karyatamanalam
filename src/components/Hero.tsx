import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SLIDES = [
  {
    id: 1,
    image: "https://dpa79oyyyfxcd.cloudfront.net/laravel/design/20b70250-67fa-43ee-a247-41a22a23dd0f.png",
    subtitle: "Estetika Alami",
    title: "Wujudkan Taman Impian Anda",
    description: "Desain landscape profesional untuk hunian modern dan asri.",
  },
  {
    id: 2,
    image: "https://platinumadisentosa.com/wp-content/uploads/2025/02/Ternyata-Begini-Cara-Membuat-Kolam-Ikan-Ideal-dan-Nyaman-1536x864.jpg",
    subtitle: "Ketenangan Air",
    title: "Kolam Koi & Air Mancur",
    description: "Hadirkan harmoni alam di halaman rumah Anda.",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${SLIDES[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content Container */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            {/* Left half empty for desktop */}
            <div className="hidden md:block md:w-1/2" />
            
            {/* Right half content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <span className="inline-block text-accent font-medium tracking-widest uppercase text-xs md:text-sm">
                  {SLIDES[current].subtitle}
                </span>
                <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  {SLIDES[current].title}
                </h1>
                <p className="text-white/80 text-sm md:text-lg max-w-md font-light leading-relaxed">
                  {SLIDES[current].description}
                </p>
                <div className="pt-4">
                  <a
                    href="#layanan"
                    className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-accent hover:text-white transition-all transform hover:scale-105 shadow-xl"
                  >
                    Lihat Layanan
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={cn(
              "h-1.5 transition-all rounded-full",
              current === index ? "w-8 bg-white" : "w-2 bg-white/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}
