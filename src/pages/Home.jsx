import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import LocationSection from '../components/LocationSection';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Inicio" 
        description="JTV Servicios Generales: Soluciones integrales en mantenimiento industrial, carpintería metálica y construcción. Ingeniería de precisión en Perú."
      />
      <Hero />
      <section className="section bg-[#001a2e] relative overflow-hidden">
        {/* Technical Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">CATÁLOGO TÉCNICO ESPECIALIZADO</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter font-headline mb-8">
                Soluciones <span className="text-primary">Integrales</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-white/40 max-w-2xl mx-auto text-sm font-medium leading-relaxed uppercase tracking-widest">
                Desplegamos precisión técnica y estándares internacionales en cada proyecto de infraestructura industrial.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 w-full px-2 md:px-0">
          <Services />
        </div>
          
        <div className="container relative z-10 mt-24">
          <div className="flex flex-col items-center gap-6">
            <Link to="/servicios" className="btn bg-white text-azulino hover:bg-primary hover:text-white px-12 py-5 rounded-full font-black text-[10px] tracking-[0.3em] shadow-2xl transition-all">
              VER PORTAFOLIO COMPLETO
            </Link>
            <span className="text-white/20 text-[9px] font-bold tracking-widest uppercase">Expertos en Normativas Internacionales</span>
          </div>
        </div>
      </section>

      {/* Conversion Flow */}
      <Contact />
      <LocationSection />
      
      {/* Social Proof (Last Section) */}
      <Clients />
    </motion.div>
  );
};

export default Home;
