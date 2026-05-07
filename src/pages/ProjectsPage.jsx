import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MoveRight, MapPin, Calendar, Maximize, X, ChevronLeft, ChevronRight, Ruler } from 'lucide-react';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import projects from '../data/all_projects.json';

const categories = [
  "Todos",
  "Estructura Metálica",
  "Pintura Industrial",
  "Vidrio y Aluminio",
  "Pisos Técnicos",
  "Obras Civiles"
];

const ProjectModal = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 md:p-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-azulino/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        className="relative bg-white w-full max-w-6xl h-full max-h-[850px] rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-azulino text-white rounded-full hover:bg-primary transition-colors shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Left Side: Image Gallery */}
        <div className="relative w-full md:w-2/3 bg-gray-900 h-1/2 md:h-full group">
          <motion.img 
            key={currentImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={project.images[currentImg]} 
            className="w-full h-full object-cover"
            alt={project.title}
          />
          
          {project.images.length > 1 && (
            <>
              <button 
                onClick={() => setCurrentImg(prev => (prev === 0 ? project.images.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrentImg(prev => (prev === project.images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
              >
                <ChevronRight size={20} />
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === currentImg ? "bg-primary w-6" : "bg-white/50"}`} />
                ))}
              </div>
            </>
          )}

          <div className="absolute top-8 left-8">
            <span className="px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
              {project.id}
            </span>
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="w-full md:w-1/3 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
          <div className="mb-8">
            <span className="text-primary font-black text-[9px] tracking-[0.4em] uppercase mb-2 block">{project.category}</span>
            <h2 className="text-3xl font-black text-azulino leading-none uppercase tracking-tighter font-headline">{project.title}</h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-12 font-medium">
            {project.description}
          </p>

          <div className="space-y-6 mt-auto">
            <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Ubicación</span>
                <span className="text-sm font-bold text-azulino">{project.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-primary">
                <Calendar size={20} />
              </div>
              <div>
                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Año de Entrega</span>
                <span className="text-sm font-bold text-azulino">{project.year}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-primary">
                <Ruler size={20} />
              </div>
              <div>
                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Área Total</span>
                <span className="text-sm font-bold text-azulino">{project.area}</span>
              </div>
            </div>
          </div>

          <button className="mt-12 w-full py-5 bg-azulino text-white font-black text-[10px] tracking-[0.3em] uppercase hover:bg-primary transition-all flex items-center justify-center gap-4">
            Solicitar Información Técnica
            <MoveRight size={16} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filter projects based on activeCategory
  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen font-body"
    >
      <SEO 
        title="Proyectos" 
        description="Portafolio de proyectos industriales. Obras ejecutadas por JTV Servicios Generales con precisión técnica y los más altos estándares constructivos."
      />
      {/* Hero Section */}
      <section className="relative min-h-[614px] flex items-center overflow-hidden bg-[#001a2e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#002542] via-[#002542]/80 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover opacity-60" 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
            alt="Perspective view of a massive steel structure"
          />
        </div>
        <div className="container mx-auto px-8 relative z-20">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 bg-[#ffba48] text-[#291800] text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-6 rounded-sm">
              JTV SERVICIOS GENERALES SAC
            </span>
            <h1 className="text-5xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6 uppercase font-headline">
              Portafolio de <span className="text-primary">Proyectos de Ingeniería</span>
            </h1>
            <p className="text-xl text-white/80 max-w-xl font-light leading-relaxed">
              Soluciones estructurales e industriales ejecutadas con precisión milimétrica y los más altos estándares de seguridad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Filters (Sticky) */}
      <section className="bg-white sticky top-[80px] z-40 py-8 px-8 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat 
                ? "bg-primary text-white shadow-lg scale-105" 
                : "bg-gray-100 text-gray-500 hover:text-primary hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid (Asymmetrical Bento) */}
      <section className="px-8 pt-16 pb-32 bg-white">
        <div className="container mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[450px]"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, idx) => {
                // Determine layout based on filtered index for visual consistency
                const isLarge = idx % 5 === 0; 
                return (
                  <motion.div 
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProject(project)}
                    className={`group relative overflow-hidden bg-gray-100 rounded-sm cursor-pointer ${isLarge ? "md:col-span-8" : "md:col-span-4"}`}
                  >
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={project.image} alt={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-azulino via-azulino/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-3 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-widest">
                        {project.id}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end">
                      <div>
                        <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">{project.category}</span>
                        <h3 className={`font-black text-white uppercase tracking-tight font-headline ${isLarge ? "text-3xl" : "text-xl"}`}>{project.title}</h3>
                        <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          <div className="text-white/70 text-[0.7rem] uppercase tracking-wider">
                            <span className="block font-bold text-white">Ubicación</span> {project.location}
                          </div>
                          <div className="text-white/70 text-[0.7rem] uppercase tracking-wider">
                            <span className="block font-bold text-white">Año</span> {project.year}
                          </div>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
                        <Maximize size={20} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-gray-400 font-bold uppercase tracking-widest">No se encontraron proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-8 border-y border-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4 font-headline">¿Tienes un proyecto en mente?</h2>
            <p className="text-lg text-gray-500 leading-relaxed">Nuestro equipo de ingenieros está listo para transformar sus planos en estructuras sólidas y seguras.</p>
          </div>
          <button className="group flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest hover:bg-primary-dark transition-all">
            Iniciar Cotización
            <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;

