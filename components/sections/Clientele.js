"use client";
import React, { useState, useEffect } from "react";

const Clientele = () => {
  const [activeTab, setActiveTab] = useState("sector");
  const [sectorLogos, setSectorLogos] = useState([]);
  const [countryLogos, setCountryLogos] = useState([]);

  useEffect(() => {
    const fetchSectorLogos = () => {
      const logos = Array.from({ length: 200 }, (_, index) => ({
        id: index,
        src: `/assets/img/customer_logo/CSL-${index + 1}.png`,
        alt: `Sector Logo ${index + 1}`,
      }));
      setSectorLogos(logos);
    };

    const fetchCountryLogos = () => {
      const logos = Array.from({ length: 200 }, (_, index) => ({
        id: index,
        src: `https://via.placeholder.com/150?text=Country+Logo+${index + 1}`,
        alt: `Country Logo ${index + 1}`,
      }));
      setCountryLogos(logos);
    };

    fetchSectorLogos();
    fetchCountryLogos();
  }, []);

  return (
    <section className="clientele-section container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 uppercase">
        Our Clientele
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b border-gray-300">
        <button
          className={`px-6 py-3 text-lg font-medium transition-colors duration-300 focus:outline-none ${
            activeTab === "sector"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-primary"
          }`}
          onClick={() => setActiveTab("sector")}
        >
          Sector Wise
        </button>
        <button
          className={`px-6 py-3 text-lg font-medium transition-colors duration-300 focus:outline-none ${
            activeTab === "country" 
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-primary"
          }`}
          onClick={() => setActiveTab("country")}
        >
          Country Wise
        </button>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-white shadow-lg rounded-lg">
        {(activeTab === "sector" ? sectorLogos : countryLogos).map((logo) => (
          <div key={logo.id} className="flex items-center justify-center p-4">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-25 object-contain border border-gray-200 shadow-sm rounded-lg"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/fallback-image.png";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientele;
