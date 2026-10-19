import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ServicesSection from "@/components/ServicesSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
