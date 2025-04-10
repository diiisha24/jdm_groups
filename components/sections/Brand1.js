"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: { slidesPerView: 6 },
    991: { slidesPerView: 4 },
    767: { slidesPerView: 3 },
    575: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
};

const defaultImages = [
  "/assets/img/brand/Associations/1.png",
  "/assets/img/brand/Associations/2.png",
  "/assets/img/brand/Associations/3.png",
  "/assets/img/brand/Associations/4.png",
  "/assets/img/brand/Associations/5.png",
  "/assets/img/brand/Associations/6.png",
  "/assets/img/brand/Associations/7.png",
  "/assets/img/brand/Associations/8.png",
  "/assets/img/brand/Associations/9.png",
  "/assets/img/brand/Associations/10.png",
  "/assets/img/brand/Associations/11.png",
  "/assets/img/brand/Associations/12.png",
  "/assets/img/brand/Associations/13.png",
  "/assets/img/brand/Associations/14.png",
  "/assets/img/brand/Associations/15.png",
  "/assets/img/brand/Associations/16.png",
  "/assets/img/brand/Associations/17.png",
];

export default function Brand1({ alt, heading, images = defaultImages, know_more, to }) {
  return (
    <>
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
                    <img src={image} alt={`brand-${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {know_more && (
            <div className="know-more-button p-4 flex justify-content-center">
              <Link href={`about#${to}`} className="theme-btn wow fadeInUp" data-wow-delay=".2s">
                {know_more} <i className="fa-regular fa-arrow-right" />
              </Link>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .brand-section {
          padding-bottom: 50px;
        }
        .brand-image {
          padding: 15px;
        }
      `}</style>
    </>
  );
}