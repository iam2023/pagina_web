import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/meedqjno", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setState({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const errorData = await response.json();
        setState({ submitting: false, succeeded: false, error: errorData.error });
      }
    } catch (error) {
      setState({ submitting: false, succeeded: false, error: "Hubo un error de conexión." });
    }
  };

  if (state.succeeded) {
    return (
      <section className="section bg-white flex items-center justify-center min-h-[400px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 bg-secondary-light rounded-3xl border border-primary/20 shadow-xl max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={40} />
          </div>
          <h2 className="text-3xl font-black text-azulino mb-4 uppercase tracking-tighter">¡Solicitud Enviada!</h2>
          <p className="text-text-muted mb-8 text-lg">
            Gracias por contactar a JTV Services. Un asesor técnico se comunicará con usted a la brevedad.
          </p>
          <button 
            onClick={() => setState({ ...state, succeeded: false })}
            className="btn rounded-full px-12"
          >
            VOLVER A ESCRIBIR
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Structural Decor Overlay */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />

      <div className="container relative z-10 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Left Side: Industrial Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="mb-12">
              <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">CENTRAL DE OPERACIONES</span>
              <h2 className="text-5xl md:text-7xl font-black text-azulino leading-none uppercase tracking-tighter font-headline mb-8">
                Hablemos <br /> <span className="text-primary">de Ingeniería</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-text-muted text-lg max-w-md font-medium leading-relaxed">
                Nuestra oficina técnica está lista para procesar sus especificaciones y convertirlas en realidades estructurales de primer nivel.
              </p>
            </div>

            <div className="space-y-4 flex-1">
              {[
                { icon: <Phone />, label: 'Asistencia Técnica', val: '+51 951 336 142' },
                { icon: <Mail />, label: 'Relaciones Corporativas', val: 'jtv.servicios.sac@gmail.com' },
                { icon: <MapPin />, label: 'Sede Administrativa', val: 'Villa María Del Triunfo, Lima – Perú' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 flex items-start gap-6 border-l-4 border-transparent hover:border-primary transition-all">
                  <div className="w-12 h-12 bg-white text-primary flex items-center justify-center shadow-sm rounded-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1 opacity-50">{item.label}</h4>
                    <p className="text-azulino font-bold text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Technical Form Panel (Light Theme) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-14 shadow-2xl relative border border-gray-100"
          >
            {/* Technical grid decor */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#001a2e 1px, transparent 1px), linear-gradient(90deg, #001a2e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="text-[11px] font-black uppercase text-azulino tracking-widest mb-3 block">Nombre Completo</label>
                  <input name="nombre" required className="w-full bg-white border border-gray-200 p-4 text-azulino text-xs font-bold tracking-widest uppercase focus:border-primary outline-none transition-all placeholder:text-gray-300" placeholder="Ej: Juan Pérez" />
                </div>
                <div className="relative group">
                  <label className="text-[11px] font-black uppercase text-azulino tracking-widest mb-3 block">Nombre de la Empresa</label>
                  <input name="empresa" className="w-full bg-white border border-gray-200 p-4 text-azulino text-xs font-bold tracking-widest uppercase focus:border-primary outline-none transition-all placeholder:text-gray-300" placeholder="Ej: Constructora JVT" />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[11px] font-black uppercase text-azulino tracking-widest mb-3 block">Correo Electrónico</label>
                <input name="email" type="email" required className="w-full bg-white border border-gray-200 p-4 text-azulino text-xs font-bold tracking-widest uppercase focus:border-primary outline-none transition-all placeholder:text-gray-300" placeholder="ejemplo@correo.com" />
              </div>

              <div className="relative group">
                <label className="text-[11px] font-black uppercase text-azulino tracking-widest mb-3 block">Mensaje / Requerimiento</label>
                <textarea name="mensaje" required rows="4" className="w-full bg-white border border-gray-200 p-4 text-azulino text-xs font-bold tracking-widest uppercase focus:border-primary outline-none transition-all placeholder:text-gray-300" placeholder="Describa brevemente su proyecto o consulta técnica..."></textarea>
              </div>

              <motion.button 
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-azulino text-white py-6 font-black uppercase text-[10px] tracking-[0.4em] shadow-xl hover:bg-primary transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">{state.submitting ? 'PROCESANDO...' : 'ENVIAR SOLICITUD'}</span>
              </motion.button>
              
              {state.error && <p className="text-red-500 text-[10px] font-black uppercase text-center mt-4 tracking-widest">{state.error}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
