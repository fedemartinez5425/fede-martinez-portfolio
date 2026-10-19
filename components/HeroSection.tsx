"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { FaWhatsapp } from "react-icons/fa"
import { CV_URL, LINKEDIN_URL, whatsappLink } from "./contact"

const HIGHLIGHTS = [
  "People Analytics en Hanesbrands / Gildan",
  "Python, SQL, Power BI y Tableau",
  "+12 proyectos de datos y finanzas",
]

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn mt-24 mb-6 py-10 sm:py-20 md:py-32 md:flex-row md:space-x-10 md:text-left">
        {/* Imagen */}
        <div className="md:w-2/5 flex justify-center">
          <Image
            src="/headshot3.png"
            alt="Federico Martinez"
            width={360}
            height={360}
            priority
            className="rounded-full shadow-2xl border-4 border-teal-600 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
          />
        </div>

        {/* Texto */}
        <div className="md:w-3/5 mt-8 md:mt-0">
          <p className="text-teal-600 dark:text-teal-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Analista de Datos · BI · Automatización · Finanzas
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Convierto tus datos en{" "}
            <span className="text-teal-600 dark:text-teal-400">decisiones claras</span>
          </h1>
          <p className="text-lg mt-5 mb-7 md:text-xl text-neutral-700 dark:text-neutral-300">
            Hola, soy Fede 👋. Ayudo a empresas, emprendedores y profesionales a{" "}
            <span className="font-semibold">
              ver qué está pasando en su negocio, automatizar tareas repetitivas y analizar inversiones
            </span>{" "}
            con dashboards, Python y análisis financiero.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 bg-teal-600 rounded-lg shadow hover:bg-teal-700 transition-transform hover:scale-105"
            >
              <FaWhatsapp size={20} /> Hablemos de tu proyecto
            </a>
            <Link
              to="services"
              smooth={true}
              offset={-90}
              duration={500}
              className="inline-flex items-center justify-center cursor-pointer font-semibold px-6 py-3 rounded-lg border-2 border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-stone-800 transition"
            >
              Ver servicios
            </Link>
          </div>

          <p className="mt-5 text-sm text-neutral-600 dark:text-neutral-400">
            ¿Buscás sumar un analista de datos a tu equipo?{" "}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 dark:text-teal-300 underline underline-offset-2 hover:text-teal-900 dark:hover:text-teal-100"
            >
              Mirá mi CV
            </a>{" "}
            o{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 dark:text-teal-300 underline underline-offset-2 hover:text-teal-900 dark:hover:text-teal-100"
            >
              escribime por LinkedIn
            </a>
            .
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start text-sm text-neutral-600 dark:text-neutral-400">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center">
        <Link to="services" smooth={true} offset={-90} duration={500} className="cursor-pointer" aria-label="Bajar a servicios">
          <HiArrowDown size={45} className="animate-bounce text-teal-600" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
