import { useState } from "react"

// React Router methods
import { Link, useLocation, useNavigate } from "react-router-dom"

// React Icon being imported
import { FaCog } from "react-icons/fa";

function Navbar() {

    // Variables
    const [open, setOpen] = useState(false);
    const location = useLocation(); // Returns the current location for example what page of the site the user is currently on
    const navigate = useNavigate(); // Returns the current navigation state, such as whether navigation is in progress or is idle

    // Simulated login state
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(location.pathname === "/admin");

    const handleSignOut = () => {
        setIsAdminLoggedIn(false);
        navigate("/"); // Redirect to homepage
    };

  return (
    <>
        {/* Nav element to act as the parent container for the navbar */}
        <nav className="w-full bg-transparent text-black p-3 lg:text-[1.2em]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center">

                <div className="flex flex-row w-full md:hidden">
                    <img
                        src="src/assets/printrebelgraphix_logo.svg"
                        alt="Logo"
                        className="h-30 w-auto text-left"
                    />
                </div>

                 {/* Mobile menu button (hidden on md and up) */}
                <div className="flex w-full justify-end items-center md:hidden gap-4">
                    <button
                        className="p-2 rounded border text-[#545f2c] border-[#545f2c]"
                        onClick={() => setOpen((o) => !o)}
                    >
                        Menu
                    </button>
                </div>

                {/* Links: hidden on mobile, flex on md+ */}
                <div className="hidden md:flex w-full items-center justify-center gap-x-20">

                    {/* Left Links */}
                    <ul className="flex items-center gap-15 md:gap-7 lg:gap-15">
                        <li className="font-bold hover:text-[#9fb658]"><Link to="/">Home</Link></li>
                        <li className="font-bold hover:text-[#9fb658]"><Link to="/about">About</Link></li>
                        <li className="font-bold hover:text-[#9fb658]"><Link to="/blog">Blog</Link></li>
                    </ul>

                    {/* Left-Aligned Logo */}
                    <div className="flex justify-around items-center p-12 md:p-1">
                        <img
                            src="src/assets/printrebelgraphix_logo.svg"
                            alt="Logo"
                            className="w-40 mb-2"
                        />
                    </div>

                    {/* Right Links */}
                    <ul className="flex items-center gap-15 md:gap-7 lg:gap-15">
                        <li className="font-bold hover:text-[#9fb658]"><Link to="/services">Services</Link></li>
                        <li className="font-bold hover:text-[#9fb658]"><Link to="/products">Products</Link></li>
                        <li className="font-bold hover:text-[#9fb658]"><Link to="/contact">Contact</Link></li>
                        <li className="flex flex-col items-center justify-end ml-2">
                            {/* Ternary operator (condition ? exprIfTrue : exprIfFalse) */}
                            {isAdminLoggedIn ? (
                                <>
                                <Link to="/admin" className="flex items-center gap-2 font-bold text-[#545f2c] hover:text-[#9fb658]">
                                    <FaCog className="text-xl" />
                                    <span className="py-2">Admin</span>
                                </Link>
                                <button
                                    onClick={handleSignOut}
                                    className="w-full bg-[#545f2c] hover:bg-[#9fb658] hover:text-black text-white text-center px-3 py-1 md:px-2 md:py-1 rounded"
                                >
                                    Sign Out
                                </button>
                                </>
                            ) : (
                                <Link to="/login">
                                <button className="bg-[#545f2c] hover:bg-[#9fb658] hover:text-black text-white px-3 py-1 rounded">
                                    Login
                                </button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>

            </div>

            {/* Dropdown for mobile only */}
            <div className={`${open ? "block" : "hidden"} md:hidden px-4 pb-4`}>
                <ul className="flex flex-col gap-3 justify-center items-center">
                    <li className="cursor-pointer hover:text-[#9fb658]"><Link to="/">Home</Link></li>
                    <li className="cursor-pointer hover:text-[#9fb658]"><Link to="/about">About</Link></li>
                    <li className="cursor-pointer hover:text-[#9fb658]"><Link to="/blog">Blog</Link></li>
                    <li className="cursor-pointer hover:text-[#9fb658]"><Link to="/services">Services</Link></li>
                    <li className="cursor-pointer hover:text-[#9fb658]"><Link to="/products">Products</Link></li>
                </ul>
            </div>

        </nav>

    </>
  )
}

export default Navbar
