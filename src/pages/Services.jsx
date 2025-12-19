import Large_Format_Printing from "../components/large_Format_Printing";
import Sublimation_Printing from "../components/sublimation_Printing";
import Promotional_Printing from "../components/promotional_Printing";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import useScrollReveal from "../hooks/useScrollReveal";

// ✅ Import background image so Vite bundles it correctly (works on Netlify)
import homeBg from "../assets/Home-Bg.jpg"; // make sure this matches your actual filename + extension + casing

function Services() {
  useScrollReveal();

  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-repeat bg-center text-black"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        {/* Navbar component */}
        <Navbar />

        <h1 className="text-center text-5xl font-extrabold py-6 tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9fb658] to-[#545f2c]">
            SERVICES
          </span>
        </h1>

        {/* Large Format Printing component */}
        <Large_Format_Printing />
        <div className="h-6" />

        {/* Sublimation Printing component */}
        <Sublimation_Printing />
        <div className="h-6" />

        {/* Promotional Printing component */}
        <Promotional_Printing />

        {/* Footer component */}
        <Footer />
      </div>
    </>
  );
}

export default Services;
