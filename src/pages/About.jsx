import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Users, Shield, Trophy, CheckCircle2, Award, Settings, HeartPulse, UserCheck, MapPin, ArrowRight } from 'lucide-react';
import AboutHeader from '../components/About'; 
import Clients from '../components/Clients';
import LocationSection from '../components/LocationSection';
import SEO from '../components/SEO';

const Counter = ({ value, duration = 2, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      <SEO 
        title="Nosotros" 
        description="Conozca a JTV Servicios Generales, con más de 12 años de trayectoria y excelencia en ingeniería estructural y soluciones metálicas en Perú."
      />
      {/* Hero Section - Industrial Style */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-[#001a2e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#002542] via-[#002542]/80 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover opacity-60" 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
            alt="Steel structure background"
          />
        </div>
        <div className="container mx-auto px-8 relative z-20">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 bg-primary text-white text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-6 rounded-sm">
              SOBRE NOSOTROS
            </span>
            <h2 className="text-5xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase font-headline">
              Nuestra Trayectoria <br /> en la <span className="text-primary">Ingeniería Estructural</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed border-l-4 border-[#abc9ef] pl-6">
              Forjamos el futuro del Perú a través de soluciones metálicas de alta precisión y seguridad garantizada, impulsando el desarrollo industrial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trajectory Section (Worker Image & History) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-black text-primary uppercase tracking-tighter leading-tight font-headline">
                Trayectoria que construye confianza
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Con el respaldo de 12 años de experiencia como <span className="font-bold text-primary">JTV Servicios Generales S.A.C.</span>, hoy evolucionamos para liderar el sector de la ingeniería y la construcción metálica.
                </p>
                <p>
                  Nuestra trayectoria se ha definido por un compromiso inquebrantable con la calidad técnica y la seguridad industrial. Cada estructura que fabricamos es el resultado de un análisis riguroso y la aplicación de las normativas internacionales más exigentes.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 border-l-4 border-primary rounded-r-xl">
                <p className="text-gray-700 font-medium flex items-center gap-4">
                  <Shield className="text-primary shrink-0" size={24} />
                  "Más que constructores, somos socios estratégicos en el desarrollo de la infraestructura nacional."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 min-h-[500px]">
                <img 
                  src="/industrial_engineering_jvt.png" 
                  alt="Ingeniería JVT en acción" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azulino/60 to-transparent"></div>
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-10 -left-10 bg-azulino p-10 text-white rounded-2xl shadow-2xl border border-white/10"
              >
                <div className="text-5xl font-black mb-1 text-primary">
                  <Counter value={12} />+
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60">Años de Experticia</div>
              </motion.div>

              {/* Technical Overlay Decoration */}
              <div className="absolute top-8 right-8 border-r-2 border-t-2 border-primary/40 w-24 h-24 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section - Final Centered Layout */}
      <section className="bg-[#002542] py-24 text-white border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="text-5xl lg:text-7xl font-black text-primary font-['Outfit']">
                <Counter value={12} />+
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
                Años de Experiencia
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="text-5xl lg:text-7xl font-black text-primary font-['Outfit']">
                <Counter value={500} />+
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
                Proyectos Ejecutados
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="text-5xl lg:text-7xl font-black text-primary font-['Outfit']">
                <Counter value={100} />%
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
                Compromiso con la Seguridad
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Mission & Vision Section (Matching the Image) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-sm shadow-xl flex flex-col justify-between border-t-4 border-primary"
            >
              <div>
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-8 text-primary">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <Users size={32} />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-black text-primary uppercase mb-6 font-headline tracking-tighter">Misión</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Proveer soluciones innovadoras de mantenimiento que superen las expectativas tecnológicas y de servicio, 
                  impulsando la productividad y el desarrollo de nuestros clientes con excelencia.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-12 rounded-sm shadow-xl flex flex-col justify-between text-white"
            >
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-8 text-[#abc9ef]">
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                    <Shield size={32} />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-black text-white uppercase mb-6 font-headline tracking-tighter">Visión</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Ser reconocidos como el socio estratégico predilecto para proyectos de alta complejidad estructural en el Perú, 
                  destacando por nuestra innovación y estándares de clase mundial.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Clients Section */}
      <Clients />

      {/* Reusable Location Section */}
      <LocationSection />
    </motion.div>
  );
};

export default AboutPage;

