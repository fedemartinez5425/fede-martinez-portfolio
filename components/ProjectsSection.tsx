"use client"
import React, { useState } from "react";
import Image from "next/image";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";

type Project = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "🏆 Predicción Final Mundial 2026",
    description:
      "Modelo de Machine Learning con Elo dinámico, forma reciente, calibración de probabilidades, SHAP y 200.000 simulaciones Monte Carlo para estimar al campeón de la final Argentina vs España.",
    image: "/worldcup2026.png",
    tags: ["Machine Learning", "Python"],
  },
  {
    name: "📊 Advanced Portfolio Optimizer",
    description:
      "App para simular y optimizar portafolios con teoría moderna de carteras, costos de transacción y slippage. Sharpe, VaR, CVaR y drawdown.",
    image: "/portfolioopt.png",
    tags: ["Finanzas", "Streamlit"],
    link: "https://portfoliopt.streamlit.app/",
  },
  {
    name: "🚗 Uber Driver Analytics",
    description:
      "Análisis de rentabilidad para conductores con datos reales: ingresos por zona y horario, revenue por hora, eficiencia y mapas de viajes para optimizar decisiones.",
    image: "/uberdriver.png",
    tags: ["Análisis de datos", "Negocio"],
  },
  {
    name: "📈 OptionsPro Dashboard",
    description:
      "Dashboard para traders de opciones: cadenas, volatilidad y estrategias con datos de Yahoo Finance.",
    image: "/dashboard.PNG",
    tags: ["Finanzas", "Streamlit"],
    link: "https://optimaoptionspro.streamlit.app/",
  },
  {
    name: "Dashboard de Performance Regional (Power BI)",
    description:
      "Dashboard de ventas con métricas de cumplimiento, detección de outliers de eficiencia y reporte operativo de pedidos vs. envíos con DAX avanzado. Desafío para Lovelytics.",
    image: "/lovelytics-dashboard.png",
    tags: ["BI", "Power BI"],
  },
  {
    name: "Machine Learning — Rotación de empleados",
    description:
      "Modelo predictivo en Python, visualizado en Tableau, que identifica los factores asociados a la rotación de personal.",
    image: "/ml-hr.png",
    tags: ["People Analytics", "Tableau"],
    link: "https://public.tableau.com/app/profile/federico.martinez3300/viz/DashboardML-HR/Dashboard1",
  },
  {
    name: "Análisis Estadístico de ETFs",
    description:
      "Equity vs Bonds, Markowitz vs 60/40, correlaciones, PCA, HRP, VaR y CVaR, con conclusiones prácticas para distintos perfiles de inversor.",
    image: "/stastiscaletfs.png",
    tags: ["Finanzas", "Estadística"],
    github:
      "https://github.com/fedemartinez5425/Codigos-Youtube/blob/main/Data%20Analysis/Statistical%20Analysis%20for%20ETF's/2-script-etfs-simplified.ipynb",
  },
  {
    name: "Portfolio Financiero en Databricks",
    description:
      "Dashboard en Databricks para seguir un portafolio: retornos, riesgo y métricas agregadas para apoyar decisiones de inversión.",
    image: "/portfoliodatabricks.png",
    tags: ["Databricks", "Finanzas"],
    github: "https://github.com/fedemartinez5425/Databricks",
    link: "https://dbc-e78805c9-ae33.cloud.databricks.com/dashboardsv3/01f0ed9878de1586bd10251efedfdc9d/published?o=1775234182689834",
  },
  {
    name: "Score Crediticio con Machine Learning",
    description:
      "App que predice el score crediticio de clientes con Decision Trees y Random Forest.",
    image: "/creditscore.PNG",
    tags: ["Machine Learning", "Streamlit"],
    link: "https://creditscoremodel.streamlit.app/",
  },
  {
    name: "Scoring de acciones (en proceso)",
    description:
      "Modelo cuantitativo que evalúa y clasifica acciones según métricas fundamentales, técnicas y de riesgo.",
    image: "/scoringmodel.png",
    tags: ["Finanzas", "Python"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7355216612196519936",
  },
  {
    name: "Dashboard de ventas — Classic Models",
    description:
      "Dashboard ejecutivo en Tableau con ventas globales, márgenes y desempeño por línea de producto y región.",
    image: "/classicmodels.png",
    tags: ["BI", "Tableau"],
    link: "https://public.tableau.com/app/profile/federico.martinez3300/viz/ClassicModelsSalesDashboard/ResumenEjecutivo",
  },
  {
    name: "Optima Consulting & Management (2023–2025)",
    description:
      "Cofundador y analista. Dashboards financieros, automatizaciones RPA y modelos de datos para instituciones y operadores.",
    image: "/optima.png",
    tags: ["Consultoría", "RPA"],
    link: "https://www.optimafinancials.com/",
  },
  {
    name: "Canal de YouTube — Data Finance",
    description:
      "Canal educativo sobre Python y finanzas cuantitativas, con foco en automatización y visualización de datos.",
    image: "/github.png",
    tags: ["Contenido", "Python"],
    github: "https://github.com/fedemartinez5425",
    link: "https://www.youtube.com/@DataFinanceByFede",
  },
];

const INITIAL = 6;

const ProjectCard = ({ project }: { project: Project }) => {
  const main = project.link || project.github;
  const img = (
    <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-neutral-100 dark:bg-stone-800">
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );

  return (
    <article className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-stone-700 bg-white dark:bg-stone-800/60 shadow-sm hover:shadow-lg transition-shadow">
      {main ? (
        <a href={main} target="_blank" rel="noopener noreferrer" aria-label={project.name}>
          {img}
        </a>
      ) : (
        img
      )}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2">{project.name}</h3>
        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400 mb-4">
          {project.description}
        </p>
        <div className="mt-auto flex items-center gap-4 text-sm font-semibold">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-300 hover:underline"
            >
              Ver proyecto <BsArrowUpRight />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-700 dark:text-neutral-300 hover:underline"
            >
              <BsGithub /> Código
            </a>
          )}
          {!main && (
            <span className="text-neutral-500 dark:text-neutral-400 italic font-normal">
              🔒 Proyecto privado
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);

  return (
    <section id="projects" className="pt-20 md:pt-28">
      <h1 className="text-center font-bold text-4xl">
        Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <p className="text-center text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-12">
        Algunos trabajos de análisis, dashboards y finanzas cuantitativas.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      {projects.length > INITIAL && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-semibold px-6 py-3 rounded-lg border-2 border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-stone-800 transition"
          >
            {showAll ? "Ver menos" : `Ver todos los proyectos (${projects.length})`}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
