import { FaPrint } from "react-icons/fa";
function Large_Format_Printing() {

    // Array or list to hold the different logos stored as svg files
    const categories = [
        <img src='src/assets/LFP1.png' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP2.png' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP3.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP4.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP5.png' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP6.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP7.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP8.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP9.jpg' className="inline w-24 md:w-40"/>,
        <img src='src/assets/LFP10.jpg' className="inline w-24 md:w-40"/>,
    ]

    // Populating the array with the images of the logos
    const repeatedCategories = Array(20).fill(categories).flat()

    return(
        <>
            <div data-reveal className="flex flex-col items-center justify-center bg-[#ffffffcc] backdrop-blur rounded-2xl w-[75%] px-6 py-6 shadow-xl ring-1 ring-[#9fb658]/20">
                <h2 className="font-extrabold text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#545f2c] to-[#9fb658] tracking-wide">LARGE FORMAT PRINTING AND SIGNAGE</h2>
                <p className="text-center mt-2">
                    Large format printling lets you showcase your brand on a bigger scale with bold,
                    high quality visuals.
                </p>
                <br />
                <p className="text-center">
                    This type of printing delivers high quality, full color images with sharp details,
                    making it perfect for impactful visual communication. Large format printers can print
                    on a wide variety of materials, including paper, vinyl, canvas, fabric, foam board,
                    and even rigid substrates.
                </p>
                <br />
                <p className="text-center">
                    Common products include banners, posters, billboards, signage, vehicl wraps, trade show
                    displays, wall and window graphics, floor decals, backdrops, point of sale displays, blueprints,
                    architectural drawings, and custom wallpapers.
                </p>
                <br />
                <p className="text-center">
                    Large format printing is widely used in advertising, branding, events, retail, and construction
                    industries.
                </p>
                <br />
                <img data-reveal data-delay="120ms" src="src/assets/Large_Format_Printing.png" alt="Large Format Printing" className="w-[70%] h-100 rounded-lg shadow-md" />
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
                    <li data-reveal><FaPrint className="inline w-10 px-1 text-[#545f2c]" />STANDING SIGNS</li>
                    <li data-reveal data-delay="60ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />CORREX SIGNS</li>
                    <li data-reveal data-delay="120ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />ABS SIGNS</li>
                    <li data-reveal data-delay="180ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />CHROMADECK SIGNS</li>
                    <li data-reveal data-delay="240ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />REAL ESTATE AGENT FRAMES</li>
                    <li data-reveal data-delay="300ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />PERSPEX SIGNS</li>
                    <li data-reveal data-delay="360ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />WINDOW GRAPHICS</li>
                    <li data-reveal data-delay="420ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />MOUNTED BANNERS</li>
                    <li data-reveal data-delay="480ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />PULL UP BANNERS</li>
                    <li data-reveal data-delay="540ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />LABELS</li>
                    <li data-reveal data-delay="600ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />VINYL SIGNS</li>
                    <li data-reveal data-delay="660ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />LOBBY SIGNS</li>
                    <li data-reveal data-delay="720ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />OFFICE DOOR SIGNS</li>
                    <li data-reveal data-delay="780ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />MARKETING MATERIAL STANDS AND DISPLAY</li>
                    <li data-reveal data-delay="840ms"><FaPrint className="inline w-10 px-1 text-[#545f2c]" />VEHICLE BRANDING</li>
                </ul>
            </div>
        </>
    )

}

export default Large_Format_Printing
