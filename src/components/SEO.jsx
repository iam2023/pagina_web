import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  name = 'JTV Servicios Generales SAC', 
  type = 'website',
  image = '/industrial_hero_jvt.png',
  url = 'https://jtvserviciosac.com', // Dominio actualizado
  schemaCustom = null
}) => {
  const siteTitle = title ? `${title} | ${name}` : name;

  // Esquema por defecto para JTV Servicios Generales como Negocio Local / Organización
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "JTV Servicios Generales SAC",
    "alternateName": "JTV Servicios",
    "image": image.startsWith('http') ? image : `${url}${image}`,
    "logo": `${url}/logo_jvt.png`, // Si existe un logo corporativo en la raíz
    "telephone": "+51 977 261 089",
    "email": "jtv.servicios.sac@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mza:1 Lt. 3 P.J. Virgen de Lourdes",
      "addressLocality": "Villa María Del Triunfo",
      "addressRegion": "Lima",
      "postalCode": "15816",
      "addressCountry": "PE"
    },
    "url": url,
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Perú"
    },
    "sameAs": [
      "https://www.facebook.com/jtvservicios", // Cambiar por enlaces reales si corresponden
      "https://www.instagram.com/jtvservicios"
    ]
  };

  const schemaToRender = schemaCustom || defaultSchema;

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
      <meta property='og:image' content={image.startsWith('http') ? image : `${url}${image}`} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={name} />
      
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image.startsWith('http') ? image : `${url}${image}`} />

      {/* Datos Estructurados JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaToRender)}
      </script>
    </Helmet>
  );
};

export default SEO;
