import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative flex items-center overflow-hidden bg-[#001a2e]"
      style={{ height: '100vh' }}
    >
      {/* Background Video / Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: 'linear-gradient(to right, rgba(0, 26, 46, 0.8) 0%, rgba(0, 26, 46, 0.4) 50%, rgba(0, 26, 46, 0.7) 100%)' }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          poster="/industrial_hero_jvt.png"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Calidad que Construye Confianza
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-[0.9]" style={{ color: '#ffffff', textShadow: '0 4px 10px rgba(0,0,0,0.6)' }}>
              INGENIERÍA <br />
              <span className="text-primary">DE PRECISIÓN</span>
            </h1>
            <p className="text-lg mb-10 max-w-xl leading-relaxed" style={{ color: '#e5e7eb', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              JTV SERVICIOS GENERALES SAC: Transformamos desafíos industriales en soluciones
              de infraestructura resilientes y sostenibles.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/servicios" className="btn">
                NUESTROS SERVICIOS <ArrowRight size={18} />
              </Link>
              <Link to="/nosotros" className="btn btn-secondary" style={{ backgroundColor: 'transparent', borderColor: '#ffffff', color: '#ffffff' }}>
                CONÓCENOS
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .text-primary { color: var(--color-primary); }
        .text-text-muted { color: var(--color-text-muted); }
      `}</style>
    </section>
  );
};

export default Hero;
