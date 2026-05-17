import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import postsData from '../data/blog/posts.json';

const BlogPage = () => {
  const featuredPost = postsData.find(p => p.isFeatured) || postsData[0];
  const regularPosts = postsData.filter(p => p.id !== featuredPost.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white font-body"
    >
      <SEO title="Blog Técnico | JTV Services" description="Explorando la ingeniería de precisión y el futuro del sector industrial." />

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] flex items-center pt-20 overflow-hidden bg-[#001c3d]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/fondos/nosotros.webp" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001c3d] via-[#001c3d]/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="max-w-2xl">
            <span className="bg-[#dc2626] text-white text-[10px] font-black uppercase tracking-[0.2em] py-1 px-3 mb-6 inline-block">
              CONOCIMIENTO DE INGENIERÍA
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 font-headline uppercase">
              Blog <br />Técnico
            </h1>
            <p className="text-white/70 text-lg font-medium leading-relaxed max-w-lg">
              Explorando la ingeniería de precisión, innovación en estructuras metálicas y el futuro del sector industrial peruano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Content Only */}
      <section className="relative py-32 min-h-screen bg-[#fcfdfe]">
        {/* Dotted Pattern Pattern as background dots */}
        <div className="absolute inset-0 z-0 opacity-40" style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
          backgroundSize: '40px 40px' 
        }}></div>

        <div className="container mx-auto px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* 1. First 3 posts - Always visible */}
            {regularPosts.slice(0, 3).map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}

            {/* 2. Featured Horizontal Card - Full width on MD+ */}
            {featuredPost && (
              <div className="md:col-span-3 lg:col-span-3 py-4">
                <FeaturedCard post={featuredPost} />
              </div>
            )}

            {/* 3. Remaining posts */}
            {regularPosts.slice(3).map((post, i) => (
              <BlogCard key={post.id} post={post} index={i + 3} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const BlogCard = ({ post, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-sm"
  >
    <div className="relative h-64 overflow-hidden bg-gray-100">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        loading="lazy"
      />
      <div className="absolute top-4 left-4 bg-[#dc2626] text-white text-[10px] font-black uppercase tracking-[0.15em] py-1 px-4 shadow-lg">
        {post.category}
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold mb-4 uppercase tracking-[0.1em]">
        <span className="flex items-center gap-1"><Calendar size={14} className="text-primary" /> {post.date}</span>
        <span className="flex items-center gap-1"><Clock size={14} className="text-primary" /> {post.readingTime}</span>
      </div>
      <h3 className="text-xl font-bold text-[#001c3d] leading-tight mb-4 group-hover:text-primary transition-colors h-14 overflow-hidden line-clamp-2 uppercase font-headline tracking-tighter">
        {post.title}
      </h3>
      <p className="text-gray-500 text-[13px] leading-relaxed mb-6 line-clamp-3">
        {post.excerpt}
      </p>
      <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[#001c3d] font-black text-[10px] uppercase tracking-widest hover:text-primary transition-all">
        LEER ARTÍCULO <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const FeaturedCard = ({ post }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }} 
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="group flex flex-col md:flex-row bg-[#f3f7ff] overflow-hidden rounded-sm hover:shadow-2xl transition-all duration-700 border border-gray-100"
  >
    <div className="md:w-1/2 relative h-80 md:h-450 overflow-hidden bg-gray-200">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
    </div>
    <div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
      <span className="bg-[#001c3d] text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 mb-8 inline-block max-w-fit shadow-lg">
        {post.category}
      </span>
      <h2 className="text-3xl md:text-5xl font-black text-[#001c3d] leading-[1.05] tracking-tight mb-8 uppercase font-headline">
        {post.title}
      </h2>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
        {post.excerpt}
      </p>
      <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-[#001c3d] font-black text-[11px] uppercase tracking-widest hover:text-primary transition-all">
        VER DETALLES DEL CASO <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

export default BlogPage;
