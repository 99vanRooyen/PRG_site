// InkCursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTint } from "react-icons/fa";


const InkCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const clickHandler = (e) => {
      const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
      setClicks((prev) => [...prev, newClick]);

      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 600); // animation duration
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <>
        {/* Main Cursor */}
        <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            >
            <FaTint className="text-[#9fb658] text-xl" />
        </motion.div>


      {/* Click Droplets */}
      {clicks.map((click) => (
        <motion.div
            key={click.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed z-40 pointer-events-none"
            style={{
                top: click.y - 15 + "px",
                left: click.x - 15 + "px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#9fb658",
            }}
        />

      ))}
    </>
  );
};

export default InkCursor;