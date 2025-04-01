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
    <section className="container py-5">
      <h2 className="wow fadeInUp text-center py-4">
        Our Clientele
      </h2>

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "sector" ? "active" : ""}`}
            onClick={() => setActiveTab("sector")}
          >
            Sector Wise
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "country" ? "active" : ""}`}
            onClick={() => setActiveTab("country")}
          >
            Country Wise
          </button>
        </li>
      </ul>

      {/* Logo Grid */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 bg-white shadow rounded p-4">
        {(activeTab === "sector" ? sectorLogos : countryLogos).map((logo) => (
          <div key={logo.id} className="col d-flex justify-content-center align-items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="img-fluid border border-light shadow-sm rounded"
              style={{ maxWidth: "150px" }}
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