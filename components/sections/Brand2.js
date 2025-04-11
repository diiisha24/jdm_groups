"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Uncommented to ensure Swiper styles are applied
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper configuration
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};

// Default subsections data
const defaultSubsections = [
	{
		subheading: "International",
		logos: [
			{ src: "assets/img/brand/Associations/1.png",, alt: "International Brand 5" },
		],
	},
  {
    subheading: "Domestic",
    logos: [
		
      { src: "assets/img/brand/Associations/Domestic/1.png", alt: "Domestic Brand 1" },
      { src: "assets/img/brand/Associations/Domestic/2.png", alt: "Domestic Brand 2" },
      { src: "assets/img/brand/Associations/Domestic/3.png", alt: "Domestic Brand 3" },
      { src: "assets/img/brand/Associations/Domestic/4.png", alt: "Domestic Brand 4" },
      { src: "assets/img/brand/Associations/Domestic/5.png", alt: "Domestic Brand 5" },
      { src: "assets/img/brand/Associations/Domestic/6.png", alt: "Domestic Brand 5" },
      { src: "assets/img/brand/Associations/Domestic/7.png", alt: "Domestic Brand 5" },
    ],
  },
];

export default function Brand2({
  heading = "Affiliations & Accreditations",
  subsections = defaultSubsections,
}) {
  return (
    <div className="brand-section fix">
      <div>
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            {heading}
          </h2>
        </div>
        {subsections.map((subsection, index) => (
          <div key={index} className="subsection">
            <h3 className="subsection-title wow fadeInUp" data-wow-delay=".3s">
              {subsection.subheading}
            </h3>
            <div className="swiper brand-slider">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {subsection.logos.map((logo, logoIndex) => (
                  <SwiperSlide key={logoIndex} className="swiper-slide">
                    <div className="brand-image center">
                      <img src={logo.src} alt={logo.alt} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation and Pagination */}
              {/* <div className="swiper-navigation">
                <div className="h1p"></div>
                <div className="h1n"></div>
              </div>
              <div className="swiper-pagination"></div> */}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
	  		.brand-section{
				margin: 20px 0;
			}
			.subsection{
				margin-bottom: 10px;
			}
        .subsection-title {
          font-size: 1.5rem;
          text-align: center;
          color: var(--theme);
        }
        .brand-image {
          padding: 15px;
        }
        .swiper-navigation {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
        }
        .h1p,
        .h1n {
          width: 40px;
          height: 40px;
          cursor: pointer;
          background-size: contain;
        }
      `}</style>
    </div>
  );
}