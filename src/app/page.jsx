import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

const Homepage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#090c17]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
