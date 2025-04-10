"use client";
import React, { useState, useEffect } from "react";

const Clientele = () => {
  const [activeTab, setActiveTab] = useState("sector");
  const [activeSector, setActiveSector] = useState("Agriculture");
  const [sectorLogos, setSectorLogos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSectorLogos = () => {
      const sectors = [
        { name: "Agriculture", logos: Array.from({ length: 3 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Agriculture/${i + 1}.png`, alt: `Agriculture Logo ${i + 1}` })) },
        { name: "Auto Industries", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Auto Industries/${i + 1}.png`, alt: `Auto Industries Logo ${i + 1}` })) },
        { name: "Aviation", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Aviation/${i + 1}.png`, alt: `Aviation Logo ${i + 1}` })) },
        { name: "Chemicals", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Chemicals/${i + 1}.png`, alt: `Chemicals Logo ${i + 1}` })) },
        { name: "Construction", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Construction/${i + 1}.png`, alt: `Construction Logo ${i + 1}` })) },
        { name: "Energy", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Energy/${i + 1}.png`, alt: `Energy Logo ${i + 1}` })) },
        { name: "Foods", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Foods/${i + 1}.png`, alt: `Foods Logo ${i + 1}` })) },
        { name: "Home Appliance", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Home_Appliance/${i + 1}.png`, alt: `Home Appliance Logo ${i + 1}` })) },
        { name: "Luxury", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Luxury/${i + 1}.png`, alt: `Luxury Logo ${i + 1}` })) },
        { name: "Medical", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Medical/${i + 1}.png`, alt: `Medical Logo ${i + 1}` })) },
        { name: "Mobile Spare Parts", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Mobile_Spare_Parts/${i + 1}.png`, alt: `Mobile Spare Parts Logo ${i + 1}` })) },
        { name: "Paper and Packaging", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Paper_and_Packaging/${i + 1}.png`, alt: `Paper and Packaging Logo ${i + 1}` })) },
        { name: "RMG and Fashion", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/RMG_and_Fashion/${i + 1}.png`, alt: `RMG and Fashion Logo ${i + 1}` })) },
        { name: "Safety and Security", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Safety_and_Security/${i + 1}.png`, alt: `Safety and Security Logo ${i + 1}` })) },
        { name: "Steel and Iron", logos: Array.from({ length: 8 }, (_, i) => ({ id: i, src: `/assets/img/customer_logo/Sector_Wise/Steel_and_Iron/${i + 1}.png`, alt: `Steel and Iron Logo ${i + 1}` })) },
      ];
      setSectorLogos(sectors);
    };

    fetchSectorLogos();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${apiUrl}/clientele/api/`);
          const data = await response.json();
          if (data && data.sectors && Array.isArray(data.sectors) && data.sectors.length > 0) {
            setSectorLogos(data.sectors);
          }
        } catch (error) {
          console.error("Error fetching clientele data:", error);
        }
      };
      fetchData();
    }
  }, []);

  const handleTabChange = (tab) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
    }, 500);
  };

  const handleSectorChange = (sectorName) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveSector(sectorName);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    console.log("Active Tab:", activeTab);
    console.log("Active Sector:", activeSector);
    console.log("Sector Logos:", sectorLogos);
  }, [activeTab, activeSector, sectorLogos]);

  const selectedSectorLogos = sectorLogos.find((sector) => sector.name === activeSector)?.logos || [];

  return (
    <section className="container py-5" id="clientele">
      <h2 className="wow fadeInUp text-center py-4">Our Clientele</h2>

      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "sector" ? "active" : ""}`}
            onClick={() => handleTabChange("sector")}
          >
            Sectors
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "country" ? "active" : ""}`}
            onClick={() => handleTabChange("country")}
          >
            Country
          </button>
        </li>
      </ul>

      <div className="clientele-box bg-white shadow">
        {activeTab === "sector" ? (
          sectorLogos.length > 0 ? (
            <div className="sector-container">
              <ul className="sector-nav">
                {sectorLogos.map((sector) => (
                  <li
                    key={sector.name}
                    className={activeSector === sector.name ? "active" : ""}
                  >
                    <button onClick={() => handleSectorChange(sector.name)}>
                      {sector.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="sector-content">
                {isLoading ? (
                  <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                  </div>
                ) : (
                  <>
                    <h3 className="wow fadeInUp color-theme" data-wow-delay=".2s">
                      {activeSector}
                    </h3>
                    {selectedSectorLogos.length > 0 ? (
                      <div className="logo-grid">
                        {selectedSectorLogos.map((logo) => (
                          <div key={logo.id} className="grid-item">
                            <div className="brand-image center">
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                className="img-fluid"
                                style={{ maxWidth: "150px" }}
                                loading="lazy"
                                onError={(e) => {
                                  e.target.src = "/fallback-image.png";
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No logos available for this sector.</p>
                    )}
                  </>
                )}
              </div>
            </div>
          ) : (
            <p>Loading sectors or no data available...</p>
          )
        ) : (
          <div className="sector-content">
            {isLoading ? (
              <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading...</p>
              </div>
            ) : (
              <p>Country-wise clientele coming soon...</p>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-tabs {
          border-bottom: none;
        }
        .nav-link {
          width: 200px;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
          background: #f8f9fa;
          border: none;
          border-radius: 25px;
          margin: 0 10px;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }
        .nav-link:hover {
          background: #e9ecef;
          color: #000;
        }
        .nav-link.active {
          background: var(--theme, #f59e0b);
          color: #fff;
        }
        .clientele-box {
          /* Removed min-height as it's not needed anymore */
        }
        .sector-container {
          display: flex;
          flex-direction: row;
          gap: 20px;
          height: 100%;
        }
        .sector-nav {
          width: 250px;
          list-style: none;
          padding: 0;
          margin: 0;
          background: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .sector-nav li {
          display: block;
          width: 100%;
        }
        .sector-nav li button {
          width: 100%;
          padding: 12px 20px;
          font-size: 15px;
          font-weight: 500;
          color: #333;
          background: none;
          border: none;
          border-bottom: 1px solid #eee;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .sector-nav li:last-child button {
          border-bottom: none;
        }
        .sector-nav li:hover button,
        .sector-nav li.active button {
          background: var(--theme, #f59e0b);
          color: #fff;
        }
        .sector-content {
          flex: 1;
          padding: 20px;
          position: relative;
          min-height: 400px; /* Added to ensure loading spinner has space */
        }
        .sector-content h3 {
          margin-bottom: 20px;
          text-align: center;
        }
        .logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          justify-items: center;
          max-height: 400px;
          overflow-y: auto;
        }
        .grid-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .brand-image.center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loading-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid var(--theme, #f59e0b);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 767px) {
          .sector-container {
            flex-direction: column;
          }
          .sector-nav {
            width: 100%;
          }
          .logo-grid {
            max-height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Clientele;