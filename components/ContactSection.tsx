import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { EMAIL, whatsappLink } from "./contact"

const ContactSection = () => {
  return (
    <section id="contact" className="pt-20 md:pt-28">
      <div className="rounded-2xl border border-neutral-200 dark:border-stone-700 bg-neutral-50 dark:bg-stone-800/60 p-8 md:p-12 text-center">
        <h1 className="font-bold text-3xl md:text-4xl">¿Tenés un proyecto en mente?</h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto mt-4">
          Contame qué necesitás y te respondo a la brevedad con una propuesta. La primera charla
          no tiene costo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-transform hover:scale-105"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Consulta desde tu web")}`}
            className="inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg border-2 border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-stone-800 transition"
          >
            <AiOutlineMail size={20} /> {EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
