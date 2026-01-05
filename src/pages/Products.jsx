import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Products() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [atFooter, setAtFooter] = useState(false);

  const products = [
    {
      id: "lfp-banners",
      category: "LARGE FORMAT PRINTING",
      title: "Banners",
      description:
        "Bold, high-quality visuals on a bigger scale. Perfect for outdoor and indoor promotional banners.",
      image: "/assets/banner11.png",
      features: ["PVC Banners", "Mesh Banners", "Outdoor Banners", "Indoor Banners"],
    },
    {
      id: "lfp-posters",
      category: "LARGE FORMAT PRINTING",
      title: "Posters",
      description:
        "High-impact posters for retail, events, campaigns and point-of-sale displays.",
      image: "/assets/LFP2.png",
      features: ["Retail Posters", "Event Posters", "Point-of-Sale", "Campaign Signage"],
    },
    {
      id: "lfp-billboards",
      category: "LARGE FORMAT PRINTING",
      title: "Billboards",
      description:
        "Super-sized advertising for maximum visibility on roadsides, sites and large outdoor spaces.",
      image: "/assets/BB1.png",
      features: ["Roadside Boards", "Construction Boards", "Large Outdoor Panels", "Building Wraps"],
    },
    {
      id: "lfp-vehicle-wraps",
      category: "LARGE FORMAT PRINTING",
      title: "Screen Printing",
      description:
        "High quality printing for apparel and branded items. Perfect for T-shirts, hoodies, workwear, uniforms and bulk orders.",
      image: "/assets/SCC2.png",
      features: ["Bags", "Stationary", "Plastic/ Glass Bottles", "Mugs/ Glasses", "Hats/ Caps", "Clothing"],
    },
    {
      id: "sub-tshirts",
      category: "SUBLIMATION PRINTING",
      title: "T-Shirts",
      description:
        "Vibrant, durable prints that become part of the fabric – perfect for custom apparel.",
      image: "/assets/Shirts.png",
      features: ["Corporate Wear", "Sportswear", "Event Shirts", "Branded Uniforms"],
    },
    {
      id: "sub-mugs",
      category: "SUBLIMATION PRINTING",
      title: "Mugs",
      description:
        "Full-colour custom mugs that keep your brand in customers' hands every day.",
      image: "/assets/SP1.jpg",
      features: ["Photo Mugs", "Corporate Gifts", "Promotional Giveaways", "Personalised Sets"],
    },
    {
      id: "sub-custom-items",
      category: "SUBLIMATION PRINTING",
      title: "Custom Items",
      description:
        "From cushions to mouse pads – customised sublimated products for any campaign.",
      image: "/assets/Custom.png",
      features: ["Mouse Pads", "Cushions", "Coasters", "Gift Sets"],
    },
    {
      id: "promo-business-cards",
      category: "PROMOTIONAL PRINTING",
      title: "Business Cards",
      description: "Premium business cards that make a strong first impression.",
      image: "/assets/PP3.jpg",
      features: ["Single & Double-Sided", "Matt & Gloss Finishes", "Spot UV", "Custom Shapes"],
    },
    {
      id: "promo-flyers",
      category: "PROMOTIONAL PRINTING",
      title: "Flyers",
      description:
        "Cost-effective flyers for handouts, inserts and large-volume campaigns.",
      image: "/assets/Flyer.png",
      features: ["A5 / A6", "Full Colour", "Short-Run & Bulk", "Event Handouts"],
    },
    {
      id: "promo-brochures",
      category: "PROMOTIONAL PRINTING",
      title: "Brochures",
      description:
        "Multi-page brochures to showcase your products and services in detail.",
      image: "/assets/PP2.png",
      features: ["Bi-Fold & Tri-Fold", "Booklets", "Product Catalogues", "Company Profiles"],
    },
    {
      id: "promo-catalogues",
      category: "PROMOTIONAL PRINTING",
      title: "Catalogues",
      description:
        "Branded catalogues that keep your full product range in one place.",
      image: "/assets/PP4.jpg",
      features: ["Seasonal Catalogues", "Price Lists", "Retail Lookbooks", "Product Guides"],
    },
    {
      id: "signage-solutions",
      category: "SIGNAGE SOLUTIONS",
      title: "Signage Solutions",
      description:
        "Professional signage for indoor and outdoor use. Weather-resistant and long-lasting.",
      image: "/assets/CB1.png",
      features: ["Standing Signs", "Correx Signs", "ABS Signs", "Vinyl Signs"],
    },
    {
      id: "window-graphics",
      category: "WINDOW GRAPHICS",
      title: "Window Graphics",
      description:
        "Transform your storefront with stunning window graphics and decals.",
      image: "/assets/Large_Format_Printing.png",
      features: ["Window Decals", "Frosted Glass Effects", "Custom Graphics", "Branding"],
    },
    {
      id: "vehicle-branding",
      category: "VEHICLE BRANDING",
      title: "Vehicle Branding",
      description:
        "Turn your vehicle into a mobile billboard with professional vehicle wraps and graphics.",
      image: "/assets/LFP1.png",
      features: ["Full Wraps", "Partial Wraps", "Decals", "Fleet Graphics"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);

      // Enter footer zone when close to bottom
      const nearBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 180;
      setAtFooter(nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getProductStyle = (index) => {
    const totalProducts = products.length;
    const productProgress = index / totalProducts;
    const nextProductProgress = (index + 1) / totalProducts;

    const isActive = scrollProgress >= productProgress && scrollProgress < nextProductProgress;
    const isPassed = scrollProgress >= nextProductProgress;
    const isUpcoming = scrollProgress < productProgress;

    const sectionProgress = (scrollProgress - productProgress) / (1 / totalProducts);
    const distanceFromCurrent = index - (scrollProgress * totalProducts);

    let scale, opacity, blur, translateZ, zIndex, translateX, translateY, rotate;

    if (isPassed) {
      const fadeProgress = (scrollProgress - nextProductProgress) * totalProducts;
      scale = 1.0 + fadeProgress * 0.3;
      opacity = Math.max(0, 1 - fadeProgress * 3);
      blur = fadeProgress * 20;
      translateZ = fadeProgress * 200;
      translateX = 0;
      translateY = 0;
      rotate = 0;
      zIndex = 10 + index;
    } else if (isActive) {
      const acceleratedProgress = Math.min(1, sectionProgress * 2);
      scale = 0.5 + acceleratedProgress * 0.3;
      opacity = acceleratedProgress >= 0.5 ? 1 : acceleratedProgress * 2;
      blur = acceleratedProgress >= 0.5 ? 0 : 15 - acceleratedProgress * 30;
      translateZ = -150 + acceleratedProgress * 150;
      translateX = 0;
      translateY = 0;
      rotate = 0;
      zIndex = 100;
    } else if (isUpcoming) {
      const stackPosition = distanceFromCurrent - 1;
      scale = Math.max(0.25, 0.5 - stackPosition * 0.08);
      opacity = stackPosition < 4 ? 0.4 : 0;
      blur = 8 + stackPosition * 6;
      translateZ = -200 - stackPosition * 80;

      const scatterPattern = [
        { x: 180, y: -100, r: -8 },
        { x: -200, y: -80, r: 12 },
        { x: 220, y: 120, r: -15 },
        { x: -180, y: 140, r: 10 },
      ];
      const pattern =
        scatterPattern[Math.floor(stackPosition) % scatterPattern.length] || { x: 0, y: 0, r: 0 };

      translateX = pattern.x;
      translateY = pattern.y;
      rotate = pattern.r;
      zIndex = 90 - Math.floor(stackPosition);
    } else {
      scale = 0.5;
      opacity = 0;
      blur = 20;
      translateZ = -300;
      translateX = 0;
      translateY = 0;
      rotate = 0;
      zIndex = 0;
    }

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) translateZ(${translateZ}px) rotate(${rotate}deg)`,
      opacity: Math.max(0, Math.min(1, opacity)),
      filter: `blur(${Math.min(25, blur)}px)`,
      zIndex,
      transition: "none",
      pointerEvents: isActive ? "auto" : "none",
    };
  };

  return (
    <>
      <div className="relative min-h-screen bg-[url('./assets/Home-Bg.jpg')] bg-fixed bg-center text-black overflow-hidden">
        <div className="fixed top-0 left-0 w-full z-[500]">
          <Navbar />
        </div>

        {/* Fixed center container */}
        <div
          className={`fixed inset-0 flex items-center justify-center pt-32 pb-8 transition-opacity duration-300 ${
            atFooter ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ perspective: "2000px", perspectiveOrigin: "center center" }}
        >
          <div className="relative w-full max-w-3xl h-full flex items-center justify-center px-4">
            {products.map((product, index) => (
              <div key={product.id} style={getProductStyle(index)} className="absolute w-full max-w-2xl">
                <div className="bg-[#ffffffdd] backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-2xl ring-1 ring-[#9fb658]/20">
                  <div className="flex flex-col gap-3 md:gap-4 items-center">
                    <div className="w-full">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md"
                      />
                    </div>

                    <div className="w-full space-y-2 md:space-y-3 text-center">
                      {product.category && (
                        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#545f2c] uppercase mb-1">
                          {product.category}
                        </p>
                      )}

                      <h2 className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#545f2c] to-[#9fb658] tracking-wide">
                        {product.title}
                      </h2>

                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{product.description}</p>

                      {product.features && product.features.length > 0 && (
                        <div className="pt-2">
                          <h3 className="text-base md:text-lg font-semibold text-[#545f2c] mb-2">
                            Featured Services:
                          </h3>
                          <ul className="grid grid-cols-2 gap-2">
                            {product.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-xs md:text-sm text-gray-600 flex items-center justify-center"
                              >
                                <span className="w-2 h-2 bg-[#9fb658] rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button className="mt-3 md:mt-4 px-5 md:px-6 py-2 bg-gradient-to-r from-[#545f2c] to-[#9fb658] text-white font-semibold rounded-lg hover:shadow-lg transition-shadow text-sm md:text-base">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll spacer */}
        <div style={{ height: `${(products.length - 0.5) * 100}vh` }} />

        {/* ✅ Footer area styled like your screenshot (no beige block) */}
        <div className="relative z-[500] bg-[url('./assets/Home-Bg.jpg')] bg-fixed bg-center">
          {/* thin green divider line like reference */}
          <div className="h-[2px] bg-[#9fb658]/70 w-full" />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Products;
