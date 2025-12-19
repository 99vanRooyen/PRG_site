import { FaPrint } from "react-icons/fa";
function Sublimation_Printing() {
    // Variables
    // Array or list to hold the different logos stored as svg files
    const categories = [
        <img src='src/assets/SP1.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/SP2.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/SP3.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/SP4.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/SP5.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/SP6.png' className="inline w-24 md:w-40"/>,
        <img src='src/assets/SP7.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/SP8.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/SP9.jpg' className="inline w-24 md:w-40"/>,
    ]

    // Populating the array with the images of the logos
    const repeatedCategories = Array(20).fill(categories).flat()

    return(
        <>
            <div data-reveal className="flex flex-col items-center justify-center bg-[#ffffffcc] backdrop-blur rounded-2xl w-[75%] px-6 py-6 shadow-xl ring-1 ring-[#9fb658]/20">
                <h2 className="font-extrabold text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#545f2c] to-[#9fb658] tracking-wide">SUBLIMATION</h2>
                <p className="text-center">
                    Sublimation is a printing method that used heat to transfer dye directly into materials
                    such as fabrics, ceramics, and coated surfaces. This process creates vibrant, full color
                    designs that are permanently embedded into the item, ensuring they won't peel, crack, or
                    fade over time. Because the ink becomes part of the material itself, sublimation delivers
                    a smooth, high quality finish with sharp details and long lasting durability.
                </p>
                <br />
                <p className="text-center">
                    Sublimation printing is ideal for producing custom, photo quality prints on products like clothing, mugs, signage,
                    and promotional items.
                </p>
                <br />
                <img data-reveal data-delay="120ms" src="src/assets/Sublimation_Printing.jpg" alt="Sublimation printing" className="w-[70%] h-[500px] object-cover rounded-lg shadow-md" />
                <br />
                <div data-reveal data-delay="200ms" className="border-[#545f2c] border-t-2 border-b-2 py-2 w-full">
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
                <ul className="flex flex-wrap justify-center items-center gap-7 text-[#9fb658] py-3">
                    <li data-reveal><FaPrint className="inline w-10 px-1 text-[#545f2c]" />MUGS</li>
                    <li data-reveal data-delay="60ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />T-SHIRTS</li>
                    <li data-reveal data-delay="120ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />MOUSE PADS</li>
                    <li data-reveal data-delay="180ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />KEY RINGS</li>
                    <li data-reveal data-delay="240ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />STAINLESS STEEL WATER BOTTLES</li>
                    <li data-reveal data-delay="300ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />COASTERS</li>
                    <li data-reveal data-delay="360ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />APRONS</li>
                    <li data-reveal data-delay="420ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />PUZZLES</li>
                    <li data-reveal data-delay="480ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />SOCKS</li>
                    <li data-reveal data-delay="540ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />TUMBLERS</li>
                    <li data-reveal data-delay="600ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />PENS</li>
                    <li data-reveal data-delay="660ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />ACRYLIC ITEMS</li>
                    <li data-reveal data-delay="720ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />BAGS</li>
                </ul>
            </div>    
        </>
    )

}

export default Sublimation_Printing
