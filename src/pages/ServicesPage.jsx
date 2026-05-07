import { motion } from 'framer-motion';
import { 
  Building2, 
  Paintbrush, 
  Grid, 
  Layers, 
  Construction, 
  ShieldCheck, 
  Hammer,
  HardHat,
  Compass,
  LayoutGrid,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceCard from '../components/cards/ServiceCard';
import ProjectCard from '../components/cards/ProjectCard';
import ContactForm from '../components/forms/ContactForm';
import servicesData from '../data/services.json';
import projectsData from '../data/featured_projects.json';

// Icon Map for dynamic rendering
const ICON_MAP = {
  Compass,
  Paintbrush,
  LayoutGrid,
  Layers,
  Home,
  Grid
};

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-secondary-light min-h-screen"
    >
      <SEO 
        title="Servicios" 
        description="Servicios de obras civiles, estructuras metálicas, pintura industrial, sistema drywall y pisos técnicos bajo normativas internacionales."
      />

      {/* 1. INDUSTRIAL HERO SECTION */}
      <section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden bg-azulino">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-azulino-light via-azulino-light/80 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover opacity-60" 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
            alt="Fondo Industrial JVT"
          />
        </div>
        <div className="container mx-auto px-8 relative z-20">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-6 border-l-2 border-gold pl-4">
              CAPACIDAD TÉCNICA E INDUSTRIAL
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase font-heading">
              Nuestros <br /> <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-white/50 max-w-xl font-bold uppercase tracking-widest text-[10px] leading-relaxed">
              Integridad estructural y acabados de precisión técnica para los sectores más exigentes de la industria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SUB-HEADER */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between items-start gap-12">
            <div className="max-w-2xl relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-gold"></div>
                <span className="text-[10px] font-black tracking-[0.5em] text-azulino-light/40 uppercase">Estandares Globales</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-azulino-light uppercase tracking-[-0.04em] font-heading">
                Matriz de Servicios Técnicos
              </h2>
            </div>
            <div className="text-right flex flex-col items-end opacity-20">
              <span className="text-6xl font-black text-azulino-light font-heading leading-none">2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE RIGID MATRIX GRID */}
      <section className="pb-32 px-8 relative bg-white">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(var(--color-azulino-light) 0.8px, transparent 0.8px)', 
               backgroundSize: '24px 24px' 
             }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[280px]">
            {servicesData.map((service) => (
              <ServiceCard 
                key={service.id}
                {...service}
                icon={ICON_MAP[service.icon]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCIA EN EJECUCIÓN */}
      <section className="py-32 bg-secondary-light relative">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-primary font-black tracking-[0.6em] text-[10px] uppercase mb-4 block underline underline-offset-8">Portafolio Técnico</span>
            <h2 className="text-5xl md:text-6xl font-black text-azulino uppercase tracking-tighter font-headline mb-6">
              Proyectos de <span className="text-primary">Alto Impacto</span>
            </h2>
            <p className="text-azulino/50 max-w-2xl mx-auto text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              Explora nuestra trayectoria en ejecución industrial. Cada proyecto es un testimonio de precisión técnica y compromiso con la excelencia estructural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {projectsData.map((project, idx) => {
              // Create a bento grid effect by assigning different spans to specific indexes
              const isLarge = idx === 0 || idx === 5;
              const gridClass = isLarge ? "md:col-span-2" : "md:col-span-1";
              
              return (
                <ProjectCard 
                  key={idx} 
                  {...project} 
                  className={gridClass}
                />
              );
            })}
          </div>

          {/* "Ver más proyectos" Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <Link 
              to="/proyectos" 
              className="group relative px-12 py-5 bg-azulino text-white font-black text-[11px] tracking-[0.4em] uppercase rounded-sm overflow-hidden transition-all hover:bg-primary"
            >
              <span className="relative z-10 flex items-center gap-4">
                Ver más proyectos
                <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></div>
              </span>
              {/* Animated industrial background element */}
              <div className="absolute top-0 left-0 w-full h-full bg-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. FORMULARIO CONTACTO */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl text-center">
           <h2 className="text-4xl md:text-5xl font-black text-azulino uppercase tracking-tighter mb-4 font-headline">Iniciar Proyecto</h2>
           <p className="text-azulino/40 max-w-xl mx-auto text-[11px] font-bold uppercase tracking-[0.2em] mb-12 leading-relaxed">
             Contáctanos y haz realidad tu visión industrial con los estándares más altos de ingeniería y precisión técnica.
           </p>
           <ContactForm light />
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
