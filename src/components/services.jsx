import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
    // Definings icons for the service containers
    const services = [
        {
        icon: (
            <img src="/largeformat.png" alt="Large format printing icon" className="w-10 h-10 object-contain" loading="lazy" />
        ),
        title: "LARGE FORMAT PRINTING AND SIGNAGE",
        description: [
            "LFP includes on demand printing for a wide range of applications as well as many types of signage.",
        ],
        },
        {
        icon: (
            <img src="/sublimation.png" alt="Sublimation icon" className="w-10 h-10 object-contain" loading="lazy" />
        ),
        title: "SUBLIMATION",
        description: [
            "Sublimation can be applied on a wide range of personal items like the following:",
            "T-shirts, caps, mugs, coasters, bags, tumblers, and much more.",
        ],
        },
        {
        icon: (
            <img src="/premotionalprinting.png" alt="Promotional printing icon" className="w-10 h-10 object-contain" loading="lazy" />
        ),
        title: "PROMOTIONAL PRINTING",
        description: [
            "From marketing material, including flyers, brochures and business cards",
            "to promotional items like pens and mugs",
        ],
        },
        {
        icon: (
            <img src="/installation.png" alt="Installation icon" className="w-10 h-10 object-contain" loading="lazy" />
        ),
        title: "INSTALLATION",
        description: [
            "We install free standing, wall mounted, vinyl and window graphics, perspex signage, banners, vinyl decals, chromadek sign",
            "and many more.",
        ],
        },
    ];

    return (
        // Service section
        <section className="relative  pt-12 md:pt-16 pb-16">
        
            {/* Container for headings and service sub-containers */}
            <div className="relative max-w-full mx-auto px-6 z-10">
                {/* Heading */}
                <div className="mb-20 md:mb-24">
                    <p className="text-[#3a4127] text-sm md:text-base tracking-wide uppercase leading-tight">SERVICES</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#596140] text-shadow-md leading-tight">SERVICES | PROVIDE</h2>
                </div>

                <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4 gap-y-24 md:gap-y-20 lg:gap-y-16 gap-x-8 pt-10">
                {services.map((service, index) => (
                    <div
                    key={index}
className="relative bg-[#d1cfcf] pt-12 p-6 rounded-2xl shadow-md hover:shadow-lg transition overflow-visible min-h-[260px] flex flex-col"
                    >
                    {/* Teardrop badge */}
                    <div className="teardrop">
                        <div className="teardrop-icon">
                            {service.icon}
                        </div>
                    </div>

<h3 className="text-lg font-bold text-gray-900 mb-2 mt-1 text-center">
                        {service.title}
                    </h3>
<div className="text-black text-sm text-left space-y-3">
                        {Array.isArray(service.description) ? (
                            service.description.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))
                        ) : (
                            <p>{service.description}</p>
                        )}
                    </div>
<Link to="/services" className="mt-auto pt-2 text-black font-medium hover:underline" aria-label={`Learn more about ${service.title}`}>
                        Learn more →
                    </Link>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
