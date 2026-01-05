import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

export default function Footer() {
  const [text, setText] = useState('')

  return (
    <footer className="w-full border-t border-[#9fb658]/40 mt-10">

      {/* Newsletter / CTA section */}
      <div className="flex flex-col items-center text-black text-base md:text-lg py-10 gap-4">

        <div className="flex">
          <input
            type="email"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your email"
            className="bg-white/70 border-2 border-[#545f2c] px-4 py-2 w-64 md:w-96 focus:outline-none"
          />
          <button className="bg-[#9fb658] hover:bg-[#545f2c] hover:text-white text-black border-2 border-l-0 border-[#545f2c] px-6 transition font-semibold">
            SUBSCRIBE
          </button>
        </div>

        <p className="font-semibold text-center">
          For more information please contact us today
        </p>

        <Link to="/contact">
          <button className="bg-[#9fb658] hover:bg-[#545f2c] hover:text-white text-black font-semibold rounded-full shadow-lg transition px-6 py-2">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Footer main content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 py-10 text-black">

        {/* Location */}
        <div>
          <h2 className="font-bold text-xl mb-2">Location</h2>
          <p>Meyerton</p>
          <p>Gauteng, South Africa</p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-bold text-xl mb-2">Contact</h2>
          <p>printrebelgraphix@gmail.com</p>
          <p>074 789 6913</p>
        </div>

        {/* Trading Hours */}
        <div>
          <h2 className="font-bold text-xl mb-2">Trading Hours</h2>
          <p>Mon – Fri</p>
          <p>8AM – 6PM</p>
        </div>

        {/* Menu */}
        <div>
          <h2 className="font-bold text-xl mb-2">Menu</h2>
          <ul className="space-y-1">
            <li className="hover:text-[#9fb658] transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#9fb658] transition">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#9fb658] transition">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-[#9fb658] transition">
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social media bar */}
      <div className="flex justify-center items-center gap-6 pb-8">

        <a
          href="https://www.facebook.com/profile.php?id=61574910007705"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#9fb658] transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/printrebelgraphix?igsh=MThna3F5MGs5bnBrMg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#9fb658] transition"
        >
          <FaInstagram />
        </a>

        <a
          href="tiktok.com/@printrebelgraphix"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#9fb658] transition"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#9fb658] transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-[#9fb658] transition"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-black/70 pb-4">
        © {new Date().getFullYear()} PrintRebel Graphix. All rights reserved.
      </div>

    </footer>
  )
}
