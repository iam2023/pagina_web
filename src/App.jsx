import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // La página de carga durará 1.5 segundos para un acceso más ágil
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      <Router>
        <ScrollToTop />
      <div className="bg-white min-h-screen text-text selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
