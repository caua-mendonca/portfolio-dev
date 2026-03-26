import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => (
  <>
    <CursorGlow />
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ExperienceSection />
    <CertificationsSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
