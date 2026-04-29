import { motion } from 'framer-motion';

const ContactForm = ({ light = false }) => {
  return (
    <form 
      action="https://formspree.io/f/mjgjaabk" 
      method="POST"
      className={`${light ? 'bg-white' : 'bg-azulino-light'} p-8 md:p-12 shadow-2xl rounded-sm border ${light ? 'border-gray-50' : 'border-white/5'} flex flex-col gap-6 text-left w-full`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label className={`block text-[10px] font-black uppercase tracking-widest mb-2 ${light ? 'text-azulino/40' : 'text-white/40'}`}>
            Nombre Completo
          </label>
          <input 
            name="nombre" 
            required 
            className={`w-full p-4 ${light ? 'bg-gray-50 border-gray-100' : 'bg-white/5 border-white/10 text-white'} border outline-none focus:border-gold transition-colors font-bold text-[11px] tracking-widest uppercase placeholder:text-gray-300`} 
            placeholder="Ej. Juan Pérez" 
          />
        </div>
        <div className="flex-1">
          <label className={`block text-[10px] font-black uppercase tracking-widest mb-2 ${light ? 'text-azulino/40' : 'text-white/40'}`}>
            Email Corporativo
          </label>
          <input 
            name="email" 
            type="email" 
            required 
            className={`w-full p-4 ${light ? 'bg-gray-50 border-gray-100' : 'bg-white/5 border-white/10 text-white'} border outline-none focus:border-gold transition-colors font-bold text-[11px] tracking-widest uppercase placeholder:text-gray-300`} 
            placeholder="usuario@empresa.com" 
          />
        </div>
      </div>
      
      <div>
        <label className={`block text-[10px] font-black uppercase tracking-widest mb-2 ${light ? 'text-azulino/40' : 'text-white/40'}`}>
          Descripción del Proyecto
        </label>
        <textarea 
          name="mensaje" 
          required 
          rows="4" 
          className={`w-full p-4 ${light ? 'bg-gray-50 border-gray-100' : 'bg-white/5 border-white/10 text-white'} border outline-none focus:border-gold transition-colors font-bold text-[11px] tracking-widest uppercase placeholder:text-gray-300`} 
          placeholder="Cuéntanos sobre los requerimientos técnicos..."
        ></textarea>
      </div>

      <motion.button 
        type="submit"
        whileHover={{ scale: 1.01, backgroundColor: 'var(--color-primary-dark)' }}
        whileTap={{ scale: 0.99 }}
        className="bg-primary text-white p-6 font-black uppercase text-[11px] tracking-[0.5em] shadow-xl transition-all"
      >
        SOLICITAR COTIZACIÓN
      </motion.button>
    </form>
  );
};

export default ContactForm;
