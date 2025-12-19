import Navbar from "../components/Navbar.jsx"
import HeroSection from "../components/heroSection.jsx"
import PrintingCategoriesSlider from "../components/printingCatergoriesSlider.jsx"
import Services from "../components/services.jsx"
import WhyChooseUs from "../components/whyChooseUs.jsx"
import StarRating from "../components/testamonials.jsx"
import LogoSlider from "../components/logoSlider.jsx"
import Footer from "../components/footer.jsx"
import useScrollReveal from "../hooks/useScrollReveal";
function Home() {
  useScrollReveal();

  return (
    <>
        {/* Parent container to hold all home page components */}
        <div className="flex flex-col items-start justify-start bg-[url('./assets/Home-Bg.jpg')] bg-no-repeat bg-center text-white">
            {/* Navbar component */}
            <Navbar />

            {/* Hero section component */}
            <HeroSection />

            {/* Marquee for different printing services offered */}
            <div data-reveal data-delay="80ms">
              <PrintingCategoriesSlider />
            </div>

            {/* Services component */}
            <div data-reveal data-delay="120ms">
              <Services />
            </div>

            {/* About paragraph component */}
            <div data-reveal data-delay="160ms">
              <WhyChooseUs />
            </div>

            {/* Testimonials component */}
            <div data-reveal data-delay="200ms">
              <StarRating />
            </div>

            {/* Logo marquee */}
            <div data-reveal data-delay="240ms">
              <LogoSlider />
            </div>

            {/* Footer component */}
            <Footer />
        </div>
    </>
  )
}

export default Home
