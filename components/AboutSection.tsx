import React from "react";

const skills = [
  "Python",
  "SQL",
  "Git & GitHub",
  "Databricks",
  "Apache Spark",
  "Apache Airflow",
  "ETL & Data Pipelines",
  "AWS",
  "Google Cloud Platform",
  "Tableau",
  "Power BI",
  "Streamlit",
  "Excel Avanzado",
  "Automatización (RPA)",
];

const AboutSection = () => {
  return (
    <section id="about" className="pt-20 md:pt-28">
      <h1 className="text-center font-bold text-4xl">
        Sobre mí
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="mt-8 flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
        <div className="md:w-1/2 space-y-4 text-neutral-700 dark:text-neutral-300 leading-7">
          <h2 className="text-2xl font-bold text-center md:text-left text-neutral-900 dark:text-neutral-100">
            Negocio + tecnología 🚀
          </h2>

          <p>
            Soy estudiante avanzado de <strong>Administración de Empresas</strong> con foco en{" "}
            <strong>datos, automatización y análisis financiero</strong>. Entiendo cómo funciona un
            negocio y tengo las herramientas técnicas para transformar sus datos en decisiones.
          </p>

          <p>
            Hoy trabajo en <strong>Hanesbrands / Gildan</strong>, automatizando procesos y
            desarrollando <strong>soluciones de People Analytics</strong> para Recursos Humanos:
            mejor calidad de datos, menos tareas manuales y más información para decidir.
          </p>

          <p>
            En 2023 cofundé <strong>Optima Consulting & Management LLC</strong>, donde diseñé{" "}
            <strong>dashboards ejecutivos, automatizaciones (RPA)</strong> y modelos de datos para
            mejorar la eficiencia operativa de nuestros clientes.
          </p>

          <p>
            Además desarrollo proyectos propios de <strong>finanzas cuantitativas</strong> y machine
            learning aplicado a negocios, y los comparto en mi{" "}
            <a
              href="https://www.youtube.com/@DataFinanceByFede"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
            >
              canal de YouTube
            </a>
            .
          </p>
        </div>

        {/* Skills */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Herramientas</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 dark:bg-gray-700 px-4 py-2 text-gray-700 dark:text-gray-200 rounded font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
