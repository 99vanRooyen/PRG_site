// src/pages/Contact.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Contact() {
  const [showFeedback, setShowFeedback] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
      <>
        {/* Parent container with same background as About page */}
      <div className="flex flex-col items-start justify-start bg-[url('./assets/Home-Bg.jpg')] bg-cover bg-no-repeat bg-center text-white px-1 min-h-screen">
          
          {/* Navbar component */}
          <Navbar />

          {/* Main Contact section */}
          <div className="w-[95%] mx-auto h-auto flex flex-col items-center justify-center bg-[#b8d46593] text-black px-5 py-10 lg:px-15 lg:py-10 rounded mt-10 shadow-lg border-2 border-[#545f2c]">
          
          <h1 className="text-3xl font-bold text-center mb-6 animate-fadeIn">Contact Us</h1>

            {/* Contact Information */}
          <div className="mb-6 text-center space-y-2 animate-fadeIn delay-200">
              <p className="text-lg font-semibold">JASON MC GREGOR</p>
              <p className="relative group">
              <a 
                  href="tel:0747896913"
                  className="underline hover:text-[#545f2c] transition"
              >
                  074 789 6913
              </a>
              </p>
              <p className="relative group">
              <a
                  href="mailto:jason@printrebelgraphix.com"
                  className="underline hover:text-[#545f2c] transition"
              >
                  jason@printrebelgraphix.com
              </a>
              </p>
              <p className="pt-4 text-sm">Based in South Africa – Serving clients worldwide</p>
              <p className="text-sm">Mon – Sat: 8:00 AM – 6:00 PM</p>
          </div>

            {/* Contact Form */}
          <form className="flex flex-col space-y-4 w-full max-w-lg animate-fadeIn delay-400">
              <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#545f2c] transition"
              />
              <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#545f2c] transition"
              />
              <textarea
              placeholder="Your Message"
              rows="4"
              className="border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#545f2c] transition"
              ></textarea>
              <button
              type="submit"
              className="bg-gradient-to-r from-[#545f2c] to-[#6f7e3e] hover:from-[#6f7e3e] hover:to-[#545f2c] text-white py-3 rounded-md font-semibold shadow-md transition transform hover:-translate-y-1 hover:shadow-xl"
              >
              Send Message
              </button>
          </form>

          {/* Feedback Button */}
          <div className="mt-6 w-full flex justify-center animate-fadeIn delay-500 relative">
            <button
              onClick={() => setShowFeedback(!showFeedback)}
              className="bg-[#545f2c] text-white px-4 py-2 rounded-full text-sm hover:bg-[#6f7e3e] transition"
            >
              Feedback
            </button>
          </div>

          {/* Feedback Form (toggle visibility) */}
          {showFeedback && (
            <div className="mt-6 w-full max-w-lg flex flex-col space-y-4 bg-[#b8d46593] p-5 rounded-md shadow-lg border-2 border-[#545f2c] animate-fadeIn delay-600">
              <h2 className="font-semibold text-lg text-black">We value your feedback</h2>
              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#545f2c] transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#545f2c] transition"
              />
              <textarea
                placeholder="Your Feedback"
                rows="3"
                className="border p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#545f2c] transition"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#545f2c] to-[#6f7e3e] hover:from-[#6f7e3e] hover:to-[#545f2c] text-white py-2 rounded-md font-semibold transition"
              >
                Submit Feedback
              </button>
            </div>
          )}

            {/* Google Map */}
          <div className="mt-10 w-full max-w-lg h-64 rounded overflow-hidden shadow-lg animate-fadeIn delay-600">
              <iframe
              title="Meyerton Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.343212813978!2d28.340215!3d-26.497066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956c5b9a6a9b1f%3A0x2195e58b75e6b39c!2sMeyerton%2C%20Gauteng%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1694840000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>

            {/* Extra Info Section */}
          <div className="mt-10 text-center space-y-3 animate-fadeIn delay-800">
              <h2 className="text-xl font-semibold">Other Ways to Connect</h2>
              <p>Follow us on social media for updates & design showcases:</p>
              <div className="flex gap-5 justify-center">
              <a href="https://www.facebook.com/profile.php?id=61574910007705" target="_blank" rel="noopener noreferrer" className="hover:text-[#545f2c] transition">Facebook</a>
              <a href="https://www.instagram.com/printrebelgraphix?igsh=MThna3F5MGs5bnBrMg==" target="_blank" rel="noopener noreferrer" className="hover:text-[#545f2c] transition">Instagram</a>
              <a href="tiktok.com/@printrebelgraphix" target="_blank" rel="noopener noreferrer" className="hover:text-[#545f2c] transition">Tiktok</a>
              <a href="https://m.youtube.com/channel/UCQjDG9zLJNbYWEP9eraTO-Q/videos" target="_blank" rel="noopener noreferrer" className="hover:text-[#545f2c] transition">YouTube</a>
              <a href="https://www.linkedin.com/in/jason-mcgregor-bb6277396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-[#545f2c] transition">Linkedin</a>
              </div>
          </div>

          </div>

          {/* Footer component */}
          <Footer />

        {/* Animation styles */}
      <style>
      {`
          @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
          }

          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
      `}
      </style>

      </div>
      </>
  );
}

export default Contact;
