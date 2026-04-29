import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, sub, img }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
    >
      <Link to="/proyectos" className="block relative group rounded-xl overflow-hidden shadow-xl border border-gray-100 h-[380px]">
        <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={title} />
        <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-black p-3 rounded-full shadow-lg z-20">{id}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-azulino via-azulino/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-white font-black uppercase tracking-tighter text-xl mb-2">{title}</h4>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{sub}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
