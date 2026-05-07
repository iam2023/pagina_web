import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, sub, img, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      className={className}
    >
      <Link to="/proyectos" className="block relative group rounded-xl overflow-hidden shadow-2xl border border-white/5 h-full min-h-[380px]">
        {/* Main Image with Zoom */}
        <img 
          src={img} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0" 
          alt={title} 
        />
        
        {/* Technical Blueprint Overlay (Only on hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '20px 20px' 
             }}></div>

        {/* ID Badge */}
        <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-black px-4 py-2 rounded-full shadow-lg z-20 tracking-widest border border-white/20">
          {id}
        </div>

        {/* Content Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-t from-azulino via-azulino/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-8">
          <div className="backdrop-blur-md bg-white/5 p-6 rounded-lg border border-white/10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className="w-10 h-[2px] bg-primary mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            <h4 className="text-white font-black uppercase tracking-tighter text-2xl mb-2 font-headline">{title}</h4>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">{sub}</p>
          </div>
        </div>

        {/* Corner Decoration */}
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
