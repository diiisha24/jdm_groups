"use client";
import React, { useState, useEffect } from "react";

// Default data for Vision, Mission, Founder, Values, and Strengths sections
const defaultData = {
  mission: "To provide operational excellence, competitive costs, and transparency to our customers for sourcing and distributing in the integrated supply chain environment, globally.",
  vision: "We are determined to be among the market leaders offering reliable services, meeting customer expectations through well-trained staff, and striving for continuous growth in the logistics industry.",
  founderImage: "/assets/img/Founder/Lt. Sh. Pahlad Singh Ji.png",
  founderDescription: "Late Mr. Pahlad Singh, the visionary founder of JDM Group, laid the foundation of our legacy in 1978.",
  values: ["Integrity", "Reliability", "Commitment", "Accountability", "Customer Centric"],
  strengths: [
    "Strong Worldwide Agency Network",
    "Recognized 24*7 Customs Brokerage",
    "10+ offices at prominent locations in India",
    "Dedicated customer support for personalized services",
    "Comprehensive compliance and regulatory expertise to ensure smooth logistics solutions",
  ],
};

const VisionMissionFounder = () => {
  const [aboutData, setAboutData] = useState(defaultData);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${apiUrl}/aboutus/api/banner/`);
        const data = await response.json();
        if (data && typeof data === "object") {
          setAboutData({
            mission: data.mission || defaultData.mission,
            vision: data.vision || defaultData.vision,
            founderImage: data.founderImage || defaultData.founderImage,
            founderDescription: data.founderDescription || defaultData.founderDescription,
            values: data.values || defaultData.values,
            strengths: data.strengths || defaultData.strengths,
          });
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="container mb-5">
      <div className="about-wrapper">
        <div className="row g-4 align-items-center">
          {/* Left Column: Founder Photo */}
          <div className="col-lg-6">
            <div className="wow fadeInLeft about-image founder" data-wow-delay=".2s">
              <img src={aboutData.founderImage} alt="Founder Image" className="img-fluid" />
            </div>
          </div>

          {/* Right Column: Mission, Vision, Founder Description */}
          <div className="col-lg-6">
            <p className="mt-3 mb-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
              {aboutData.founderDescription}
            </p>

            {/* Mission */}
            <div className="about-content bg-white shadow-sm p-4 rounded mb-4">
              <div className="section-title">
                <h3 className="wow fadeInUp color-theme" data-wow-delay=".2s">
                  Our Mission
                </h3>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp text-muted" data-wow-delay=".4s">
                {aboutData.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="about-content bg-white shadow-sm p-4 rounded mb-4">
              <div className="section-title">
                <h3 className="wow fadeInUp color-theme" data-wow-delay=".2s">
                  Our Vision
                </h3>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp text-muted" data-wow-delay=".4s">
                {aboutData.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Row for Values and Strengths */}
        <div className="row g-4 mt-4">
          {/* Values Box */}
          <div className="col-12 col-md-6">
            <div className="about-content enhanced-box bg-gradient p-4 rounded mb-4">
              <div className="section-title">
                <h3 className="wow fadeInUp color-theme" data-wow-delay=".2s">
                  Our Values
                </h3>
              </div>
              <ul className="mt-3 wow fadeInUp text-muted" data-wow-delay=".4s">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="value-item mb-3 d-flex align-items-center">
                    <i className="fas fa-check-circle me-2 text-success"></i>
                    <span className="fw-bold text-dark">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strengths Box */}
          <div className="col-12 col-md-6">
            <div className="about-content enhanced-box bg-gradient p-4 rounded">
              <div className="section-title">
                <h3 className="wow fadeInUp color-theme" data-wow-delay=".2s">
                  Our Key Strengths
                </h3>
              </div>
              <ul className="mt-3 wow fadeInUp text-muted" data-wow-delay=".4s">
                {aboutData.strengths.map((strength, index) => (
                  <li key={index} className="strength-item mb-3 d-flex align-items-center">
                    <i className="fas fa-star me-2 text-warning"></i>
                    <span className="fw-bold text-dark">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .about-content {
          transition: all 0.3s ease;
        }
        .section-title h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .enhanced-box {
          border: 1px solid #ddd;
          height:100%;
          background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
        }
        ul {
          list-style-type: none;
          padding-left: 0;
        }
        .value-item:hover,
        .strength-item:hover {
          color: #333;
        }
        .value-item .fas.fa-check-circle,
        .strength-item .fas.fa-star {
          font-size: 1rem;
        }
        .fw-bold {
          font-weight: 600;
        }
        @media (max-width: 767px) {
          .row.align-items-center {
            flex-direction: column-reverse;
          }
          .col-lg-6 {
            width: 100%;
          }
          .col-md-6 {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default VisionMissionFounder;