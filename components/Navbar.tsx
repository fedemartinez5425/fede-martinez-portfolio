"use client"

import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { FaWhatsapp } from "react-icons/fa"
import { CV_URL, whatsappLink } from "./contact"

const NAV_ITEMS = [
  { label: "Servicios", page: "services" },
  { label: "Proyectos", page: "projects" },
  { label: "Sobre mí", page: "about" },
  { label: "Mi CV", page: CV_URL },
]

const linkClass =
  "cursor-pointer text-neutral-800 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-400"

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbarOpen, setNavbarOpen] = useState(false)
  const close = () => setNavbarOpen(false)

  const items = NAV_ITEMS.map((item) =>
    item.page.startsWith("http") ? (
      <a key={item.label} href={item.page} target="_blank" rel="noopener noreferrer" className={linkClass} onClick={close}>
        {item.label}
      </a>
    ) : (
      <Link key={item.label} to={item.page} smooth offset={-80} duration={500} className={linkClass} onClick={close}>
        {item.label}
      </Link>
    )
  )

  const themeToggle = (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="bg-slate-100 p-2 rounded-xl w-fit"
      aria-label="Cambiar tema"
    >
      {currentTheme === "dark" ? <RiSunLine size={20} color="black" /> : <RiMoonFill size={20} />}
    </button>
  )

  const cta = (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-teal-700 transition w-fit"
      onClick={close}
    >
      <FaWhatsapp size={18} /> Contacto
    </a>
  )

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur shadow-md dark:border-b dark:border-stone-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-between py-3">
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <span className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">
              Federico Martinez
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-7">
            {items}
            {themeToggle}
            {cta}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neutral-800 dark:text-neutral-100"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Abrir menú"
          >
            {navbarOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {navbarOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-6 rounded-xl bg-white dark:bg-stone-900 p-6 shadow-lg">
              {items}
              {cta}
              {themeToggle}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
