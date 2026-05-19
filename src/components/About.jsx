import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              HISTORIA Y VALORES
            </span>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Elevando los estándares de la industria nacional.</h2>
            <p className="text-text-muted mb-8 leading-relaxed text-lg">
              Somos una empresa peruana dedicada a brindar servicios de ingeniería y mantenimiento 
              con un enfoque inquebrantable en la calidad y la seguridad ocupacional.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="text-primary font-black text-xl">M</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Misión</h3>
                  <p className="text-sm text-text-muted leading-relaxed">Proveer soluciones innovadoras de mantenimiento que superen las expectativas tecnológicas y de servicio.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="text-primary font-black text-xl">V</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Visión</h3>
                  <p className="text-sm text-text-muted leading-relaxed">Ser reconocidos como el socio estratégico predilecto para proyectos de alta complejidad en el Perú.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-accent rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                alt="Construction Team" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            {/* Visual Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
