import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Grid } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine if the current page has a dark hero background at the top
  const hasDarkHero = ['/', '/contacto', '/proyectos', '/servicios', '/nosotros'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const activeStyle = "text-primary font-bold";
  const inactiveStyle = "text-text-muted hover:text-primary";
  // If we haven't scrolled, use white text on dark hero pages; otherwise black
  const topNavStyle = hasDarkHero ? 'text-white/80 hover:text-white' : 'text-text-muted hover:text-black';
  const logoTextColor = scrolled || isOpen || !hasDarkHero ? 'text-black' : 'text-white';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}
      style={!scrolled && hasDarkHero ? { background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)' } : {}}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-10 h-10 bg-primary flex items-center justify-center rounded shadow-lg shadow-primary/20"
          >
            <span className="text-white font-bold text-xl font-heading">JTV</span>
          </motion.div>
          <span className={`font-bold tracking-tighter text-xl font-heading hidden sm:block ${logoTextColor}`}>
             JTV SERVICIOS GENERALES
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <NavLink
                to={link.href}
                className={({ isActive }) => 
                  `text-sm font-semibold uppercase tracking-widest transition-colors ${isActive ? activeStyle : (scrolled ? inactiveStyle : topNavStyle)}`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          <Link
            to="/proyectos"
            className="btn py-2 px-5 flex items-center gap-2 text-xs"
          >
            <Grid size={14} />
            <span>PROYECTOS</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`${logoTextColor} md:hidden p-2 rounded-lg ${!scrolled && hasDarkHero ? 'bg-black/20 backdrop-blur-sm' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 w-full h-[100dvh] flex flex-col z-[100] bg-black"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 w-full">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded shadow-lg shadow-primary/20">
                  <span className="text-white font-bold text-xl font-heading">JTV</span>
                </div>
              </Link>
              <button className="text-white bg-white/10 p-2 rounded-lg" onClick={() => setIsOpen(false)}>
                <X size={32} />
              </button>
            </div>

            {/* Modal Links list */}
            <div className="flex-1 flex flex-col justify-center items-center gap-8 pb-20 px-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-2xl font-black tracking-widest uppercase transition-colors ${isActive ? 'text-primary' : 'text-white hover:text-gray-300'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="w-16 h-px bg-gray-800 my-4" />
              <Link 
                to="/proyectos" 
                className="btn justify-center py-4 px-10 mt-2 w-full max-w-[280px] bg-primary text-white hover:bg-primary-dark text-lg tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                VER PROYECTOS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
};

export default Navbar;
