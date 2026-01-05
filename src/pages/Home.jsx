import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/heroSection.jsx";
import PrintingCategoriesSlider from "../components/printingCatergoriesSlider.jsx";
import Services from "../components/services.jsx";
import WhyChooseUs from "../components/whyChooseUs.jsx";
import StarRating from "../components/testamonials.jsx";
import LogoSlider from "../components/logoSlider.jsx";
import Footer from "../components/footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal";

// ✅ Import from src/assets (Vite-safe)
import homeBg from "../assets/Home-Bg.jpg";

function Home() {
  useScrollReveal();

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      {/* Optional: subtle overlay so text stays readable */}
      <div className="min-h-screen w-full bg-black/10">
        <Navbar />

        <HeroSection />

        <div data-reveal data-delay="80ms">
          <PrintingCategoriesSlider />
        </div>

        <div data-reveal data-delay="120ms">
          <Services />
        </div>

        <div data-reveal data-delay="160ms">
          <WhyChooseUs />
        </div>

        <div data-reveal data-delay="200ms">
          <StarRating />
        </div>

        <div data-reveal data-delay="240ms">
          <LogoSlider />
        </div>

        {/* If Footer has a white bg internally, it will still show white.
            Best fix is inside footer.jsx: set its container to bg-transparent.
            This wrapper helps, but can't override a hardcoded bg-white inside Footer. */}
        <div className="bg-transparent">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
