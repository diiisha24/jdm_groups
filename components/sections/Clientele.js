"use client";
import React, { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper configuration
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: { slidesPerView: 5 },
    991: { slidesPerView: 4 },
    767: { slidesPerView: 3 },
    575: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
};

const Clientele = () => {
  const [activeTab, setActiveTab] = useState("sector");
  const [sectorLogos, setSectorLogos] = useState([]);
  const [countryLogos, setCountryLogos] = useState([]);

  useEffect(() => {
    const fetchSectorLogos = () => {
      const sectors = [
        {
          name: "Agriculture",
          logos: Array.from({ length: 3 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Agriculture/${index + 1}.png`,
            alt: `Agriculture Logo ${index + 1}`,
          })),
        },
        {
          name: "Auto Industries",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Auto Industries/${index + 1}.png`,
            alt: `Auto Industries Logo ${index + 1}`,
          })),
        },
        {
          name: "Aviation",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Aviation/${index + 1}.png`,
            alt: `Aviation Logo ${index + 1}`,
          })),
        },
        {
          name: "Chemicals",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Chemicals/${index + 1}.png`,
            alt: `Chemicals Logo ${index + 1}`,
          })),
        },
        {
          name: "Construction",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Construction/${index + 1}.png`,
            alt: `Construction Logo ${index + 1}`,
          })),
        },
        {
          name: "Energy",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Energy/${index + 1}.png`,
            alt: `Energy Logo ${index + 1}`,
          })),
        },
        {
          name: "Foods",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Foods/${index + 1}.png`,
            alt: `Foods Logo ${index + 1}`,
          })),
        },
        {
          name: "Home Appliance",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Home_Appliance/${index + 1}.png`,
            alt: `Home Appliance Logo ${index + 1}`,
          })),
        },
        {
          name: "Luxury",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Luxury/${index + 1}.png`,
            alt: `Luxury Logo ${index + 1}`,
          })),
        },
        {
          name: "Medical",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Medical/${index + 1}.png`,
            alt: `Medical Logo ${index + 1}`,
          })),
        },
        {
          name: "Mobile Spare Parts",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Mobile_Spare_Parts/${index + 1}.png`,
            alt: `Mobile Spare Parts Logo ${index + 1}`,
          })),
        },
        {
          name: "Paper and Packaging",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Paper_and_Packaging/${index + 1}.png`,
            alt: `Paper and Packaging Logo ${index + 1}`,
          })),
        },
        {
          name: "RMG and Fashion",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/RMG_and_Fashion/${index + 1}.png`,
            alt: `RMG and Fashion Logo ${index + 1}`,
          })),
        },
        {
          name: "Safety and Security",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Safety_and_Security/${index + 1}.png`,
            alt: `Safety and Security Logo ${index + 1}`,
          })),
        },
        {
          name: "Steel and Iron",
          logos: Array.from({ length: 8 }, (_, index) => ({
            id: index,
            src: `/assets/img/customer_logo/Sector_Wise/Steel_and_Iron/${index + 1}.png`,
            alt: `Steel and Iron Logo ${index + 1}`,
          })),
        },
      ];
      setSectorLogos(sectors); // Fixed typo: sectorLogos to sectors
    };

    const fetchCountryLogos = () => {
      const logos = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        src: `https://via.placeholder.com/150?text=Country+Logo+${index + 1}`,
        alt: `Country Logo ${index + 1}`,
      }));
      setCountryLogos(logos);
    };

    fetchSectorLogos();
    fetchCountryLogos();

    // Optional API fetching
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/clientele/api/`);
        const data = await response.json();
        if (data && typeof data === "object") {
          setSectorLogos(data.sectors || sectorLogos);
          setCountryLogos(data.countries || countryLogos);
        }
      } catch (error) {
        console.error("Error fetching clientele data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container py-5" id="clientele">
      <h2 className="wow fadeInUp text-center py-4">Our Clientele</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center">
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

      {/* Tab Content */}
      <div className="clientele-box bg-white shadow p-4">
        {activeTab === "sector" ? (
          sectorLogos.map((sector, index) => (
            <div key={index} className="about-wrapper mb-5">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp color-theme" data-wow-delay=".2s">
                  {sector.name}
                </h3>
              </div>
              <div className="swiper brand-slider">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  {sector.logos.map((logo) => (
                    <SwiperSlide key={logo.id} className="swiper-slide">
                      <div className="brand-image center">
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))
        ) : (
          <div className="swiper brand-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {countryLogos.map((logo) => (
                <SwiperSlide key={logo.id} className="swiper-slide">
                  <div className="brand-image center">
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      <style jsx>{`
          .clientele-box {
            max-height: 500px;
            overflow-y: scroll;
          }
      `}
      </style>
    </section>
  );
};

export default Clientele;