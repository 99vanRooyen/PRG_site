import AboutUs from "../components/aboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function About() {
  return (
    <>
      {/* Full-screen background wrapper */}
      <div
        className="
          min-h-screen
          w-full
          flex
          flex-col
          bg-[url('./assets/Home-Bg.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
          text-white
        "
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <AboutUs />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default About;
