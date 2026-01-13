import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://thekalesh.com";

export default function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "https://thekalesh.com/og-image.jpg",
  twitterTitle,
  twitterDescription,
  twitterImage = "https://thekalesh.com/og-image.jpg"
}) {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Kalesh",
          "url": "${SITE_URL}",
          "description": "India's first anonymous opinion and real-time polling social platform for Gen Z."
        }
      `}
      </script>
    </Helmet>
  );
}