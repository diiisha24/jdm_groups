"use client";
import React, { useState, useEffect } from 'react';

const Clientele = () => {
  const [activeTab, setActiveTab] = useState('sector');
  const [sectorLogos, setSectorLogos] = useState([]);
  const [countryLogos, setCountryLogos] = useState([]);

  // Simulate fetching logos (replace with real data source as needed)
  useEffect(() => {
    const fetchSectorLogos = () => {
      const logos = Array.from({ length: 200 }, (_, index) => ({
        id: index,
        src: `assets/img/customer_logo/CSL-${index + 1}.png`,
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
    <section className="clientele-section">
      <h2 className="section-title">Our Clientele</h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'sector' ? 'active' : ''}`}
          onClick={() => setActiveTab('sector')}
        >
          Sector Wise
        </button>
        <button
          className={`tab ${activeTab === 'country' ? 'active' : ''}`}
          onClick={() => setActiveTab('country')}
        >
          Country Wise
        </button>
      </div>

      {/* Logo Grid */}
      <div className="logo-grid">
        {(activeTab === 'sector' ? sectorLogos : countryLogos).map((logo) => (
          <div key={logo.id} className="logo-item">
            <img
              src={logo.src}
              alt={logo.alt}
              className="logo-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = '/fallback-image.png';
              }}
            />
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .clientele-section {
          min-height: 100vh;
          padding: 40px 20px;
          background: #ffffff;
          text-align: center;
          font-family: 'Roboto', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 36px;
          color: #1a1a1a;
          margin-bottom: 30px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .tabs {
          display: flex;
          justify-content: flex-start;
          border-bottom: 2px solid #808080;
          margin-bottom: 20px;
        }

        .tab {
          padding: 10px 20px;
          font-size: 18px;
          color: #333;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          bottom: -2px;
        }

        .tab:hover {
          color: #d32f2f;
        }

        .tab.active {
          border-bottom: 2px solid #d32f2f;
          color: #d32f2f;
        }

        .logo-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          padding: 20px;
          border: 2px solid #808080;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .logo-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-image {
          width: 120px;
          height: 120px;
          object-fit: contain;
        }

        @media (max-width: 1200px) {
          .logo-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 900px) {
          .logo-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .logo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 28px;
          }

          .tab {
            font-size: 16px;
            padding: 8px 12px;
          }

          .logo-image {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Clientele;