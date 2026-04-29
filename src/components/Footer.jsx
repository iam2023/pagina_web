import { Link } from 'react-router-dom';
import { Phone, MapPin, Calendar, Facebook, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="relative bg-[#001220] text-white pt-24 overflow-hidden">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="container relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary flex items-center justify-center font-black text-azulino text-xl">JTV</div>
              <div>
                <div className="text-xs font-black tracking-[0.3em] opacity-40 uppercase">Servicios Generales</div>
                <div className="text-xl font-black tracking-tighter uppercase font-headline">Grupo JTV</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Líderes en ingeniería estructural y mantenimiento industrial en el Perú, 
              comprometidos con la excelencia técnica y la seguridad ocupacional.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary transition-all group">
                <Facebook size={16} className="group-hover:text-azulino" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary transition-all group">
                <Instagram size={16} className="group-hover:text-azulino" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary transition-all group">
                <Youtube size={16} className="group-hover:text-azulino" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-primary font-black uppercase text-[10px] tracking-[0.4em] mb-10">Explorar</h4>
            <ul className="space-y-4">
              {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></div> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-primary font-black uppercase text-[10px] tracking-[0.4em] mb-10">Contacto Directo</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-primary" size={20} />
                <div>
                  <div className="text-[10px] font-black uppercase opacity-30 mb-1">Central Telefónica</div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">+51 951 336 142</div>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-primary" size={20} />
                <div>
                  <div className="text-[10px] font-black uppercase opacity-30 mb-1">Dirección Principal</div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">Lima, Perú</div>
                  <div className="text-[9px] font-bold text-white/30 uppercase mt-1">Sede VMT - Operaciones Nacionales</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Tags */}
          <div className="bg-white/5 p-8 rounded-sm">
            <h4 className="text-primary font-black uppercase text-[10px] tracking-[0.4em] mb-6">Operatividad</h4>
            <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
              <div>
                <span className="text-white">Lun - Vie:</span> <br /> 08:00 AM - 06:00 PM
              </div>
              <div>
                <span className="text-white">Sáb:</span> <br /> 09:00 AM - 01:00 PM
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-[8px] bg-primary/20 text-primary px-3 py-1 inline-block border border-primary/30">
                  COBERTURA NACIONAL
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black tracking-[0.3em] uppercase text-white/20">
            © {new Date().getFullYear()} JTV SERVICIOS GENERALES SAC. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[9px] font-black tracking-[0.3em] uppercase text-white/40">
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/51951336142" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <div className="absolute -inset-2 bg-[#25D366]/20 rounded-full animate-ping pointer-events-none"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
