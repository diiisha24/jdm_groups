"use client";
import React, { useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout/Layout";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("events"); // Default to "Events" tab
  const [activeEvent, setActiveEvent] = useState(0); // Default to first event
  const [activeCelebration, setActiveCelebration] = useState(0); // Default to first celebration

  // Events with multiple images
  const eventImages = [
    {
      title: "WCA World Experience",
      images: [
        {
          src: "https://media.licdn.com/dms/image/v2/D4E22AQHOqoTdxNY17w/feedshare-shrink_1280/B4EZV.wPOWGYAk-/0/1741588330193?e=1747267200&v=beta&t=ukHbzgV4-GwIkMrSVkjPK7ud1HW-O_J3VVtzA8pnc9I",
          alt: "WCA World Experience 1",
          caption: "WCA World Experience - Day 1",
        },
        {
          src: "https://via.placeholder.com/800x600?text=WCA+World+2",
          alt: "WCA World Experience 2",
          caption: "WCA World Experience - Day 2",
        },
      ],
    },
    {
      title: "New Office In Pune",
      images: [
        {
          src: "https://media.licdn.com/dms/image/v2/D5622AQFXgBB2h9ZMbA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732275751421?e=1747267200&v=beta&t=9Wq5RZTOc6KBihtQekikGUz8DJEIhb_CSce3pS_9jng",
          alt: "Office In Pune 1",
          caption: "New Office In Pune - Opening",
        },
        {
          src: "assets/img/service/Warehouse.jpg",
          alt: "Office Space",
          caption: "New Office In Pune - Workspace",
        },
      ],
    },
    {
      title: "Cargo Operations",
      images: [
        {
          src: "assets/img/service/Courier.jpg",
          alt: "Loading Cargo",
          caption: "Precision in every load",
        },
      ],
    },
  ];

  // Celebrations with multiple images
  const celebrationImages = [
    {
      title: "Christmas Celebration",
      images: [
        {
          src: "https://media.licdn.com/dms/image/v2/D5622AQFC4XkRgwesWQ/feedshare-shrink_800/B56ZQCTIZAHQAg-/0/1735205358038?e=1747267200&v=beta&t=9wZ-n41BjSOmdpsaoWR59qn0KskXtikcUnRRJVvQHBo",
          alt: "Celebrating Christmas 1",
          caption: "Christmas Celebration - Team",
        },
        {
          src: "https://via.placeholder.com/800x600?text=Christmas+2",
          alt: "Celebrating Christmas 2",
          caption: "Christmas Celebration - Decor",
        },
      ],
    },
    {
      title: "Diwali Celebration 2024",
      images: [
        {
          src: "https://media.licdn.com/dms/image/v2/D5622AQGlZSm6-z7aWA/feedshare-shrink_800/feedshare-shrink_800/0/1731326296205?e=1747267200&v=beta&t=2bnQewQ4PrwDbYFnQ4u-M09kQPT0bouYHa0Hn0IZBFs",
          alt: "Diwali Celebration",
          caption: "Diwali Celebration 2024 - Lights",
        },
        {
          src: "https://via.placeholder.com/800x600?text=Diwali+2",
          alt: "Diwali Celebration 2",
          caption: "Diwali Celebration 2024 - Festivities",
        },
      ],
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery">
      <Head>
        <title>Gallery | JDM Logistics</title>
        <meta
          name="description"
          content="Explore our gallery showcasing JDM Logistics' events and celebrations."
        />
      </Head>

      {/* Hero Section */}
      <section className="hero" id="gallery">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Explore JDM Group
          </h2>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "events" ? "active" : ""}`}
              onClick={() => setActiveTab("events")}
            >
              Events
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "celebrations" ? "active" : ""}`}
              onClick={() => setActiveTab("celebrations")}
            >
              Celebrations
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="gallery-content">
          {activeTab === "events" ? (
            <div className="tab-container">
              <ul className="tab-nav">
                {eventImages.map((event, index) => (
                  <li
                    key={index}
                    className={activeEvent === index ? "active" : ""}
                  >
                    <button onClick={() => setActiveEvent(index)}>
                      {event.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div className="image-grid">
                  {eventImages[activeEvent].images.map((image, idx) => (
                    <div key={idx} className="grid-item">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-fluid"
                        width="200"
                        height="150"
                      />
                      <p>{image.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="tab-container">
              <ul className="tab-nav">
                {celebrationImages.map((celebration, index) => (
                  <li
                    key={index}
                    className={activeCelebration === index ? "active" : ""}
                  >
                    <button onClick={() => setActiveCelebration(index)}>
                      {celebration.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div className="image-grid">
                  {celebrationImages[activeCelebration].images.map((image, idx) => (
                    <div key={idx} className="grid-item">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-fluid"
                        width="200"
                        height="150"
                      />
                      <p>{image.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Inline Styles */}
      <style jsx>{`
        .hero {
          padding: 60px 0;
        }
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
        .gallery-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .tab-container {
          display: flex;
          flex-direction: row;
          gap: 20px;
          height: 100%;
        }
        .tab-nav {
          width: 250px;
          list-style: none;
          padding: 0;
          margin: 0;
          background: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .tab-nav li {
          display: block;
          width: 100%;
        }
        .tab-nav li button {
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
        .tab-nav li:last-child button {
          border-bottom: none;
        }
        .tab-nav li:hover button,
        .tab-nav li.active button {
          background: var(--theme, #f59e0b);
          color: #fff;
        }
        .tab-content {
          flex: 1;
          padding: 20px;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          max-height: 400px;
          overflow-y: auto;
        }
        .grid-item {
          text-align: center;
        }
        .grid-item img {
          width: 200px;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        .grid-item p {
          font-size: 14px;
          color: #333;
          margin: 0;
        }
        @media (max-width: 767px) {
          .tab-container {
            flex-direction: column;
          }
          .tab-nav {
            width: 100%;
          }
          .image-grid {
            max-height: 300px;
          }
          .grid-item img {
            width: 100%;
            height: 150px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Gallery;