import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center"
      >
        {/* 
          ZONA PARA CAMBIAR EL LOGO FÁCILMENTE
          Si en el futuro deseas colocar una imagen en lugar de letras,
          solamente borra el <h1> de abajo y descomenta la línea de <img> 
          colocando la ruta de tu imagen!
        */}
        
        {/* <img src="/tu-logo-oficial.png" alt="Logo" className="w-[180px] object-contain" /> */}

        <h1 className="text-white font-black text-5xl md:text-7xl tracking-[0.2em] text-center flex flex-col gap-2">
          JTV
          <span className="text-[#dc2626] tracking-[0.3em] font-bold text-3xl md:text-4xl mt-2">
            SERVICIOS INTEGRALES
          </span>
        </h1>
        
        {/* Barra de progreso de carga visual */}
        <div className="relative mt-12 w-48 h-[2px] bg-gray-800 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#dc2626]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
