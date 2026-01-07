import { FaTint } from 'react-icons/fa'

const PrintingCategoriesSlider = () => {
  // Defining an array or list to hold the different printing categories
  const categories = [
    "DECORATIVE PRINTING",
    "SUBLIMATION",
    "PROMOTIONAL PRINTING",
    "SIGNAGE PRINTING",
    "SUBLIMATED APPAREL",
    "SCREEN PRINTING",
  ]

  // Filling the array with the categories defined
  const repeatedCategories = Array(20).fill(categories).flat()

  return (
    // Parent container for the marquee to set background
    <div className="bg-[#545f2c] text-white font">
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
            className="mx-6 text-sm font-semibold hover:underline cursor-pointer"
          >
            {/* Inkdrop icon before the category */}
            <FaTint className="inline relative bottom-[2px] text-[#9fb658] mr-2" /> {category}
          </span>
        ))}
      </marquee>
    </div>
  )
}

export default PrintingCategoriesSlider
