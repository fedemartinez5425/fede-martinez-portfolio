import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { HiOutlineChartBar, HiOutlineCog, HiOutlineGlobeAlt, HiOutlineTrendingUp } from "react-icons/hi"
import { whatsappLink } from "./contact"

const SERVICES = [
  {
    icon: HiOutlineChartBar,
    title: "Dashboards de negocio",
    pitch: "Dejá de adivinar: mirá ventas, stock, costos y ganancias en un solo tablero.",
    items: [
      "Conecto tus Excel, Google Sheets o sistema actual",
      "Indicadores clave actualizados automáticamente",
      "Power BI, Tableau, Looker Studio o Streamlit",
    ],
    message: "Hola Fede! Me interesa un dashboard para mi negocio.",
  },
  {
    icon: HiOutlineCog,
    title: "Automatización de procesos",
    pitch: "Esa tarea que te lleva horas cada semana, que se haga sola.",
    items: [
      "Reportes que se generan y envían solos",
      "Limpieza y unificación de planillas",
      "Scripts en Python y flujos RPA",
    ],
    message: "Hola Fede! Quiero automatizar una tarea de mi trabajo.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Webs para emprendimientos",
    pitch: "Una web rápida y profesional para que te encuentren y te contacten.",
    items: [
      "Diseño moderno, adaptado a celular",
      "Botón de WhatsApp y formulario de contacto",
      "Opcional: tablero simple para seguir tus ventas",
    ],
    message: "Hola Fede! Necesito una web para mi emprendimiento.",
  },
  {
    icon: HiOutlineTrendingUp,
    title: "Herramientas de análisis financiero",
    pitch: "Modelos y apps a medida para analizar carteras, riesgo y escenarios.",
    items: [
      "Optimización y seguimiento de portafolios",
      "Métricas de riesgo: VaR, drawdown, Sharpe",
      "Modelos de scoring y simulaciones",
    ],
    message: "Hola Fede! Me interesa una herramienta de análisis financiero.",
  },
]

const STEPS = [
  { title: "Charla inicial", text: "Me contás qué necesitás. Sin costo y sin compromiso." },
  { title: "Propuesta clara", text: "Te paso alcance, tiempos y precio cerrado antes de arrancar." },
  { title: "Entrega y soporte", text: "Te lo entrego funcionando y te acompaño con los ajustes." },
]

const ServicesSection = () => {
  return (
    <section id="services" className="pt-16 md:pt-24">
      <h1 className="text-center font-bold text-4xl">
        Servicios
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <p className="text-center text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-12">
        Soluciones concretas, sin vueltas técnicas. Vos te enfocás en tu negocio; yo me ocupo de los datos.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map(({ icon: Icon, title, pitch, items, message }) => (
          <div
            key={title}
            className="flex flex-col rounded-2xl border border-neutral-200 dark:border-stone-700 bg-white dark:bg-stone-800/60 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/40 flex items-center justify-center mb-4">
              <Icon size={26} className="text-teal-600 dark:text-teal-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">{pitch}</p>
            <ul className="space-y-2 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
              {items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  {it}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 font-semibold text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100"
            >
              <FaWhatsapp /> Consultar →
            </a>
          </div>
        ))}
      </div>

      {/* Cómo trabajo */}
      <div className="mt-16 rounded-2xl bg-teal-600 text-white p-8 md:p-10">
        <h2 className="text-2xl font-bold text-center mb-8">¿Cómo trabajamos?</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-white text-teal-700 font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-teal-50 mt-1">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="text-center mt-8">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform"
          >
            <FaWhatsapp size={20} /> Escribime por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
