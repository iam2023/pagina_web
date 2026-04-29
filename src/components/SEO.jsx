import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  name = 'JTV Servicios Generales SAC', 
  type = 'website',
  image = '/industrial_hero_jvt.png',
  url = 'https://www.jtvservicios.com' // Cambia esto por tu dominio real
}) => {
  const siteTitle = title ? `${title} | ${name}` : name;
  
  return (
    <Helmet>
      {/* Etiqueta de título estándar */}
      <title>{siteTitle}</title>
      
      {/* Etiquetas estándar de HTML */}
      <meta name='description' content={description} />
      
      {/* Etiquetas de Facebook / Open Graph (Para compartir en Redes, WhatsApp, etc) */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={siteTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={name} />
      
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
};

export default SEO;
