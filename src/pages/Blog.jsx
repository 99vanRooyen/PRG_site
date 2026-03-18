import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import homeBg from "../assets/Home-Bg.webp";

function Blog() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    navigate(-1);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {showPopup && (
        <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full text-center border border-[#9fb658]/30">
          
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#545f2c] to-[#9fb658] bg-clip-text text-transparent mb-3">
            Something Big is Coming
          </h1>

          <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
            We’re building a powerful blog packed with insights, tips, and creative inspiration 
            to help your brand stand out.
          </p>

          <p className="text-gray-600 text-xs md:text-sm mb-6">
            Trust us… it’s going to be worth the wait.
          </p>

          <button
            onClick={handleClose}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#545f2c] to-[#9fb658] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Back to Site
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;