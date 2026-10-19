// Datos de contacto centralizados: si cambia algo, se cambia acá y listo.
export const WHATSAPP_NUMBER = "5492645802870"
export const EMAIL = "fedemarti0107@gmail.com"
export const CV_URL = "https://fedemartinez5425.github.io/federico-cv/"
export const GITHUB_URL = "https://github.com/fedemartinez5425"
export const LINKEDIN_URL = "https://www.linkedin.com/in/federicoluismartinez/"
export const YOUTUBE_URL = "https://www.youtube.com/@DataFinanceByFede"

export const whatsappLink = (
  message = "Hola Fede! Vi tu web y quería consultarte por un proyecto."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
