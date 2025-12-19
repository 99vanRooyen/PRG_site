import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
 

export default function Footer ()  {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    // Parent container for the footer
    <div className="w-full">
      <br/>
      
      <div className="flex justify-center items-center flex-col text-black text-[1em] md:text-2xl">

        {/* In this  section the user can subscribe to get notifications about any new with the business and it will appear in their email */}
        <div className="flex flex-row justify-center py-5">
          <input type="text" value={text} onChange={handleChange} className="bg-[#ffffff8f] border-2 border-[#545f2c] w-50 md:w-100"/>
          <button className="bg-[#9fb658] hover:bg-[#545f2c] hover:text-white text-black border-2 border-l-0 border-[#545f2c]">
            SUBSCRIBE
          </button>
        </div>
        
        <p className="py-3 text-center"><b>for more information please contact us today</b></p>

        {/* If the user has any questions they can contact the business and the button will go their contact page where their information is */}    
        <button className="bg-[#9fb658] hover:bg-[#545f2c] hover:text-white text-black text-2xl font-semibold rounded-2xl shadow-lg transition px-2">
            Contact Us
        </button>
      </div>
      
      <br/>

      {/* Container to hold the business's info and nav links */}
      <div className="flex flex-col justify-start items-start text-black w-full py-4">
        <h1 className="font-bold text-2xl">Location</h1>
        <p className="md:text-[1.2em] lg:text-[1em]">Meyerton</p>
        <p className="md:text-[1.2em] lg:text-[1em]">Gauteng, South Africa</p>

        <h1 className="font-bold text-2xl mt-4">Contact</h1>
        <p className="md:text-[1.2em] lg:text-[1em]">printrebelgraphix@gmail.com</p>
        <p className="md:text-[1.2em] lg:text-[1em]">0747896913</p>

        <h1 className="font-bold text-2xl mt-4">Trading Hours</h1>
        <p className="md:text-[1.2em] lg:text-[1em]">Mon to Fri</p>
        <p className="md:text-[1.2em] lg:text-[1em]">8AM to 6PM</p>

        <h1 className="font-bold text-2xl mt-4">Menu</h1>
        <ul className="">
          <li className="hover:text-[#9fb658] hover:underline"><Link to="/">Home</Link></li>
          <li className="hover:text-[#9fb658] hover:underline"><Link to="/about">About</Link></li>
          <li className="hover:text-[#9fb658] hover:underline"><Link to="/blog">Blog</Link></li>
          <li className="hover:text-[#9fb658] hover:underline"><Link to="/services">Services</Link></li>
        </ul>
      </div>

    </div>
  )
}


