import { motion } from 'framer-motion';
import { ArrowUpRight, MoveRight, MapPin, Calendar, Maximize } from 'lucide-react';
import SEO from '../components/SEO';

const projects = [
  {
    id: 1,
    title: "Planta de Almacenamiento Sur",
    category: "Estructura Metálica",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxy40eRmLKsleQWpe9SjDsRC3Ra0HmcIGsDgaMjCPoFTQQVyGhT00piSIV77sfgvyZLvKTc9VNa6wSsfNPDjZ0c300vtzKjHcrkIfWPs-XGHmw8wHMUIaZi4Jqz4_YUVpoYkM_CuV9MRpemS0kw8KIQ8ccLwIlZTVPx1ED1f1v2dwHuUc_sfVBdisKsvmJnoGIVPL8nlZM_rprCV3hnCBn34n9omA2yC2iRSH4g8SBYVuSNRY4eYEaPWHC8CTIoR4Ep2YT9_1Zzqw",
    location: "Lima, Perú",
    year: "2023",
    area: "12,500 m2",
    size: "large"
  },
  {
    id: 2,
    title: "Edificio Corporativo Vidriado",
    category: "Vidrio y Aluminio",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADE6eaEHNeCtx-eLMLwpw7ytF3fALZUm114lKOSgtC9eRKNpIaIiUT2qPf2J8FzmxC94CnpYLu8o4PhszEfUJHKGhZ7J5yucgWpkLM1qRFmYdmVoBAtFKywOexXAX4aS_PUZSAEI1XB6qn-h0cW4s2-wBuErdM_38CdLyxttBJid0TAC8nl36vQSUmWtjmd-_x0UN3Ml97p__GgjpOWLgTEHRetxasZBMPY4QleG_fGe4Xu8GA2vuvLiNL417tdNYPsEwpMMG_eMc",
    location: "Lima, Perú",
    year: "2022",
    area: "4,200 m2",
    size: "small"
  },
  {
    id: 3,
    title: "Nave Industrial Allemant",
    category: "Pintura Industrial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPg8tTs52mfZBo7DCdb4CxGQEyAydnnXmO-CNGmKl9wbk_1cGvTJN3JCq1G4U7mPxaWAZ7YGdUHNDpCWGewK0YysQzyRWUMGRpAjHT1WlD9toK3VOzBQfjYwDUsudehco-CIzhpT9ahLua2pgBaqVTXGDUDOqIGyA3q29TrjpMnfpV1AwyKrLCxcBwBRek8jo6RzCFv_hLr4LdqV9P57tRj1R7I0tvSNq0J6Js3nJ5mIRL5q9tYrMJ0I7lTnpdOv3ZykzCmKgHCc4",
    location: "Arequipa, Perú",
    year: "2023",
    area: "8,900 m2",
    size: "medium"
  },
  {
    id: 4,
    title: "Data Center Nacional",
    category: "Pisos Técnicos",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL1JXEkdCJxRDXYrmwbVc2iIJEbBDbaNLJE8dVbSOhlsV80sBCChfInNDqpgk3RNbZhZ0iJaiDUFoxygWn2MsQ_zSaHBZpt4GFDhNVkMWXD15223ZtRlewcAJ18NwwJy2JIdKMqkZXntQdOgrFLrd1eAilfZr-HHkt0PV5JNVWhEZTZNy04z8Ln6Z4xGEa6XUrUcWzG12OaCb57P0nYpxL-K_SI698OFy05D9ZqPjnt6gUig-AlLcf6nQS7i5lmnErtjproU-zJUs",
    location: "Lima, Perú",
    year: "2021",
    area: "1,500 m2",
    size: "medium"
  },
  {
    id: 5,
    title: "Puente Industrial Norte",
    category: "Obras Civiles",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzewR3I12MtCcBPlpHhAW_7o6uH7lIUjq3VvqNl0lP-VWDyv9AIXka92qGr8BNGp1gZW87ovo6UHKR_Omd5Dat4QOSN3RlVmTPnaD5tv1K4eqsa04H5F6u6AfMvgSNFNjjpTiOSKpDLMkMqvQHUO21NQWTCoVfBDd3Asuaj8rgRj7xqjLaBqsPlS_iepb3PyR7rNwa3gj--iuupsyyAu04hzxq8WwDkyEvToOC4zUAcndzTl17lhThsEbxIg5_SyDET0iUdMzYuiQ",
    location: "Piura, Perú",
    year: "2024",
    area: "320 m",
    size: "medium"
  }
];

