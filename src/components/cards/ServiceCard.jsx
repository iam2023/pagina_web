import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  icon: Icon, 
  href = "/servicios", 
  isLarge = false,
  borderSide = 'bottom' // 'bottom', 'left', 'right'
}) => {
  const borderClasses = {
    bottom: 'border-b-4 border-primary',
    left: 'border-l-4 border-primary',
    right: 'border-r-4 border-primary'
  };

  if (isLarge) {
    return (
      <motion.div 
        whileHover={{ y: -5 }}
        className="md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-sm shadow-xl"
      >
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-azulino/0 group-hover:bg-azulino/60 transition-colors duration-500 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-azulino-light/90 via-transparent to-transparent z-0 pointer-events-none"></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
          <div className="bg-primary w-14 h-14 flex items-center justify-center rounded-sm shadow-lg">
            {Icon && <Icon size={32} className="text-white" />}
          </div>
          <div className="max-w-xl">
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 font-heading">{title}</h3>
            <p className="text-white/90 text-sm mb-8 leading-relaxed font-semibold">{description}</p>
            
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden group p-10 flex flex-col justify-between shadow-md rounded-sm lg:h-full ${borderClasses[borderSide] || borderClasses.bottom}`}
    >
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-100" 
      />
      <div className="absolute inset-0 bg-azulino/0 group-hover:bg-azulino/60 transition-colors duration-500 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-azulino-light/90 via-transparent to-transparent z-0 pointer-events-none"></div>
      <div className="relative z-10">
        <div className="text-primary mb-4">
          {Icon && <Icon size={28} />}
        </div>
        <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-3 font-heading leading-tight" dangerouslySetInnerHTML={{ __html: title }}></h3>
        <p className="text-white/90 text-[11px] leading-relaxed font-bold uppercase tracking-wider">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
