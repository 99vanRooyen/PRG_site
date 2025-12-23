import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Products() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Each entry here is a single "product" slide.
  // Multiple slides share the same category so that, for example,
  // LARGE FORMAT PRINTING shows Banners, Posters, Billboards, etc.
  const products = [
    // LARGE FORMAT PRINTING – individual items
    {
      id: "lfp-banners",
      category: "LARGE FORMAT PRINTING",
      title: "Banners",
      description:
        "Bold, high-quality visuals on a bigger scale. Perfect for outdoor and indoor promotional banners.",
      image: "/assets/LFP1.png",
      features: ["PVC Banners", "Mesh Banners", "Outdoor Banners", "Indoor Banners"]
    },
    {
      id: "lfp-posters",
      category: "LARGE FORMAT PRINTING",
      title: "Posters",
      description:
        "High-impact posters for retail, events, campaigns and point-of-sale displays.",
      image: "/assets/LFP2.png",
      features: ["Retail Posters", "Event Posters", "Point-of-Sale", "Campaign Signage"]
    },
    {
      id: "lfp-billboards",
      category: "LARGE FORMAT PRINTING",
      title: "Billboards",
      description:
        "Super-sized advertising for maximum visibility on roadsides, sites and large outdoor spaces.",
      image: "/assets/LFP3.jpg",
      features: ["Roadside Boards", "Construction Boards", "Large Outdoor Panels", "Building Wraps"]
    },
    {
      id: "lfp-vehicle-wraps",
      category: "LARGE FORMAT PRINTING",
      title: "Vehicle Wraps",
      description:
        "Turn your vehicle into a mobile billboard with professional full and partial wraps.",
      image: "/assets/LFP5.png",
      features: ["Full Wraps", "Partial Wraps", "Fleet Branding", "Vehicle Decals"]
    },

    // SUBLIMATION PRINTING – individual items
    {
      id: "sub-tshirts",
      category: "SUBLIMATION PRINTING",
      title: "T-Shirts",
      description:
        "Vibrant, durable prints that become part of the fabric – perfect for custom apparel.",
      image: "/assets/SP1.jpg",
      features: ["Corporate Wear", "Sportswear", "Event Shirts", "Branded Uniforms"]
    },
    {
      id: "sub-mugs",
      category: "SUBLIMATION PRINTING",
      title: "Mugs",
      description:
        "Full-colour custom mugs that keep your brand in customers' hands every day.",
      image: "/assets/SP2.jpg",
      features: ["Photo Mugs", "Corporate Gifts", "Promotional Giveaways", "Personalised Sets"]
    },
    {
      id: "sub-phone-cases",
      category: "SUBLIMATION PRINTING",
      title: "Phone Cases",
      description:
        "Protective phone covers with edge-to-edge sublimated graphics.",
      image: "/assets/SP3.jpg",
      features: ["Full-Colour Prints", "Branded Cases", "Event Merch", "Custom Designs"]
    },
    {
      id: "sub-custom-items",
      category: "SUBLIMATION PRINTING",
      title: "Custom Items",
      description:
        "From cushions to mouse pads – customised sublimated products for any campaign.",
      image: "/assets/SP4.jpg",
      features: ["Mouse Pads", "Cushions", "Coasters", "Gift Sets"]
    },

    // PROMOTIONAL PRINTING – individual items
    {
      id: "promo-business-cards",
      category: "PROMOTIONAL PRINTING",
      title: "Business Cards",
      description:
        "Premium business cards that make a strong first impression.",
      image: "/assets/PP1.jpg",
      features: ["Single & Double-Sided", "Matt & Gloss Finishes", "Spot UV", "Custom Shapes"]
    },
    {
      id: "promo-flyers",
      category: "PROMOTIONAL PRINTING",
      title: "Flyers",
      description:
        "Cost-effective flyers for handouts, inserts and large-volume campaigns.",
      image: "/assets/PP2.png",
      features: ["A5 / A6", "Full Colour", "Short-Run & Bulk", "Event Handouts"]
    },
    {
      id: "promo-brochures",
      category: "PROMOTIONAL PRINTING",
      title: "Brochures",
      description:
        "Multi-page brochures to showcase your products and services in detail.",
      image: "/assets/PP3.jpg",
      features: ["Bi-Fold & Tri-Fold", "Booklets", "Product Catalogues", "Company Profiles"]
    },
    {
      id: "promo-catalogues",
      category: "PROMOTIONAL PRINTING",
      title: "Catalogues",
      description:
        "Branded catalogues that keep your full product range in one place.",
      image: "/assets/PP4.jpg",
      features: ["Seasonal Catalogues", "Price Lists", "Retail Lookbooks", "Product Guides"]
    },

    // Existing single-section categories kept as one slide each
    {
      id: "signage-solutions",
      category: "SIGNAGE SOLUTIONS",
      title: "Signage Solutions",
      description:
        "Professional signage for indoor and outdoor use. Weather-resistant and long-lasting.",
      image: "/assets/LFP6.jpg",
      features: ["Standing Signs", "Correx Signs", "ABS Signs", "Vinyl Signs"]
    },
    {
      id: "window-graphics",
      category: "WINDOW GRAPHICS",
      title: "Window Graphics",
      description:
        "Transform your storefront with stunning window graphics and decals.",
      image: "/assets/LFP10.jpg",
      features: ["Window Decals", "Frosted Glass Effects", "Custom Graphics", "Branding"]
    },
    {
      id: "vehicle-branding",
      category: "VEHICLE BRANDING",
      title: "Vehicle Branding",
      description:
        "Turn your vehicle into a mobile billboard with professional vehicle wraps and graphics.",
      image: "/assets/LFP11.jpg",
      features: ["Full Wraps", "Partial Wraps", "Decals", "Fleet Graphics"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getProductStyle = (index) => {
    const totalProducts = products.length;
    const productProgress = index / totalProducts;
    const nextProductProgress = (index + 1) / totalProducts;
    
    // Calculate if this product is currently active
    const isActive = scrollProgress >= productProgress && scrollProgress < nextProductProgress;
    const isPassed = scrollProgress >= nextProductProgress;
    const isUpcoming = scrollProgress < productProgress;
    
    // Progress within this product's section
    const sectionProgress = (scrollProgress - productProgress) / (1 / totalProducts);
    
    // Calculate distance from current scroll position
    const distanceFromCurrent = index - (scrollProgress * totalProducts);
    
    let scale, opacity, blur, translateZ, zIndex, translateX, translateY, rotate;
    
    if (isPassed) {
      // Products that have passed - fade out and move forward
      const fadeProgress = (scrollProgress - nextProductProgress) * totalProducts;
      scale = 1.0 + (fadeProgress * 0.3);
      opacity = Math.max(0, 1 - (fadeProgress * 3));
      blur = fadeProgress * 20;
      translateZ = fadeProgress * 200;
      translateX = 0;
      translateY = 0;
      rotate = 0;
      zIndex = 10 + index;
    } else if (isActive) {
      // Current product - zoom in and focus
      // Accelerate the progress so product becomes visible earlier
      const acceleratedProgress = Math.min(1, sectionProgress * 2); // Reach peak at 50% scroll
      
      scale = 0.5 + (acceleratedProgress * 0.3); // 0.5 to 0.8 (smaller)
      opacity = acceleratedProgress >= 0.5 ? 1 : acceleratedProgress * 2; // 100% by 50% scroll, stay there
      blur = acceleratedProgress >= 0.5 ? 0 : 15 - (acceleratedProgress * 30); // Clear by 50%
      translateZ = -150 + (acceleratedProgress * 150);
      translateX = 0;
      translateY = 0;
      rotate = 0;
      zIndex = 100;
    } else if (isUpcoming) {
      // Upcoming products - scattered around like photos
      const stackPosition = distanceFromCurrent - 1;
      scale = Math.max(0.25, 0.5 - (stackPosition * 0.08)); // Much smaller
      opacity = stackPosition < 4 ? 0.4 : 0; // Show next 4
      blur = 8 + (stackPosition * 6);
      translateZ = -200 - (stackPosition * 80);
      
      // Scatter positions based on index for variety
      const scatterPattern = [
        { x: 180, y: -100, r: -8 },   // Top right
        { x: -200, y: -80, r: 12 },   // Top left
        { x: 220, y: 120, r: -15 },   // Bottom right
        { x: -180, y: 140, r: 10 }    // Bottom left
      ];
      const pattern = scatterPattern[Math.floor(stackPosition) % scatterPattern.length] || { x: 0, y: 0, r: 0 };
      translateX = pattern.x;
      translateY = pattern.y;
      rotate = pattern.r;
      
      zIndex = 90 - Math.floor(stackPosition);
    } else {
      // Fallback for any edge cases
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
      zIndex: zIndex,
      transition: "none",
      pointerEvents: isActive ? "auto" : "none"
    };
  };

  return (
    <>
      <div className="relative min-h-screen bg-[url('./assets/Home-Bg.jpg')] bg-fixed bg-center text-black overflow-hidden">
        <div className="fixed top-0 left-0 w-full z-[500]">
          <Navbar />
        </div>
        
        {/* Fixed center container */}
        <div className="fixed inset-0 flex items-center justify-center pt-32 pb-8" style={{ perspective: "2000px", perspectiveOrigin: "center center" }}>
          <div className="relative w-full max-w-3xl h-full flex items-center justify-center px-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                style={getProductStyle(index)}
                className="absolute w-full max-w-2xl"
              >
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
                      
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {product.description}
                      </p>
                      
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

        {/* Scroll spacer to enable scrolling - reduced to stop before footer */}
        <div style={{ height: `${(products.length - 0.5) * 100}vh` }}></div>

        {/* Background mask to block products from showing through footer */}
        <div className="relative z-[400] bg-gradient-to-b from-transparent via-[#e8e6e3] to-[#e8e6e3] h-32"></div>

        {/* Footer in normal flow */}
        <div className="relative z-[500] bg-[#e8e6e3]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Products;
