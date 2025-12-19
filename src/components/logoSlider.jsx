
const LogoSlider = () => {
  // Array or list to hold the different logos stored as svg files
  const categories = [
    <img src='src/assets/rozees.svg' className="inline w-24 md:w-40"/>,
    <img src='src/assets/Gentlemans_biltong.svg' className="inline w-24 md:w-40"/>,
    <img src='src/assets/LAB_plumbing.svg' className="inline w-24 md:w-40"/>,
    <img src='src/assets/Braai_poot.svg' className="inline w-24 md:w-40"/>,
    <img src='src/assets/Gorilla_chemicals.svg' className="inline w-24 md:w-40"/>,
    <img src='src/assets/bp.svg' className="inline w-24 md:w-40"/>,
    <img src='src/assets/First_steps.svg' className="inline w-24 md:w-40"/>,
  ]

  // Populating the array with the images of the logos
  const repeatedCategories = Array(20).fill(categories).flat()

  return (
    // Parent container for the logo marquee
    <div className="w-full flex justify-start items-start bg-[#ffffff84] border-[#9fb658] border-t-2 border-b-2 py-2 overflow-hidden">
      {/* Marquee behaviour */}
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
        scrolldelay="0"
      >
        {repeatedCategories.map((category, index) => (
          <span
            key={index}
            className="mx-10 text-sm font-semibold hover:underline cursor-pointer"
          >
            {category}
          </span>
        ))}
      </marquee>
    </div>
  )
}

export default LogoSlider