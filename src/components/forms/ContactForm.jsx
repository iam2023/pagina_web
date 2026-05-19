import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

const ContactForm = ({ light = false }) => {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    errorMsg: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ submitting: true, succeeded: false, errorMsg: null });
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/meedqjno", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setState({ submitting: false, succeeded: true, errorMsg: null });
        form.reset();
      } else {
        const errorData = await response.json();
        const msg = errorData.errors?.map(err => err.message).join(", ") || 'No se pudo enviar el mensaje. Intente de nuevo.';
        setState({ submitting: false, succeeded: false, errorMsg: msg });
      }
    } catch (err) {
      setState({ 
        submitting: false, 
        succeeded: false, 
        errorMsg: 'Fallo de conexión. Verifique su acceso a internet e intente de nuevo.' 
      });
    }
  };

  return (
    <div className="w-full relative">
      <AnimatePresence mode="wait">
        {state.succeeded ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`flex flex-col items-center justify-center text-center p-12 shadow-2xl rounded-sm border ${light ? 'bg-white border-primary/20 text-azulino' : 'bg-azulino-light border-primary/20 text-white'} min-h-[400px]`}
          >
            <CheckCircle2 size={64} className="text-primary mb-6 animate-bounce" />
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 font-heading">
              ¡Solicitud Recibida!
            </h3>
            <p className={`text-sm max-w-md leading-relaxed ${light ? 'text-azulino/70' : 'text-white/70'} font-medium`}>
              Tu solicitud de cotización técnica ha sido enviada con éxito. Un ingeniero de nuestro equipo de operaciones se pondrá en contacto contigo dentro de las próximas 24 horas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setState({ submitting: false, succeeded: false, errorMsg: null })}
              className="mt-8 bg-primary text-white py-3 px-8 font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-primary-dark transition-colors"
            >
              ENVIAR OTRO MENSAJE
            </motion.button>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            className={`${light ? 'bg-white' : 'bg-azulino-light'} p-8 md:p-12 shadow-2xl rounded-sm border ${light ? 'border-gray-50' : 'border-white/5'} flex flex-col gap-6 text-left w-full`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className={`block text-[10px] font-black uppercase tracking-widest mb-2 ${light ? 'text-azulino/40' : 'text-white/40'}`}>
                  Nombre Completo
                </label>
                <input 
                  name="nombre" 
                  type="text"
                  required 
                  minLength={3}
                  disabled={state.submitting}
                  className={`w-full p-4 ${light ? 'bg-gray-50 border-gray-100' : 'bg-white/5 border-white/10 text-white'} border outline-none focus:border-gold transition-colors font-bold text-[11px] tracking-widest uppercase placeholder:text-gray-300 disabled:opacity-50`} 
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
                  disabled={state.submitting}
                  className={`w-full p-4 ${light ? 'bg-gray-50 border-gray-100' : 'bg-white/5 border-white/10 text-white'} border outline-none focus:border-gold transition-colors font-bold text-[11px] tracking-widest uppercase placeholder:text-gray-300 disabled:opacity-50`} 
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
                minLength={10}
                disabled={state.submitting}
                className={`w-full p-4 ${light ? 'bg-gray-50 border-gray-100' : 'bg-white/5 border-white/10 text-white'} border outline-none focus:border-gold transition-colors font-bold text-[11px] tracking-widest uppercase placeholder:text-gray-300 disabled:opacity-50`} 
                placeholder="Cuéntanos sobre los requerimientos técnicos..."
              ></textarea>
            </div>

            {state.errorMsg && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-500 p-4 text-xs font-bold uppercase tracking-widest"
              >
                <AlertTriangle size={16} />
                <span>{state.errorMsg}</span>
              </motion.div>
            )}

            <motion.button 
              type="submit"
              disabled={state.submitting}
              whileHover={state.submitting ? {} : { scale: 1.01, backgroundColor: 'var(--color-primary-dark)' }}
              whileTap={state.submitting ? {} : { scale: 0.99 }}
              className="bg-primary text-white p-6 font-black uppercase text-[11px] tracking-[0.5em] shadow-xl transition-all disabled:opacity-75 flex items-center justify-center gap-3"
            >
              {state.submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  ENVIANDO SOLICITUD...
                </>
              ) : (
                "SOLICITAR COTIZACIÓN"
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
