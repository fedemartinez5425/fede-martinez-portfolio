import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineYoutube, AiOutlineFilePdf } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { CV_URL, GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL, whatsappLink } from "./contact";

const SOCIALS = [
  { href: whatsappLink(), title: "WhatsApp", Icon: FaWhatsapp },
  { href: LINKEDIN_URL, title: "LinkedIn", Icon: AiOutlineLinkedin },
  { href: GITHUB_URL, title: "GitHub", Icon: AiOutlineGithub },
  { href: YOUTUBE_URL, title: "YouTube", Icon: AiOutlineYoutube },
  { href: CV_URL, title: "Ver CV", Icon: AiOutlineFilePdf },
];

const Footer = () => {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6 py-10 mt-20 border-t border-neutral-300 dark:border-stone-700">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <div>
          <h2 className="text-2xl font-bold text-teal-600">Fede Martinez</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
            Datos, dashboards y automatización · San Juan, Argentina
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
            Disponible para proyectos freelance y consultoría
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          {SOCIALS.map(({ href, title, Icon }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" title={title} aria-label={title}>
              <Icon
                size={28}
                className="hover:-translate-y-1 transition-transform text-neutral-600 dark:text-neutral-100 hover:text-teal-600"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Federico Martinez
      </div>
    </footer>
  );
};

export default Footer;
