"use client";
import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css"; // Import styles if needed

const defaultData = {
  title: "Our Story",
  description:
    "**JDM Group** was conceptualized by **Late Mr. Pahlad Singh** in 1978, starting with transportation in the logistics field. Renowned for his steadfast commitments, he built a legacy that **JDM** proudly continues under the leadership of **Group Chairman & Managing Director Mr. Sahil Sehrawat** and our dedicated team. **JDM** has evolved into one of the fastest-growing integrated supply chain logistics enterprises with the following verticals:",
  image1: "assets/img/about/03.jpg",
  image2: "assets/img/about/04.jpg",
  features: [
    "JDM Worldwide Freight Solutions Pvt. Ltd. – International Freight Forwarding",
    "JDM Cargo Planners Pvt. Ltd. – Customs Brokerage, Warehousing, Consultancy",
    "JDM Express Pvt. Ltd. – Courier Service",
    "Arrow Transport Service – Transportation",
    "AS Transport Service – Transportation",
  ],
};

const About1 = () => {
  const [isOpen, setOpen] = useState(false);
  const [aboutData, setAboutData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"; // Fallback URL
    const controller = new AbortController();

    const fetchAboutData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/aboutus/api/banner/`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        if (data && typeof data === "object") {
          setAboutData({
            title: data.title || defaultData.title,
            description: data.description || defaultData.description,
            image1: data.image1 || defaultData.image1,
            image2: data.image2 || defaultData.image2,
            videoId: data.videoId || defaultData.videoId,
            features: data.features || defaultData.features,
          });
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching about data:", error);
          setError("Failed to load about data.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutData();

    return () => controller.abort(); // Cleanup on unmount
  }, []);

  // Render HTML from markdown-like description
  const renderDescription = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <section className="about-section fix section-padding" id="about">
      <div className="about-shape-1 float-bob-x">
        <img src="assets/img/about/about-shape-4.png" alt="Decorative shape 1" />
      </div>
      <div className="about-shape-2 float-bob-x">
        <img src="assets/img/about/about-shape-5.png" alt="Decorative shape 2" />
      </div>
      <div className="container">
        <div className="about-wrapper">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      {aboutData.title}
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".4s"
                    dangerouslySetInnerHTML={{
                      __html: renderDescription(aboutData.description),
                    }}
                  />
                  <ul className="list-items wow fadeInUp fst-italic" data-wow-delay=".2s">
                    {aboutData.features.map((feature, index) => (
                      <li key={index}>
                        <i
                          className="fa-solid fa-circle-check"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {aboutData.videoId && (
                    <button
                      onClick={() => setOpen(true)}
                      className="video-btn wow fadeInUp"
                      data-wow-delay=".6s"
                      aria-label="Play video"
                    >
                      Watch Our Story
                    </button>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image">
                  <img
                    src={aboutData.image1}
                    alt="JDM Group history"
                    className="wow fadeInLeft"
                    data-wow-delay=".2s"
                  />
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src={aboutData.image2} alt="JDM Group operations" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {aboutData.videoId && (
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={aboutData.videoId}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default About1;