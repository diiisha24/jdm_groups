// "use client"
// import Link from "next/link"
// import { Autoplay, Navigation, Pagination } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"

// const swiperOptions = {
//   modules: [Autoplay, Pagination, Navigation],
//   slidesPerView: 1,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   navigation: {
//     nextEl: ".h1n",
//     prevEl: ".h1p",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // Updated breakpoints for better responsiveness
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: 1,
//       spaceBetween: 40,
//     },
//   },
// }

// export default function Hero2() {
//   return (
//     <section className="hero-section fix hero-2">
//       <div className="array-button">
//         {/* Swapped arrow directions to match conventional navigation */}
//         <button className="array-prev h1p">
//           <i className="fal fa-arrow-left" />
//         </button>
//         <button className="array-next h1n">
//           <i className="fal fa-arrow-right" />
//         </button>
//       </div>
//       <Swiper {...swiperOptions} className="swiper hero-slider-2">
//         <div className="swiper-wrapper">
//           <SwiperSlide className="swiper-slide">
//             <div
//               className="slider-image bg-cover"
//               style={{ 
//                 backgroundImage: 'url("/assets/img/hero/Courier.jpg")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             />
//             <div className="container">
//               <div className="row g-4 align-items-center justify-content-center">
//                 <div className="col-lg-12">
//                   <div className="hero-content text-center">
//                     <h1 data-animation="fadeInUp" data-delay="1.5s">
//                       Courier Solutions <br /> for Your Business
//                     </h1>
//                     <p data-animation="fadeInUp" data-delay="1.7s" className="hero-para">
//                       JDM offers tailored door-to-door express delivery for time-sensitive 
//                       documents and parcels worldwide. With a strong global network and 
//                       flexible transit options, we prioritize customer needs and shipment security.
//                     </p>
//                     <div className="hero-button">
//                       <Link
//                         href="/about"
//                         data-animation="fadeInUp"
//                         data-delay="1.9s"
//                         className="theme-btn hover-white"
//                       >
//                         Explore More
//                         <i className="fa-solid fa-arrow-right-long" />
//                       </Link>
//                       <Link
//                         href="/contact"
//                         data-animation="fadeInUp"
//                         data-delay="1.9s"
//                         className="theme-btn bg-white"
//                       >
//                         Contact Us
//                         <i className="fa-solid fa-arrow-right-long" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide className="swiper-slide">
//             <div
//               className="slider-image bg-cover"
//               style={{ 
//                 backgroundImage: 'url("/assets/img/hero/Warehouse.jpg")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             />
//             <div className="container">
//               <div className="row g-4 align-items-center justify-content-center">
//                 <div className="col-lg-12">
//                   <div className="hero-content text-center">
//                     <h1 data-animation="fadeInUp" data-delay="1.5s">
//                       Warehouse Solutions <br /> for Your Business
//                     </h1>
//                     <p data-animation="fadeInUp" data-delay="1.7s" className="hero-para">
//                       Established with a strong warehousing infrastructure, JDM Group has 
//                       expanded into 3PL solutions, offering secure storage, distribution, 
//                       and inventory management while ensuring efficiency and cost-effectiveness.
//                     </p>
//                     <div className="hero-button">
//                       <Link
//                         href="/about"
//                         data-animation="fadeInUp"
//                         data-delay="1.9s"
//                         className="theme-btn hover-white"
//                       >
//                         Explore More
//                         <i className="fa-solid fa-arrow-right-long" />
//                       </Link>
//                       <Link
//                         href="/contact"
//                         data-animation="fadeInUp"
//                         data-delay="1.9s"
//                         className="theme-btn bg-white"
//                       >
//                         Contact Us
//                         <i className="fa-solid fa-arrow-right-long" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide className="swiper-slide">
//             <div
//               className="slider-image bg-cover"
//               style={{ 
//                 backgroundImage: 'url("/assets/img/hero/04.jpeg")',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             />
//             <div className="container">
//               <div className="row g-4 align-items-center justify-content-center">
//                 <div className="col-lg-12">
//                   <div className="hero-content text-center">
//                     <h1 data-animation="fadeInUp" data-delay="1.5s">
//                       Transportation Solutions <br /> for Your Business
//                     </h1>
//                     <p data-animation="fadeInUp" data-delay="1.7s" className="hero-para">
//                       JDM Group began its journey in transportation logistics. His commitment 
//                       to reliability and value-driven services laid a strong foundation, 
//                       shaping the company’s core principles that continue to drive us today.
//                     </p>
//                     <div className="hero-button">
//                       <Link
//                         href="/about"
//                         data-animation="fadeInUp"
//                         data-delay="1.9s"
//                         className="theme-btn hover-white"
//                       >
//                         Explore More
//                         <i className="fa-solid fa-arrow-right-long" />
//                       </Link>
//                       <Link
//                         href="/contact"
//                         data-animation="fadeInUp"
//                         data-delay="1.9s"
//                         className="theme-btn bg-white"
//                       >
//                         Contact Us
//                         <i className="fa-solid fa-arrow-right-long" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </div>
//       </Swiper>
//     </section>
//   )
// }

// import TaglineBanner from "../layout/TaglineBanner";
// "use client"
// import TaglineBanner from "../layout/tagline_banner";

// export default function Hero2() {
//   return (
//     <section className="hero-section fix hero-2">
//       <div className="video-container fixed">
//         <video 
//           className="hero-video"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/assets/img/hero/intro.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <TaglineBanner />
//     </section>
//   );
// }

"use client"
import { useState, useEffect, useRef } from 'react';
import TaglineBanner from "../layout/tagline_banner";

export default function Hero2() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Video is visible when section is at least 10% in viewport
        setIsVisible(entry.isIntersecting);
        
        // Play/pause video based on visibility
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Adjust as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-section fix hero-2">
      <div className="video-container fixed">
        <video 
          ref={videoRef}
          className="hero-video"
          autoPlay={isVisible}
          loop
          muted
          playsInline
          style={{ display: isVisible ? 'block' : 'none' }}
        >
          <source src="/assets/img/hero/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <TaglineBanner />
    </section>
  );
}