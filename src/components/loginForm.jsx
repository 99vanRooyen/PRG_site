// The useState hook to allow us to add state management to functional components, enabling dynamic and interactive user interfaces
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {

  // Variables and constants
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials (temporary)
  const validEmail = "jason@printrebelgraphix.com";
  const validPassword = "J@5oN.3M@1L";

  // Handling the submit button's functionality
  const handleSubmit = (e) => {
    e.preventDefault();

    // If statement to check if the password and email address matches the valid credentials
    if (email === validEmail && password === validPassword) {
      navigate("/admin"); // Redirect to Admin.jsx route
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      
      {/* Parent container to hold the background and form */}
      <div className="min-h-screen flex justify-center items-center bg-[url('./assets/Home-Bg.jpg')] bg-no-repeat bg-center">

        {/* Sub container holding the heading and the form */}
        <div className="flex flex-col bg-[#9fb658e2] w-auto h-[500px] p-3 text-white rounded">

          {/* Heading for the form */}
          <h1 className="text-[#545f2c] text-center font-bold text-3xl py-3">
            PrintRebelGraphix Admin Login:
          </h1>

          {/* Form element */}
          <form onSubmit={handleSubmit} className="p-3 py-5 flex flex-col gap-6">

            {/* First label and input element to get the admin's email address */}
            <label className="text-[1.3em]">
              <span className="px-2">Email Address:</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black w-[300px] h-[30px] px-2"
              />
            </label>

            {/* Second label and input element to get the admin's password */}
            <label className="text-[1.3em]">
              <span className="px-6">Password:</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white text-black w-[300px] h-[30px] px-2"
              />
            </label>

            {/* Form submission button */}
            <button
              type="submit"
              className="bg-[#545f2c] hover:bg-[#545f2cb7] text-white px-4 py-2 rounded "
            >
              Login
            </button>

          </form>

          {/* Container holding the company's logo to display at the bottom of the form */}
          <div className="flex flex-col justify-start items-center mb-5">
            <img
              src="src/assets/printrebelgraphix_logo.svg"
              alt="Logo"
              className="w-60 mb-2 animate-pulse"
            />
          </div>

        </div>

      </div>
    </>
    
  );
}

export default Login;
