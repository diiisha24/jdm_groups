"use client"
import { useState, useEffect } from 'react'
import ModalVideo from 'react-modal-video'

// Default data as fallback
const defaultData = {
  title: "JDM Group Of Companies",
  description: "Our mission is to provide operational excellence, competitive cost control and visibility to our customers who are globally sourcing and distributing in an integrated supply chain environment.",
  image1: "assets/img/about/03.jpg",
  image2: "assets/img/about/04.jpg",
  videoId: "JXMWOmuR1hU",
  features: [
    "JDM Worldwide Freight Solutions Pvt. Ltd.",
      "JDM Cargo Planners Pvt. Ltd.",
      "JDM Express Pvt. Ltd.",
      "Arrow Transport Service",
      "AS Transport Service"
  ],
};

export default function About1() {
  const [isOpen, setOpen] = useState(false);
  const [aboutData, setAboutData] = useState(defaultData); // Initialize with default data

  // Fetch data from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${apiUrl}/aboutus/api/banner/`);
        const data = await response.json();
        // Assuming the API returns an object with title, description, images, videoId, and features
        if (data && typeof data === "object") {
          setAboutData({
            title: data.title || defaultData.title,
            description: data.description || data.content || defaultData.description,
            image1: data.image1 || data.mainImage || defaultData.image1,
            image2: data.image2 || data.secondaryImage || defaultData.image2,
            videoId: data.videoId || data.video || defaultData.videoId,
            features: data.features || data.list || defaultData.features, // Expecting an array of strings
          });
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
        // Fallback to defaultData (already set)
      }
    };

    fetchAboutData();
  }, []); // Runs once on mount

  return (
    <>
      <section className="about-section fix section-padding" id="about">
        <div className="about-shape-1 float-bob-x">
          <img src="assets/img/about/about-shape-4.png" alt="img" />
        </div>
        <div className="about-shape-2 float-bob-x">
          <img src="assets/img/about/about-shape-5.png" alt="img" />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <img
                    src={aboutData.image1}
                    alt="About Image"
                    className="wow fadeInLeft"
                    data-wow-delay=".2s"
                  />
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src={aboutData.image2} alt="About Image 2" />
                    <div className="video-box">
                      <a
                        onClick={() => setOpen(true)}
                        className="video-btn video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="about-line-shape">
                    <img src="assets/img/about/about-shape-3.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long" />
                      about us
                      <i className="fa-regular fa-arrow-right-long" />
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      {aboutData.title}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    {aboutData.description}
                  </p>
                  <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
                    {aboutData.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-circle-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={aboutData.videoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
}