"use client";
import React, { useState, useEffect } from "react";

// Default data for Vision, Mission, and Founder sections
const defaultData = {
  mission: "To provide operational excellence, competitive costs, and transparency to our customers for sourcing and distributing in the integrated supply chain environment, globally.",
  vision: "We are determined to be among the market leaders offering reliable services, meeting customer expectations through well-trained staff, and striving for continuous growth in the logistics industry.",
  founderImage: "/assets/img/Founder/Lt. Sh. Pahlad Singh Ji.png",
  founderDescription: "Late Mr. Pahlad Singh, the visionary founder of JDM Group, laid the foundation of our legacy in 1978.",
};

const VisionMissionFounder = () => {
  const [aboutData, setAboutData] = useState(defaultData);

  // Fetch data from API on mount
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

          {/* Right Column: Mission, Vision, and Founder Description */}
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

            {/* Our Founder
            <div className="about-content bg-white shadow-sm p-4 rounded">
              <div className="section-title">
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Our Founder
                </h2>
              </div>
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionFounder;