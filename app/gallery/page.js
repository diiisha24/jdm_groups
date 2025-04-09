"use client";
import React, { useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout/Layout";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images (from your code)
  const galleryImages = [
    {
      src: "https://media.licdn.com/dms/image/v2/D4E22AQHOqoTdxNY17w/feedshare-shrink_1280/B4EZV.wPOWGYAk-/0/1741588330193?e=1747267200&v=beta&t=ukHbzgV4-GwIkMrSVkjPK7ud1HW-O_J3VVtzA8pnc9I",
      alt: "WCA World Experience",
      caption: "WCA World Experience",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQFXgBB2h9ZMbA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732275751421?e=1747267200&v=beta&t=9Wq5RZTOc6KBihtQekikGUz8DJEIhb_CSce3pS_9jng",
      alt: "Office In Pune",
      caption: "New Office In Pune",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQFC4XkRgwesWQ/feedshare-shrink_800/B56ZQCTIZAHQAg-/0/1735205358038?e=1747267200&v=beta&t=9wZ-n41BjSOmdpsaoWR59qn0KskXtikcUnRRJVvQHBo",
      alt: "Celebrating Christmas",
      caption: "Celebrating Christma",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQGlZSm6-z7aWA/feedshare-shrink_800/feedshare-shrink_800/0/1731326296205?e=1747267200&v=beta&t=2bnQewQ4PrwDbYFnQ4u-M09kQPT0bouYHa0Hn0IZBFs",
      alt: "Diwali Celeb",
      caption: "Diwali Celebration 2024",
    },
    {
      src: "assets/img/service/Courier.jpg",
      alt: "Loading Cargo",
      caption: "Precision in every load",
    },
    {
      src: "assets/img/service/Warehouse.jpg",
      alt: "Office Space",
      caption: "Modern workspace for efficiency",
    },
  ];

  const totalImages = galleryImages.length;
  const columnsPerRow = totalImages <= 8 ? totalImages / 2 : 5; // Match GlobalServices logic

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") closeModal();
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery">
      <Head>
        <title>Gallery | JDM Logistics</title>
        <meta
          name="description"
          content="Explore our gallery showcasing JDM Logistics' operations, fleet, and team."
        />
      </Head>

      {/* Hero Section */}
        <section className="hero" id="gallery">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">
              <i className="fa-regular fa-arrow-left-long" />
              Our Journey in Pictures
              <i className="fa-regular fa-arrow-right-long" />
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Explore JDM Logistics
            </h2>
          </div>
          <div className="gallery-section">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item wow fadeInUp"
                data-wow-delay={`.${2 + index * 2}s`}
                onClick={() => openModal(image)}
              >
                <div
                  className="gallery-image"
                  style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>{image.caption}</p>
                    <span>view →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content wow fadeInUp">
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}

      {/* Inline Styles */}
      <style jsx>{`
        .hero {
          padding: 60px 0;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(${columnsPerRow}, 1fr);
          gap: 20px; /* Match GlobalServices tight grid */
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          height: 200px; /* Match GlobalServices height */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
        .gallery-image {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
          transform: scale(1.1); /* Match GlobalServices default scale */
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--theme); /* Trastek orange instead of red */
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(100%); /* Slide up from bottom */
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .overlay-content {
          text-align: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .overlay-content p {
          margin: 0;
          color: white;
          text-transform: uppercase;
          font-size: 28px; /* Match GlobalServices */
          font-weight: 600;
          max-width: 80%;
        }
        .overlay-content span {
          display: block;
          color: white;
          font-size: 24px; /* Match GlobalServices */
          margin-top: 5px;
        }
        .gallery-item:hover .overlay {
          opacity: 0.85; /* Match GlobalServices */
          transform: translateY(0);
        }
        .gallery-item:hover .gallery-image {
          transform: scale(1.1); /* Already scaled, no change on hover */
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          max-width: 800px;
          width: 90%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .modal-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .modal-content p {
          margin-top: 15px;
          font-size: 16px;
          color: #333;
        }
        .close-btn {
          position: sticky;
          top: 10px;
          right: 10px;
          float: right;
          padding: 5px 10px;
          font-size: 24px;
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
        }
        .close-btn:hover {
          color: #333;
        }
      `}</style>
    </Layout>
  );
};

export default Gallery;