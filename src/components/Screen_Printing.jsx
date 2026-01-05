import { FaPrint } from "react-icons/fa";

function Screen_Printing() {
  // Array or list to hold the different logos stored as image files
  const categories = [
    <img src="/assets/SC1.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 1" />,
    <img src="/assets/SC2.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 2" />,
    <img src="/assets/SC3.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 3" />,
    <img src="/assets/SC4.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 4" />,
    <img src="/assets/SC5.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 5" />,
    <img src="/assets/SC6.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 6" />,
    <img src="/assets/SC7.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 7" />,
    <img src="/assets/SC8.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 8" />,
    <img src="/assets/SC9.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 1" />,
    <img src="/assets/SC10.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 2" />,
    <img src="/assets/SC11.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 3" />,
    <img src="/assets/SC12.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 4" />,
    <img src="/assets/SC13.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 5" />,
    <img src="/assets/SC14.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 6" />,
    <img src="/assets/SC15.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 7" />,
    <img src="/assets/SC16.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 8" />,
    <img src="/assets/SC17.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 7" />,
    <img src="/assets/SC18.jpeg" className="inline w-24 md:w-40" alt="Screen Printing 8" />,
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
          SCREEN PRINTING
        </h2>

        <p className="text-center mt-2">
          Screen printing is a durable, vibrant printing method ideal for bulk orders, uniforms, branded apparel,
          and promotional items.
        </p>
        <br />

        <p className="text-center">
          It delivers long-lasting prints with strong colour coverage, making it perfect for clothing and everyday
          items that need to survive real human usage (washing, sun, chaos, etc.).
        </p>
        <br />

        <p className="text-center">
          Whether you need branded workwear, event merch, or custom products, screen printing gives a clean,
          professional finish and scales well for larger quantities.
        </p>
        <br />

        <img
          data-reveal
          data-delay="120ms"
          src="/assets/SCC1.png"
          alt="Screen Printing"
          className="w-[70%] h-100 rounded-lg shadow-md"
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
          <li data-reveal><FaPrint className="inline w-10 px-1 text-[#545f2c]" />ICE BAGS</li>
          <li data-reveal data-delay="60ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />TOTE BAGS</li>
          <li data-reveal data-delay="120ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />PLASTIC BAGS</li>
          <li data-reveal data-delay="180ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />PAPER BAGS</li>

          <li data-reveal data-delay="240ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />RULERS</li>
          <li data-reveal data-delay="300ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />MUGS / GLASSES</li>
          <li data-reveal data-delay="360ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />PLASTIC BOTTLES</li>
          <li data-reveal data-delay="420ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />GLASS BOTTLES</li>

          <li data-reveal data-delay="480ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />HATS / CAPS</li>
          <li data-reveal data-delay="540ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />HARD HATS</li>

          <li data-reveal data-delay="600ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />POSTERS</li>
          <li data-reveal data-delay="660ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />T-SHIRTS</li>
          <li data-reveal data-delay="720ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />BEANIES</li>
          <li data-reveal data-delay="780ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />JACKETS</li>
          <li data-reveal data-delay="840ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />HOODIES</li>
          <li data-reveal data-delay="900ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />PENS</li>
          <li data-reveal data-delay="960ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />SPORTS BAGS</li>
        </ul>
      </div>
    </>
  );
}

export default Screen_Printing;
