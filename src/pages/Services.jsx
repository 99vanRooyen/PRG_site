import Large_Format_Printing from "../components/large_Format_Printing";
import Sublimation_Printing from "../components/sublimation_Printing";
import Promotional_Printing from "../components/promotional_Printing";
import Screen_Printing from "../components/Screen_Printing"; // ✅ NEW
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import useScrollReveal from "../hooks/useScrollReveal";

// ✅ Vite: import images from src/assets
import homeBg from "../assets/Home-Bg.jpg";

function Services() {
  useScrollReveal();

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-black"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <Navbar />

      <h1 className="text-center text-5xl font-extrabold py-10 tracking-wide">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9fb658] to-[#545f2c]">
          SERVICES
        </span>
      </h1>

      <div className="flex flex-col items-center px-4 md:px-10">

        
        <Screen_Printing />
        <div className="h-8" />

        <Sublimation_Printing />
        <div className="h-8" />

        <Promotional_Printing />
        <div className="h-8" />

        <Large_Format_Printing /> {/* ✅ NEW BLOCK */}
      </div>

      <Footer />
    </div>
  );
}

export default Services;
