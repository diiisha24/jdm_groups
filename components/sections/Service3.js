"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const defaultServices = [
  {
    title: "Air Freight",
    image: "assets/img/service/Air_Freight.jpeg",
    link: "/service-details/air-freight",
  },
  {
    title: "Ocean Freight",
    image: "assets/img/service/Ocean.jpg",
    link: "/service-details/ocean-freight",
  },
  {
    title: "Train Freight",
    image: "/assets/img/service/Rail.jpg",
    link: "/service-details/train-freight",
  },
  {
    title: "Road Transportation",
    image: "/assets/img/service/truck.jpg",
    link: "/service-details/road-transportation",
  },
  {
    title: "Custom Brokerage",
    image: "assets/img/service/Customs_Brokrage.jpg",
    link: "/service-details/custom-clearance",
  },
  // {
  //   title: "Courier Services",
  //   image: "assets/img/service/Courier.jpg",
  //   link: "/courier-services",
  // },
  // {
  //   title: "Project Cargo",
  //   image: "assets/img/service/Project_Cargo.jpg",
  //   link: "/services/project-cargo",
  // },
  {
    title: "Warehousing",
    image: "assets/img/service/Warehouse.jpg",
    link: "/service-details/warehousing",
  },
];

export default function GlobalServices() {
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchServicesData = async () => {
      try {
        const response = await fetch(`${apiUrl}/our_services/api/service/`);
        const data = await response.json();
        if (data && Array.isArray(data) && data.length > 0) {
          const fetchedServices = data.map((service) => ({
            title: service.title || "Unnamed Service",
            image: service.image || "assets/img/service/default.jpg",
            link: service.link || "#",
          }));
          setServices(fetchedServices);
        }
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServicesData();
  }, []);

  const totalSlides = services.length;
  const columnsPerRow = totalSlides <= 8 ? totalSlides / 2 : 5;

  return (
    <section
      className="global-services-section service-section fix section-padding"
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Our Services
          </h2>
        </div>
      </div>

      <div>
        <div
          className="services-grid"
          style={{ display: "grid", gridTemplateColumns: `repeat(${columnsPerRow}, 1fr)`, gap: 0 }}
        >
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="service-item cursor-pointer">
                <div
                  className="service-image"
                  role="img"
                  aria-label={service.title}
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>{service.title}</p>
                    <span>more →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .global-services-section {
          padding: 50px 0 0px;
        }

        .section-title {
          text-align: center;
          font-size: 36px;
          color: #4a2c2a;
          text-transform: uppercase;
        }

        .service-item {
          position: relative;
          overflow: hidden;
          height: 200px;
        }

        .service-image {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--theme, rgba(255, 0, 0, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(100%);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .overlay-content {
          text-align: center;
        }

        .overlay-content p {
          margin: 0;
          color: white;
          text-transform: uppercase;
          font-size: 28px;
          font-weight: 600;
        }

        .overlay-content span {
          display: block;
          color: white;
          font-size: 24px;
          margin-top: 5px;
        }

        .overlay-content p:hover,
        .overlay-content span:hover {
          color: var(--theme2);
        }

        .service-item:hover .overlay {
          opacity: 85%;
          transform: translateY(0);
        }

        .service-item:hover .service-image {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
