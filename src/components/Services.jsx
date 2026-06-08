import { motion } from 'framer-motion';
import { Hammer, Paintbrush, Grid, Layers, Zap, HardHat, Snowflake, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import './Services.css';

const servicesList = [
  { 
    icon: <Hammer size={32} />, 
    title: 'Estructuras Metálicas', 
    id: 'estructuras', 
    desc: 'Ingeniería de naves industriales, puentes y estructuras de alta complejidad.', 
    img: '/images/proyectos/proyecto-17.png',
    tag: 'ESTRUCTURAL'
  },
  { 
    icon: <HardHat size={32} />, 
    title: 'Obras Civiles', 
    id: 'obras', 
    desc: 'Infraestructura base, cimentaciones y acabados estructurales de concreto.', 
    img: '/images/servicios/obras-civiles-ia.png',
    tag: 'CONSTRUCCIÓN'
  },
  { 
    icon: <Grid size={32} />, 
    title: 'Sistemas Drywall', 
    id: 'drywall', 
    desc: 'Tabiquería técnica, diseño de oficinas y cielos rasos acústicos.', 
    img: '/images/proyectos/proyecto-13.png',
    tag: 'ACABADOS'
  },
  { 
    icon: <Paintbrush size={32} />, 
    title: 'Mantenimiento y Pintura Industrial', 
    id: 'pintura', 
    desc: 'Recubrimientos técnicos, pintado al horno y mantenimiento de racks.', 
    img: '/images/proyectos/proyecto-11.png',
    tag: 'PROTECCIÓN'
  }
];

const Services = () => {
  return (
    <div className="services-grid-wrapper w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[100%] md:w-full max-w-7xl mx-auto px-0 md:px-2">
        {servicesList.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <Link to={`/servicios#${service.id}`} className="block relative h-[500px] overflow-hidden rounded-sm border border-white/5 group-hover:border-primary transition-all duration-700">
              {/* Numerical Background Index */}
              <div className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-primary/20 transition-colors z-20 pointer-events-none font-headline tracking-tighter">
                0{i + 1}
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 z-0 bg-azulino">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-azulino/0 group-hover:bg-azulino/60 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-azulino/90 via-transparent to-transparent z-10 pointer-events-none" />
              </div>

              {/* Content Container */}
              <div className="relative z-30 h-full p-8 flex flex-col">
                {/* Top Section */}
                <div className="flex-1 mt-[5px]">
                  <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:border-primary group-hover:rotate-[360deg] transition-all duration-1000">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-black tracking-[0.4em] text-primary mb-2 block uppercase [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
                    {service.tag}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight font-headline group-hover:translate-x-2 transition-transform duration-500 [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
                    {service.title}
                  </h3>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-white/5 group-hover:border-primary/20">
                  <p className="text-white/40 text-[11px] font-medium leading-relaxed group-hover:text-white/80 transition-colors [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]">
                    {service.desc}
                  </p>
                  
                  {/* Action Link */}
                  <div className="mt-6 flex items-center gap-2 text-[8px] font-black text-primary tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 uppercase [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
                    Ver Especificaciones <div className="w-6 h-[1px] bg-primary shadow-[0_1px_2px_rgba(0,0,0,0.8)]"></div>
                  </div>
                </div>
              </div>

              {/* Industrial Edge Highlight */}
              <div className="absolute top-0 left-0 w-[1px] h-0 bg-primary group-hover:h-full transition-all duration-1000"></div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
