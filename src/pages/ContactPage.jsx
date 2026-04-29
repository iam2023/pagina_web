import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import LocationSection from '../components/LocationSection';
import SEO from '../components/SEO';


const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-secondary-light min-h-screen"
    >
      <SEO 
        title="Contacto" 
        description="Póngase en contacto con JTV Servicios Generales. Solicite una cotización para sus proyectos de mantenimiento industrial y construcción."
      />
      <div 
        className="relative section text-center overflow-hidden flex items-center justify-center"
        style={{ paddingTop: '180px', paddingBottom: '140px' }}
      >
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 z-10" 
            style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
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
        
        {/* Title Content */}
        <div className="container relative z-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#ffffff', textShadow: '0 4px 10px rgba(0,0,0,0.6)' }}>Contáctanos</h1>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#e5e7eb', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Estamos listos para atender tus requerimientos con la rapidez, precisión y calidad que la industria exige.
          </p>
        </div>
      </div>
      <Contact />
      <LocationSection />
    </motion.div>
  );
};

export default ContactPage;
