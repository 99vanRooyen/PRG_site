import AboutUs from "../components/aboutUs"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"

function About() {

  // Variables

  return (
    <>
      {/* Parent container to hold all about us page components */}
      <div className="flex flex-col items-start justify-start bg-[url('./assets/Home-Bg.jpg')] bg-no-repeat bg-center text-white">
        {/* Navbar component */}
        <Navbar />

        {/* Main About Us component */}
        <AboutUs />   

        {/* Footer component */}
        <Footer />   
      </div> 
    </> 
  )
}

export default About
