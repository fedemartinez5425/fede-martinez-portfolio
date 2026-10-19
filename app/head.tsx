export default function Head() {
  const title = "Federico Martinez | Dashboards, Automatización y Análisis de Datos";
  const description =
    "Analista de Datos en Argentina. Dashboards, automatización de procesos y análisis financiero para empresas y emprendedores. Abierto a proyectos freelance y nuevas oportunidades laborales.";

  const url = "https://fede-martinez-portfolio.vercel.app/";
  const image = "https://fede-martinez-portfolio.vercel.app/preview.png";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Federico Martinez" />
      <meta name="theme-color" content="#0f766e" />

      {/* Open Graph / LinkedIn / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon minimalista */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📊</text></svg>"
      />
    </>
  );
}

