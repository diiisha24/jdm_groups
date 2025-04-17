"use client";
import React from "react";
import Head from "next/head";
import Layout from "../../components/layout/Layout";

const IndianBranches = () => {
  // Data for Indian branches
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

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="indian-branches">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            <i>JDM
            </i> India
          </h2>
        </div>
        <div className="branches-section">
          <div className="container">
            <div className="branches-grid wow fadeInUp" data-wow-delay=".7s">
              {networkData.map((branch, index) => (
                <div key={index} className="branch-item">
                  <h3 className="text-xl font-semibold">{branch.region}</h3>
                  <p className="text-gray-600">
                    Address: {branch.headquarters}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inline Styles */}
      <style jsx>{`
        .hero {
          padding: 60px 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .branches-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 columns per row */
          gap: 20px;
        }
        .branch-item {
          display: flex;
          flex-direction: column; /* Stack heading and paragraph vertically */
          padding: 20px;
          border-radius: 8px;
          /* Removed background for transparency */
        }
        .branch-item h3 {
          color: var(--theme);
          margin-bottom: 10px;
          flex-shrink: 0; /* Prevent heading from shrinking */
          text-align: left; /* Ensure consistent left alignment */
          font-size: 18px;
        }
        .branch-item p {
          color: #666;
          line-height: 1.6;
          flex-grow: 1; /* Allow paragraph to take up remaining space */
        }
        @media (max-width: 1024px) {
          .branches-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
          }
        }
        @media (max-width: 640px) {
          .branches-grid {
            grid-template-columns: 1fr; /* 1 column on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default IndianBranches;