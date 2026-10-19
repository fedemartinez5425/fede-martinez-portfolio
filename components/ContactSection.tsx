import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineFilePdf } from "react-icons/ai"
import { CV_URL, EMAIL, LINKEDIN_URL, whatsappLink } from "./contact"

const primaryBtn =
  "inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-transform hover:scale-105"
const secondaryBtn =
  "inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg border-2 border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-stone-800 transition"

const ContactSection = () => {
  return (
    <section id="contact" className="pt-20 md:pt-28">
      <h1 className="text-center font-bold text-3xl md:text-4xl">
        Hablemos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Clientes */}
        <div className="flex flex-col rounded-2xl border border-neutral-200 dark:border-stone-700 bg-neutral-50 dark:bg-stone-800/60 p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
            Para empresas y emprendedores
          </p>
          <h2 className="font-bold text-2xl mt-2">¿Tenés un proyecto en mente?</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mt-3 mb-6">
            Contame qué necesitás y te respondo con una propuesta. La primera charla no tiene costo.
          </p>
          <div className="mt-auto flex flex-col sm:flex-row gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              <FaWhatsapp size={20} /> WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Consulta por un proyecto")}`}
              className={secondaryBtn}
            >
              <AiOutlineMail size={20} /> Mail
            </a>
          </div>
        </div>

        {/* Reclutadores */}
        <div className="flex flex-col rounded-2xl border border-neutral-200 dark:border-stone-700 bg-neutral-50 dark:bg-stone-800/60 p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
            Para reclutadores y equipos
          </p>
          <h2 className="font-bold text-2xl mt-2">¿Buscás un analista de datos?</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mt-3 mb-6">
            Estoy abierto a nuevas oportunidades como Analista de Datos, BI o People Analytics, en
            modalidad remota o híbrida.
          </p>
          <div className="mt-auto flex flex-col sm:flex-row gap-3">
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              <AiOutlineFilePdf size={20} /> Ver CV
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
              <AiOutlineLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6">
        También podés escribirme a{" "}
        <a href={`mailto:${EMAIL}`} className="underline underline-offset-2 hover:text-teal-600">
          {EMAIL}
        </a>
      </p>
    </section>
  )
}

export default ContactSection
