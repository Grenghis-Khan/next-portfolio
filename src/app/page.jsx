import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

const Homepage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#090c17]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
};

export default Homepage;
