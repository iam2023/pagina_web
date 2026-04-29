import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import postsData from '../data/blog/posts.json';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = postsData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center">
        <div>
          <h1 className="text-4xl font-black text-[#002542] mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-primary font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  const recentPosts = postsData.filter(p => p.id !== post.id).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen font-body pb-32 pt-32"
    >
      <SEO 
        title={post.title} 
        description={post.excerpt}
        image={post.image}
      />
      
      <div className="container mx-auto px-8 max-w-6xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary font-bold uppercase tracking-widest text-[10px] mb-8 transition-colors">
          <ArrowLeft size={14} /> Volver a Noticias
        </Link>
        
        <div className="blog-grid-main">
          {/* Main Article Content */}
          <article className="blog-article-area">
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
                <span className="flex items-center gap-1 text-primary"><Calendar size={16} /> {post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-[#002542] bg-gray-100 px-2 py-1 rounded">{post.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[#002542] leading-[1.1] tracking-tighter font-headline uppercase">
                {post.title}
              </h1>
            </header>

            <div className="rounded-2xl overflow-hidden shadow-2xl mb-16 h-[300px] md:h-[450px]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dynamic HTML Content Injection from JSON */}
            <div 
              className="prose focus:outline-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Sidebar - Recent Posts */}
          <aside className="blog-sidebar-area">
            <div className="sticky top-32">
              <h3 className="text-2xl font-bold text-[#334155] mb-10 font-headline">
                Los más recientes
              </h3>
              
              <div className="flex flex-col gap-10">
                {recentPosts.length > 0 ? (
                  recentPosts.map((recent, index) => (
                    <Link 
                      key={recent.id} 
                      to={`/blog/${recent.slug}`}
                      className="group block"
                    >
                      {index === 0 ? (
                        /* First item: Text only as in image */
                        <div className="flex flex-col">
                          <h4 className="text-[#334155] font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                            {recent.title}
                          </h4>
                          <span className="text-gray-400 text-xs">
                            {recent.date}
                          </span>
                        </div>
                      ) : (
                        /* Subsequent items: Image + Text */
                        <div className="flex gap-4 items-start">
                          <div className="w-20 h-20 shrink-0 overflow-hidden rounded shadow-sm">
                            <img 
                              src={recent.image} 
                              alt={recent.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex flex-col pt-1">
                            <h4 className="text-[#334155] font-bold text-sm leading-tight mb-2 group-hover:text-primary transition-colors">
                              {recent.title}
                            </h4>
                            <span className="text-gray-400 text-[10px]">
                              {recent.date}
                            </span>
                          </div>
                        </div>
                      )}
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No hay más artículos recientes por ahora.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .blog-grid-main { display: flex; flex-direction: column; gap: 4rem; }
        @media (min-width: 1024px) {
          .blog-grid-main { display: grid !important; grid-template-columns: repeat(12, 1fr) !important; gap: 5rem; }
          .blog-article-area { grid-column: span 8 / span 8 !important; }
          .blog-sidebar-area { grid-column: span 4 / span 4 !important; padding-left: 3rem; border-left: 1px solid #f1f5f9; }
        }
        .prose { color: #334155; font-size: 1.125rem; line-height: 1.8; }
        .prose h2 { margin-top: 2.5em; margin-bottom: 1.25em; font-size: 2rem; text-transform: uppercase; letter-spacing: -0.025em; color: #002542; font-weight: 900; }
        .prose h3 { margin-top: 2em; margin-bottom: 0.75em; font-size: 1.5rem; color: #002542; font-weight: 800; }
        .prose p { margin-bottom: 1.75em; text-align: justify; }
        .prose ul { padding-left: 1.5em; list-style-type: disc; margin-bottom: 1.5em; }
        .prose li { margin-bottom: 0.75em; }
        .prose strong { color: #002542; font-weight: 800; }
        .prose img { width: 100%; height: auto; border-radius: 1rem; margin: 3rem 0; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
        .prose a { color: var(--color-primary); font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
      `}</style>
    </motion.div>
  );
};

export default BlogPostPage;