const categories = [
  "Todos",
  "Estructuras Metálicas",
  "Pintura Industrial",
  "Vidrio y Aluminio",
  "Pisos Técnicos",
  "Obras Civiles"
];

const ProjectsPage = () => {
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUAS0vMYiXfGD0yqnfJCF2fLp-7AqHTI6LNlPNDY6yUpUdoEf0rnoDX1TyiYd0N5kNh6wjq8Fq2wrd--WhQoNeEUtMBE6diXpyPKTCuu2Pa2ct2GSuE5I2J3T2f6EzGBuI-qSCy9oEotBoZSUHJIIJRBwyWFaq2l21I7spOdxzDIOTjtmEqa5eOauSoK85G5lBEaAO44yH8C51nKZhf7iwn_AJwbvFCDfU7zKe7IAv-8r0LYtKzckdLCYUEPocSd4zU7DnEb_CJcE"
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
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6 uppercase font-headline">
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
          {categories.map((cat, idx) => (
            <button 
              key={cat}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                idx === 0 
                ? "bg-primary text-white" 
                : "bg-gray-100 text-gray-500 hover:text-primary"
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Feature Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative overflow-hidden bg-gray-100 h-[500px]"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={projects[0].image} alt="Industrial warehouse" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end">
                <div>
                  <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block">Estructura Metálica</span>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight font-headline">Planta de Almacenamiento Sur</h3>
                  <div className="flex gap-4 mt-4">
                    <div className="text-white/70 text-[0.7rem] uppercase tracking-wider">
                      <span className="block font-bold text-white">Ubicación</span> Lima, Perú
                    </div>
                    <div className="text-white/70 text-[0.7rem] uppercase tracking-wider">
                      <span className="block font-bold text-white">Año</span> 2023
                    </div>
                    <div className="text-white/70 text-[0.7rem] uppercase tracking-wider">
                      <span className="block font-bold text-white">Área</span> 12,500 m2
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="text-white w-10 h-10 font-light" />
              </div>
            </motion.div>

            {/* Side Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 group relative overflow-hidden bg-gray-50 h-[500px]"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={projects[1].image} alt="High-rise facade" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block">Vidrio y Aluminio</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 font-headline">Edificio Corporativo Vidriado</h3>
                <div className="text-white/70 text-[0.65rem] uppercase font-medium">Lima · 2022 · 4,200 m2</div>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-4 group relative overflow-hidden bg-gray-50 h-[400px]"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={projects[2].image} alt="Industrial pipes" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block">Pintura Industrial</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight font-headline">Nave Industrial Allemant</h3>
                <div className="text-white/70 text-[0.65rem] uppercase font-medium mt-2">Arequipa · 2023 · 8,900 m2</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 group relative overflow-hidden bg-gray-50 h-[400px]"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={projects[3].image} alt="Server room" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block">Pisos Técnicos</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight font-headline">Data Center Nacional</h3>
                <div className="text-white/70 text-[0.65rem] uppercase font-medium mt-2">Lima · 2021 · 1,500 m2</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 group relative overflow-hidden bg-gray-50 h-[400px]"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={projects[4].image} alt="Civil engineering site" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block">Obras Civiles</span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight font-headline">Puente Industrial Norte</h3>
                <div className="text-white/70 text-[0.65rem] uppercase font-medium mt-2">Piura · 2024 · 320 m</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-8 border-y border-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4 font-headline">¿Tienes un proyecto en mente?</h2>
            <p className="text-lg text-gray-500 leading-relaxed">Nuestro equipo de ingenieros está listo para transformar sus planos en estructuras sólidas y seguras.</p>
          </div>
          <button className="group flex items-center gap-4 bg-tertiary text-[#291800] px-10 py-5 rounded-lg font-black uppercase tracking-widest hover:bg-tertiary-dark transition-all">
            Iniciar Cotización
            <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;

