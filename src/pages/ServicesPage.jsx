import { motion } from 'framer-motion';
import { 
  Building2, 
  Paintbrush, 
  Grid, 
  Layers, 
  Construction, 
  ArrowRight, 
  ShieldCheck, 
  Hammer,
  HardHat,
  Compass,
  LayoutGrid,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#fcfdfe] min-h-screen"
    >
      <SEO 
        title="Servicios" 
        description="Servicios de obras civiles, estructuras metálicas, pintura industrial, sistema drywall y pisos técnicos bajo normativas internacionales."
      />
      {/* 1. INDUSTRIAL HERO SECTION (Azulino Background) */}
      <section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden bg-[#001a2e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#002542] via-[#002542]/80 to-transparent z-10"></div>
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
            <span className="inline-block text-[#ffba48] text-[10px] font-black tracking-[0.5em] uppercase mb-6 border-l-2 border-[#ffba48] pl-4">
              CAPACIDAD TÉCNICA E INDUSTRIAL
            </span>
            <h1 className="text-5xl md:text-7xl font-[900] text-white leading-[0.9] tracking-tighter mb-8 uppercase font-['Outfit']">
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
                <div className="w-12 h-1 bg-[#ffba48]"></div>
                <span className="text-[10px] font-black tracking-[0.5em] text-[#002542]/40 uppercase">Estandares Globales</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-[900] text-[#002542] uppercase tracking-[-0.04em] font-['Outfit']">
                Matriz de Servicios Técnicos
              </h2>
            </div>
            <div className="text-right flex flex-col items-end opacity-20">
              <span className="text-6xl font-black text-[#002542] font-['Outfit'] leading-none">2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE RIGID MATRIX GRID */}
      <section className="pb-32 px-8 relative bg-white">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(#002542 0.8px, transparent 0.8px)', 
               backgroundSize: '24px 24px' 
             }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[280px]">
            
            {/* LARGE FEATURED: ESTRUCTURAS METÁLICAS */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-sm shadow-xl"
            >
              <img 
                src="/images/servicios/estructurametalica.webp" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002542] via-[#002542]/40 to-transparent"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                <div className="bg-[#dc2626] w-14 h-14 flex items-center justify-center rounded-sm shadow-lg">
                  <Compass size={32} className="text-white" />
                </div>
                <div className="max-w-xl">
                  <h3 className="text-4xl font-[900] text-white uppercase tracking-tighter mb-4 font-['Outfit']">Estructuras Metálicas</h3>
                  <p className="text-white/80 text-sm mb-8 leading-relaxed font-semibold">Sistemas estructurales de alta complejidad, naves industriales y puentes bajo normativas internacionales.</p>
                  <button className="flex items-center gap-3 text-[#dc2626] font-black uppercase text-[10px] tracking-[0.4em] hover:translate-x-2 transition-transform">
                    VER ESPECIFICACIONES <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* PINTURA INDUSTRIAL */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden group p-10 flex flex-col justify-between border-b-4 border-[#dc2626] shadow-md rounded-sm lg:h-full"
            >
              <img 
                src="/images/servicios/pintura.webp" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" 
              />
              <div className="absolute inset-0 bg-[#002542]/80 group-hover:bg-[#002542]/60 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-[#dc2626] mb-4">
                  <Paintbrush size={28} />
                </div>
                <h3 className="text-xl font-[900] text-white uppercase tracking-tighter mb-3 font-['Outfit'] leading-tight">Pintura<br />Industrial</h3>
                <p className="text-white/70 text-[11px] leading-relaxed font-bold uppercase tracking-wider">Recubrimientos térmicos y anticorrosivos epóxicos.</p>
              </div>
            </motion.div>

            {/* VIDRIO Y ALUMINIO */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden group p-10 flex flex-col justify-between border-l-4 border-[#dc2626] shadow-md rounded-sm lg:h-full"
            >
              <img 
                src="/images/servicios/vidrio.webp" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" 
              />
              <div className="absolute inset-0 bg-[#002542]/80 group-hover:bg-[#002542]/60 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-[#dc2626] mb-4">
                  <LayoutGrid size={28} />
                </div>
                <h3 className="text-xl font-[900] text-white uppercase tracking-tighter mb-3 font-['Outfit'] leading-tight">Vidrio y<br />Aluminio</h3>
                <p className="text-white/70 text-[11px] leading-relaxed font-bold uppercase tracking-wider">Muros cortina y cerramientos técnicos de alta eficiencia.</p>
              </div>
            </motion.div>

            {/* PISOS TÉCNICOS */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden group p-10 flex flex-col justify-between shadow-xl rounded-sm lg:h-full border-r-4 border-[#dc2626]"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" 
              />
              <div className="absolute inset-0 bg-[#002542]/80 group-hover:bg-[#002542]/60 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-[#dc2626] mb-4">
                  <Layers size={28} />
                </div>
                <h3 className="text-xl font-[900] text-white uppercase tracking-tighter mb-3 font-['Outfit'] leading-tight">Pisos<br />Técnicos</h3>
                <p className="text-white/70 text-[11px] leading-relaxed font-bold uppercase tracking-wider">Pavimentación industrial de alto tráfico y pulidos químicos.</p>
              </div>
            </motion.div>

            {/* OBRAS CIVILES */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden group p-10 flex flex-col justify-between shadow-md border-b-4 border-[#dc2626] rounded-sm lg:h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" 
              />
              <div className="absolute inset-0 bg-[#002542]/80 group-hover:bg-[#002542]/60 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-[#dc2626] mb-4">
                  <Home size={28} />
                </div>
                <h3 className="text-xl font-[900] text-white uppercase tracking-tighter mb-3 font-['Outfit'] leading-tight">Obras<br />Civiles</h3>
                <p className="text-white/70 text-[11px] leading-relaxed font-bold uppercase tracking-wider">Infraestructura base y acabados estructurales de concreto.</p>
              </div>
            </motion.div>

            {/* SISTEMA DRYWALL */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden group p-10 flex flex-col justify-between border-l-4 border-[#dc2626] shadow-md rounded-sm lg:h-full"
            >
              <img 
                src="/images/servicios/draiwel.webp" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" 
              />
              <div className="absolute inset-0 bg-[#002542]/80 group-hover:bg-[#002542]/60 transition-colors"></div>
              <div className="relative z-10">
                <div className="text-[#dc2626] mb-4">
                  <Grid size={28} />
                </div>
                <h3 className="text-xl font-[900] text-white uppercase tracking-tighter mb-3 font-['Outfit'] leading-tight">Sistema<br />Drywall</h3>
                <p className="text-white/70 text-[11px] leading-relaxed font-bold uppercase tracking-wider">Tabiquería técnica y cielos rasos acústicos industriales.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. EXPERIENCIA EN EJECUCIÓN (Perfect 3x2 Grid) */}
      <section className="py-32 bg-[#fcfdfe] relative">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-primary font-black tracking-[0.6em] text-[10px] uppercase mb-4 block underline underline-offset-8">Portafolio Técnico</span>
            <h2 className="text-5xl md:text-6xl font-[900] text-azulino uppercase tracking-tighter font-headline mb-6">
              Proyectos de <span className="text-primary">Alto Impacto</span>
            </h2>
            <p className="text-azulino/50 max-w-2xl mx-auto text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              Explora nuestra trayectoria en ejecución industrial. Cada proyecto es un testimonio de precisión técnica y compromiso con la excelencia estructural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '#JVT-091', title: 'Refuerzo Estructural', sub: 'Sede Logística - Lima', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800' },
              { id: '#JVT-042', title: 'Recubrimiento Epóxico', sub: 'Planta Petroquímica', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800' },
              { id: '#JVT-118', title: 'Pavimentación Técnica', sub: 'Naves Industriales', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
              { id: '#JVT-007', title: 'Muro Cortina Glass', sub: 'Centro Empresarial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
              { id: '#JVT-204', title: 'Sistema Drywall', sub: 'Oficinas Corporativas', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800' },
              { id: '#JVT-312', title: 'Soldadura Industrial', sub: 'Soportes de Gran Luz', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800' }
            ].map((p, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link to="/proyectos" className="block relative group rounded-xl overflow-hidden shadow-xl border border-gray-100 h-[380px]">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.title} />
                  <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-black p-3 rounded-full shadow-lg z-20">{p.id}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-azulino via-azulino/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-white font-black uppercase tracking-tighter text-xl mb-2">{p.title}</h4>
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{p.sub}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FORMULARIO CONTACTO */}
      <section className="py-32 bg-[#f8f9fb]">
        <div className="container mx-auto px-8 max-w-4xl text-center">
           <h2 className="text-4xl md:text-5xl font-[900] text-azulino uppercase tracking-tighter mb-4 font-headline">Iniciar Proyecto</h2>
           <p className="text-azulino/40 max-w-xl mx-auto text-[11px] font-bold uppercase tracking-[0.2em] mb-12 leading-relaxed">
             Contáctanos y haz realidad tu visión industrial con los estándares más altos de ingeniería y precisión técnica.
           </p>
           <form 
             action="https://formspree.io/f/mjgjaabk" 
             method="POST"
             className="bg-white p-12 shadow-2xl rounded-sm border border-gray-50 flex flex-col gap-6 text-left"
           >
             <div className="flex flex-col md:flex-row gap-6">
               <input name="nombre" required className="flex-1 p-5 bg-[#fbfcff] border border-gray-100 outline-none focus:border-[#ffba48] font-bold text-[10px] tracking-widest uppercase placeholder:text-gray-300" placeholder="Nombre Completo" />
               <input name="email" type="email" required className="flex-1 p-5 bg-[#fbfcff] border border-gray-100 outline-none focus:border-[#ffba48] font-bold text-[10px] tracking-widest uppercase placeholder:text-gray-300" placeholder="Email Corporativo" />
             </div>
             <textarea name="mensaje" required rows="4" className="w-full p-5 bg-[#fbfcff] border border-gray-100 outline-none focus:border-[#ffba48] font-bold text-[10px] tracking-widest uppercase placeholder:text-gray-300" placeholder="Descripción del Proyecto"></textarea>
             <motion.button 
               type="submit"
               whileHover={{ scale: 1.01 }}
               whileTap={{ scale: 0.99 }}
               className="bg-[#002542] text-white p-6 font-black uppercase text-[11px] tracking-[0.5em] shadow-xl"
             >
               SOLICITAR COTIZACIÓN
             </motion.button>
           </form>
        </div>
      </section>

    </motion.div>
  );
};

export default ServicesPage;
