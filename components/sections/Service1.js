"use client";
// import "swiper/css";
import Link from "next/link";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".array-next",
    prevEl: ".array-prev",
  },
  breakpoints: {
    1399: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// Define all services based on defaultServices
const services = [
  {
    id: "air-freight",
    title: "Air Freight",
    image: "/assets/img/service/Air_Freight.jpeg",
    description: "Fast and reliable air freight services for global shipping.",
    icon: "fa-regular fa-plane",
  },
  {
    id: "ocean-freight",
    title: "Ocean Freight",
    image: "/assets/img/service/Ocean.jpg",
    description: "Cost-effective ocean freight solutions for bulk shipments.",
    icon: "fa-regular fa-ship",
  },
  {
    id: "train-freight",
    title: "Train Freight",
    image: "/assets/img/service/Rail.jpg",
    description: "Efficient train freight services for regional transport.",
    icon: "fa-regular fa-train",
  },
  {
    id: "road-transportation",
    title: "Road Transportation",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/truck1.jpg",
    description: "Flexible road transportation for local and regional deliveries.",
    icon: "fa-regular fa-truck-fast",
  },
  {
    id: "custom-clearance",
    title: "Custom Clearance",
    image: "/assets/img/service/Customs_Brokrage.jpg",
    description: "Seamless custom clearance services for international shipments.",
    icon: "fa-regular fa-file-signature",
  },
  {
    id: "courier-services",
    title: "Courier Services",
    image: "/assets/img/service/Courier.jpg",
    description: "Express courier services for urgent deliveries.",
    icon: "fa-regular fa-truck-front",
  },
  {
    id: "project-cargo",
    title: "Project Cargo",
    image: "/assets/img/service/Project_Cargo.jpg",
    description: "Specialized handling for oversized and complex cargo.",
    icon: "fa-regular fa-box-open",
  },
  {
    id: "warehousing",
    title: "Warehousing",
    image: "/assets/img/service/Warehouse.jpg",
    description: "Secure and scalable warehousing solutions.",
    icon: "fa-regular fa-warehouse",
  },
];

export default function Service1() {
  return (
    <>
      <section
        className="service-section fix bg-cover"
        // style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
      >
        {/* <div className="container">
        </div> */}
        <div className="container-fluid">
          <div className="swiper service-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {services.map((service, index) => (
                <SwiperSlide key={service.id} className="swiper-slide">
                  <div className="service-box-items">
                    <div className="service-thumb">
                      <img src={service.image} alt={service.title} />
                      <div className="icon">
                        <i className={service.icon} />
                      </div>
                    </div>
                    <div className="service-content">
                      <h2 className="number">{String(index + 1).padStart(2, "0")}</h2>
                      <h3>
                        <Link href={`/service-details/${service.id}`}>
                          {service.title}
                        </Link>
                      </h3>
                      <p>{service.description}</p>
                      <Link href={`/service-details/${service.id}`} className="link-btn">
                        Explore More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="array-button d-flex justify-content-center mt-4">
              <button className="array-prev h1p me-3">
                <i className="fa-regular fa-arrow-left-long" />
              </button>
              <button className="array-next h1n">
                <i className="fa-regular fa-arrow-right-long" />
              </button>
            </div>
            {/* Pagination Dots */}
            <div className="dot swiper-pagination"></div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        .link-btn {
          display: inline-flex;
          align-items: center;
          color: var(--theme, #f59e0b);
          text-decoration: none;
          font-weight: 500;
          margin-top: 10px;
        }
        .link-btn:hover {
          color: #e08e00;
        }
        .link-btn i {
          margin-left: 5px;
        }
      `}</style>
    </>
  );
}