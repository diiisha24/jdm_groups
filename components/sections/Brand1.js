"use client";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const defaultImages = [
  "/assets/img/brand/Associations/1.png",
  "/assets/img/brand/Associations/2.png",
  "/assets/img/brand/Associations/3.png",
  "/assets/img/brand/Associations/4.png",
  "/assets/img/brand/Associations/5.png",
];

export default function Brand1({
  alt,
  heading,
  images = defaultImages,
  know_more,
  to,
}) {
  // Fallback for empty images
  if (!images?.length) {
    return <div className="text-center p-4">No partner logos available</div>;
  }
  console.log("image length", images.length);
  console.log("images", images);

  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 500,
    loop: images.length > 1,
    autoplay: {
      delay: 500,
    },
    breakpoints: {
      1350: { slidesPerView: Math.min(6, images.length-1) },
      991: { slidesPerView: Math.min(4, images.length-1) },
      767: { slidesPerView: Math.min(3, images.length-1) },
      575: { slidesPerView: Math.min(2, images.length-1) },
      0: { slidesPerView: 1 },
    },
  };

  return (
    <div className={`brand-section fix ${alt ? "pt-0 section-bg-2" : ""}`}>
      <div className="p-4">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            {heading}
          </h2>
        </div>
        <div className="swiper brand-slider">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            {images.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="brand-image center">
                  <Image
                    src={typeof image === "string" ? image : image.src}
                    alt={
                      typeof image === "string"
                        ? `Partner logo ${index + 1}`
                        : image.alt || `Partner logo ${index + 1}`
                    }
                    width={150}
                    height={100}
                    style={{ objectFit: "contain", width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Uncomment for manual controls */}
          {/* <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
        </div>
        {know_more && to && (
          <div className="know-more-button p-4 flex justify-content-center">
            <Link
              href={`about#${to}`}
              className="theme-btn wow fadeInUp"
              data-wow-delay=".2s"
            >
              {know_more} <i className="fa-regular fa-arrow-right" />
            </Link>
          </div>
        )}
      </div>
      <style jsx>{`
        .brand-image {
          padding: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
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
}