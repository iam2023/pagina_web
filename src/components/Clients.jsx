import { motion } from 'framer-motion';

const Clients = () => {
  return (
    <section id="clientes" className="section bg-white py-24 border-y border-accent">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">ELLOS NOS RESPALDAN</span>
          <h2 className="text-4xl font-black">Nuestros clientes confían en nosotros</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full max-w-5xl mx-auto px-4"
        >
          <img 
            src="/images/clientes/clientes.webp" 
            alt="Logotipos de nuestros clientes y marcas que confían en nosotros" 
            className="w-full h-auto object-contain drop-shadow-sm hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>
      
      <style>{`
        .text-primary { color: var(--color-primary); }
      `}</style>
    </section>
  );
};

export default Clients;
