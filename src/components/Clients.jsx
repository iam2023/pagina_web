import { motion } from 'framer-motion';

const Clients = () => {
  // Array of logos from image1.png to image15.png
  const logos = Array.from({ length: 15 }, (_, i) => `/logo-clientes/image${i + 1}.png`);

  return (
    <section id="clientes" className="section bg-white py-24 border-y border-accent overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-8"
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-heading">ELLOS NOS RESPALDAN</span>
          <h2 className="text-4xl font-black text-azulino font-heading">Nuestros clientes confían en nosotros</h2>
        </motion.div>

        {/* Infinite Slider */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* Double the logos to create the seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-48 h-24 mx-12 flex items-center justify-center group"
              >
                <img 
                  src={logo} 
                  alt={`Cliente ${index + 1}`} 
                  className="max-w-full max-h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" 
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
