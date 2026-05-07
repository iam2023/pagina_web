import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="relative bg-[#001a2e] overflow-hidden">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        
        {/* Info Side (Left) */}
        <div className="p-10 md:p-20 flex flex-col justify-center relative border-r border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 text-primary mb-8 text-white">
              <MapPin size={24} />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">Sede Principal</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-[0.9] uppercase tracking-tighter">
              Nuestra <br /> <span className="text-primary font-headline">Ubicación</span>
            </h2>

            <div className="space-y-8 max-w-sm">
              <div className="bg-white/5 p-8 rounded-sm border-l-2 border-primary">
                <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-4 opacity-50">Dirección Administrativa</h4>
                <p className="text-white text-xl leading-relaxed font-light">
                  Mza:1 Lt. 3 P.J. Virgen de Lourdes <br />
                  Villa María Del Triunfo, Lima – Perú
                </p>
              </div>

              <div className="flex items-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-widest">
                 <div className="w-10 h-[1px] bg-white/20"></div>
                 Cobertura Técnica en todo el Perú
              </div>

              <motion.a 
                whileHover={{ x: 10 }}
                href="https://maps.google.com/maps?q=Mza.+H+Lt.+2+P.J.+Virgen+de+Lourdes+-+Villa+Mar%C3%ADa+Del+Triunfo+Lima+%E2%80%93+Per%C3%BA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white py-5 px-10 rounded-full inline-flex items-center gap-4 text-[11px] font-black tracking-[0.2em] shadow-2xl hover:bg-white hover:text-[#001a2e] transition-all font-bold"
              >
                ABRIR EN GOOGLE MAPS <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Map Side (Right) */}
        <div className="h-[450px] md:h-auto min-h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.569502621434!2d-76.9205!3d-12.1645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA5JzUyLjIiUyA3NsKwNTUnMTMuOCJX!5e0!3m2!1sen!2spe!4v1713735000000!5m2!1sen!2spe&q=Mza.+H+Lt.+2+P.J.+Virgen+de+Lourdes+-+Villa+Mar%C3%ADa+Del+Triunfo+Lima+Per%C3%BA" 
            className="absolute inset-0 w-full h-full grayscale-[0.2] contrast(1.1)"
            allowFullScreen="" 
            loading="lazy"
            title="Ubicación JTV Services"
          ></iframe>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .font-headline { font-family: 'Outfit', sans-serif; }
      ` }} />
    </section>
  );
};

export default LocationSection;
