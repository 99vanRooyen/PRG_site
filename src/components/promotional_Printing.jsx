import { FaPrint } from "react-icons/fa";

function Promotional_Printing() {
  // Array or list to hold the different logos stored as image files
  const categories = [
    <img src="/assets/PP1.jpg" className="inline w-24 md:w-40 h-auto object-contain" alt="Promotional sample 1" />,
    <img src="/assets/PP2.png" className="inline w-24 md:w-40 h-auto object-contain" alt="Promotional sample 2" />,
    <img src="/assets/PP3.jpg" className="inline w-24 md:w-40 h-auto object-contain" alt="Promotional sample 3" />,
    <img src="/assets/PP4.jpg" className="inline w-24 md:w-40 h-auto object-contain" alt="Promotional sample 4" />,
    <img src="/assets/PP5.jpg" className="inline w-24 md:w-40 h-auto object-contain" alt="Promotional sample 5" />,
    <img src="/assets/PP6.jpg" className="inline w-24 md:w-40 h-auto object-contain" alt="Promotional sample 6" />,
    <img src="/assets/PP7.jpg" className="inline w-24 md:w-40 h-auto object-contain" alt="Promotional sample 7" />,
  ];

  // Populating the array with the images of the logos
  const repeatedCategories = Array(20).fill(categories).flat();

  return (
    <>
      <div
        data-reveal
        className="flex flex-col items-center justify-center bg-[#ffffffcc] backdrop-blur rounded-2xl w-[75%] px-6 py-6 shadow-xl ring-1 ring-[#9fb658]/20"
      >
        <h2 className="font-extrabold text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#545f2c] to-[#9fb658] tracking-wide">
          PROMOTIONAL PRINTING
        </h2>

        <p className="text-center">
          Promotional printing is all about creating branded products that showcase your logo, message, or design on
          everyday items. From mugs and pens to t-shirts and corporate gifts, it's a powerful way to increase brand
          visibility, connect with customers, and leave a lasting impression.
        </p>

        <br />

        {/* ✅ FIXED IMAGE: mobile-safe sizing + no stretching */}
        <img
          data-reveal
          data-delay="120ms"
          src="/assets/Promotional_Printing.jpg"
          alt="Promotional Printing"
          className="w-full max-w-md md:max-w-lg h-48 sm:h-56 md:h-72 object-contain md:object-cover rounded-lg shadow-md"
        />

        <br />

        <div data-reveal data-delay="200ms" className="border-[#545f2c] border-t-2 border-b-2 py-2 w-full">
          {/* Marquee behaviour */}
          <marquee behavior="scroll" direction="left" scrollamount="10" scrolldelay="0">
            {repeatedCategories.map((category, index) => (
              <span key={index} className="mx-10 text-sm font-semibold hover:underline cursor-pointer">
                {category}
              </span>
            ))}
          </marquee>
        </div>

        <ul className="flex flex-wrap justify-center items-center gap-7 text-[#9fb658] py-3">
          <li data-reveal>
            <FaPrint className="inline w-10 px-1 text-[#545f2c]" />
            PENS
          </li>
          <li data-reveal data-delay="60ms">
            <FaPrint className="inline w-10 px-1 text-[#545f2c]" />
            POSTERS
          </li>
          <li data-reveal data-delay="120ms">
            <FaPrint className="inline w-10 px-1 text-[#545f2c]" />
            BROCHURES
          </li>
          <li data-reveal data-delay="180ms">
            <FaPrint className="inline w-10 px-1 text-[#545f2c]" />
            POSTCARDS
          </li>
          <li data-reveal data-delay="240ms">
            <FaPrint className="inline w-10 px-1 text-[#545f2c]" />
            FLYERS
          </li>
          <li data-reveal data-delay="300ms">
            <FaPrint className="inline w-10 px-1 text-[#545f2c]" />
            BUSINESS CARDS
          </li>
          <li data-reveal data-delay="360ms">
            <FaPrint className="inline w-10 px-1 text-[#545f2c]" />
            NCR (No Carbon Required) BOOKS
          </li>
          <li data-reveal data-delay="420ms">
            <FaPrint className="inline w-10 px-1 text-[#545f2c]" />
            NOTEBOOKS
          </li>
        </ul>
      </div>
    </>
  );
}

export default Promotional_Printing;
