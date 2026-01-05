import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    location.pathname === "/admin"
  );

  const handleSignOut = () => {
    setIsAdminLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {/* White navbar */}
      <nav className="w-full bg-white text-black shadow-md p-3 lg:text-[1.1em]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">

          {/* Mobile: Logo */}
          <div className="flex md:hidden items-center">
            <img
              src="/assets/printrebelgraphix_logo.svg"
              alt="PrintRebel Graphix Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Mobile: Menu button */}
          <div className="flex md:hidden items-center">
            <button
              className="p-2 rounded border text-[#545f2c] border-[#545f2c] hover:bg-[#9fb658] hover:text-black transition"
              onClick={() => setOpen((o) => !o)}
            >
              Menu
            </button>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex w-full items-center justify-center gap-x-20">
            {/* Left links */}
            <ul className="flex items-center gap-10">
              <li className="font-bold hover:text-[#9fb658]">
                <Link to="/">Home</Link>
              </li>
              <li className="font-bold hover:text-[#9fb658]">
                <Link to="/about">About</Link>
              </li>
              <li className="font-bold hover:text-[#9fb658]">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>

            {/* Center logo (bigger, dominant) */}
            <div className="flex items-center justify-center">
              <img
                src="/assets/printrebelgraphix_logo.svg"
                alt="PrintRebel Graphix Logo"
                className="w-52 h-auto"
              />
            </div>

            {/* Right links */}
            <ul className="flex items-center gap-10">
              <li className="font-bold hover:text-[#9fb658]">
                <Link to="/services">Services</Link>
              </li>
              <li className="font-bold hover:text-[#9fb658]">
                <Link to="/products">Products</Link>
              </li>
              <li className="font-bold hover:text-[#9fb658]">
                <Link to="/contact">Contact</Link>
              </li>

              <li className="flex flex-col items-center ml-2">
                {isAdminLoggedIn ? (
                  <>
                    <Link
                      to="/admin"
                      className="flex items-center gap-2 font-bold text-[#545f2c] hover:text-[#9fb658] transition"
                    >
                      <FaCog className="text-xl" />
                      <span>Admin</span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="mt-1 bg-[#545f2c] hover:bg-[#9fb658] hover:text-black text-white px-3 py-1 rounded transition"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link to="/login">
                    <button className="bg-[#545f2c] hover:bg-[#9fb658] hover:text-black text-white px-4 py-1 rounded transition">
                      Login
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:hidden px-4 pb-4 bg-white border-t`}
        >
          <ul className="flex flex-col gap-4 justify-center items-center">
            <li className="font-bold hover:text-[#9fb658]">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold hover:text-[#9fb658]">
              <Link to="/about">About</Link>
            </li>
            <li className="font-bold hover:text-[#9fb658]">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="font-bold hover:text-[#9fb658]">
              <Link to="/services">Services</Link>
            </li>
            <li className="font-bold hover:text-[#9fb658]">
              <Link to="/products">Products</Link>
            </li>
            <li className="font-bold hover:text-[#9fb658]">
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/login">
                <button className="bg-[#545f2c] hover:bg-[#9fb658] hover:text-black text-white px-5 py-2 rounded transition">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
