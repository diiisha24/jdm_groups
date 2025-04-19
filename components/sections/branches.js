"use client";
import React from "react";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IndianBranches = () => {
  const networkData = [
    {
      region: "Delhi",
      headquarters: "A-75, Road No. 4, Street No. 6, Mahipalpur Extn., New Delhi 110037",
    },
    {
      region: "Mumbai",
      headquarters: "Shelton Sapphire, B-301, Plot no 18 & 19, Palm Beach Rd, Near Sessions Court, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614",
    },
    {
      region: "Mumbai (Cargo Complex)",
      headquarters: "119, Business Point, 502 A-Wing, 5th Floor, Near Sahar Cargo Complex, Sahar Road, Andheri (E), Mumbai 400099",
    },
    {
      region: "Chennai",
      headquarters: "Kayal Tower No.67/22, 3rd Floor, Velachery Road, Little Mount, Saidapet Chennai - 600 015",
    },
    {
      region: "Bangalore",
      headquarters: "#2734, 14th Main, E Block, Sahakara Nagar, Bangalore 560092",
    },
    {
      region: "Pune",
      headquarters: "Office No - 605 A, 6th floor Nandan Probiz, Balewadi, Pune-411045",
    },
    {
      region: "Ahmedabad",
      headquarters: "Unit No. 1006, 10th Floor Sakar-IX Near Old RBI Road Ahmedabad - 380009",
    },
    {
      region: "Mundra",
      headquarters: "Office No. 34, Shardha Complex, Near ZERO POINT, HDFC Bank, Mundra Kutch, Gujarat - 370421",
    },
    {
      region: "Pipavav",
      headquarters: "Ram Plaza Complex, Ground Floor, Office No. 7, 8/H Street Ram Petrol Pump, Pipavav Port - 365550",
    },
    {
      region: "Kathuwas",
      headquarters: "Cabin No. 5, 1st Floor, Admin Building, Inland Container Depot, Kathuwas, Alwar, Rajasthan 301704",
    },
    {
      region: "Dadri",
      headquarters: "F-44, Concor Administrative Building, ICD Dadri, Gautam Budh Nagar, Uttar Pradesh 201307",
    },
  ];

  const stateGroups = {
    "Delhi": [
      { region: "Delhi", headquarters: "A-75, Road No. 4, Street No. 6, Mahipalpur Extn., New Delhi 110037" },
      { region: "Dadri", headquarters: "F-44, Concor Administrative Building, ICD Dadri, Gautam Budh Nagar, Uttar Pradesh 201307" },
    ],
    "Maharashtra": [
      { region: "Mumbai", headquarters: "Shelton Sapphire, B-301, Plot no 18 & 19, Palm Beach Rd, Near Sessions Court, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614" },
      { region: "Mumbai (Cargo Complex)", headquarters: "119, Business Point, 502 A-Wing, 5th Floor, Near Sahar Cargo Complex, Sahar Road, Andheri (E), Mumbai 400099" },
      { region: "Pune", headquarters: "Office No - 605 A, 6th floor Nandan Probiz, Balewadi, Pune-411045" },
    ],
    "Tamil Nadu": [
      { region: "Chennai", headquarters: "Kayal Tower No.67/22, 3rd Floor, Velachery Road, Little Mount, Saidapet Chennai - 600 015" },
    ],
    "Karnataka": [
      { region: "Bangalore", headquarters: "#2734, 14th Main, E Block, Sahakara Nagar, Bangalore 560092" },
    ],
    "Gujarat": [
      { region: "Ahmedabad", headquarters: "Unit No. 1006, 10th Floor Sakar-IX Near Old RBI Road Ahmedabad - 380009" },
      { region: "Mundra", headquarters: "Office No. 34, Shardha Complex, Near ZERO POINT, HDFC Bank, Mundra Kutch, Gujarat - 370421" },
      { region: "Pipavav", headquarters: "Ram Plaza Complex, Ground Floor, Office No. 7, 8/H Street Ram Petrol Pump, Pipavav Port - 365550" },
    ],
    "Rajasthan": [
      { region: "Kathuwas", headquarters: "Cabin No. 5, 1st Floor, Admin Building, Inland Container Depot, Kathuwas, Alwar, Rajasthan 301704" },
    ],
  };

  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 500,
    loop: true,
    autoplay: { delay: 3000 },
    breakpoints: {
      1350: { slidesPerView: 3 },
      991: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      575: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
  };

  return (
    <div>
      <Head>
        <title>JDM India Branches</title>
      </Head>
      <section className="hero" id="indian-branches">
        <div className="brand-section fix pt-0 section-bg-2">
          <div className="p-4">
            <div className="section-title text-center">
              <h2 className="wow fadeInUp text-white" data-wow-delay=".2s">
                Our Locations
              </h2>
            </div>
            <div className="swiper brand-slider">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {Object.entries(stateGroups).map(([state, regions]) => (
                  <SwiperSlide key={state} className="swiper-slide">
                    <div className="map-container-wrapper">
                      <div
                        className="map-container"
                        // onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                        // onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        data-details={JSON.stringify(regions)}
                      >
                        <svg
                          width="200"
                          height="200"
                          viewBox="0 0 100 100"
                          style={{ background: `url("/assets/img/JDM India/${state.toLowerCase()}.jpg") no-repeat center / contain` }}
                        >
                          {/* Removed pointers */}
                        </svg>
                      </div>
                      <div className="details-panel">
                        <ul className="details-list">
                          {regions.map((region, idx) => (
                            <li key={idx} className="detail-item">
                              <span className="region-name">
                                {region.region}
                              </span>
                              <span className="address">
                                {region.headquarters}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 60px 0;
        }
        .brand-section {
          background-color: var(--theme, #f8f9fa);
        }
        .map-container-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 250px;
        }
        .map-container-wrapper:hover .details-panel .region-name,
        .map-container-wrapper:hover .details-panel .address {
          display: inline;
        }
        .map-container {
          flex-shrink: 0;
          width: 200px;
          height: 200px;
          transition: transform 0.3s ease;
        }
        .map-container:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
        .details-panel {
          flex-grow: 1;
          margin-left: 20px;
          max-width: 300px;
          font-size: 12px;
          line-height: 15px;
        }
        .details-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .detail-item {
          margin-bottom: 10px;
        }
        .region-name {
          font-weight: bold;
          color: var(--theme2);
        }
        .address {
          color: white;
          margin-left: 10px;
        }
        .details-panel .region-name,
        .details-panel .address {
          display: none;
        }
        @media (max-width: 768px) {
          .map-container-wrapper {
            flex-direction: column;
            text-align: center;
          }
          .details-panel {
            margin-left: 0;
            margin-top: 20px;
            max-width: 100%;
          }
          .map-container:hover + .details-panel .region-name,
          .map-container:hover + .details-panel .address {
            display: inline;
          }
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff;
        }
        .swiper-pagination-bullet-active {
          background: #007bff;
        }
      `}</style>
    </div>
  );
};

export default IndianBranches;