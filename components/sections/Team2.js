"use client";
import React from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Uncomment if using Swiper CSS
import { teamMembers } from "@/util/teamMembers";

// Custom styles combining Team2 and Service section styles
const customStyles = `
  .card-hover {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    height: 100%;
  }
  .social-icon {
    transition: color 0.3s ease;
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }

  .social-icon:hover {
    color: #0dcaf0 !important; /* Bootstrap's info color */
  }

  .swiper-slide {
    height: auto;
    display: flex;
    align-items: stretch;
  }

  .swiper-slide .card-hover {
    width: 100%;
    height: 100%;
  }

  /* Service section-inspired card styling */
  .team-box-items {
    margin-top: 30px;
    background-color: var(--white);
    text-align: center;
    height: 100%;
  }

  .team-box-items .service-thumb {
    padding: 18px 18px 65px 18px;
    position: relative;
  }

  .team-box-items .service-thumb img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .team-box-items .service-thumb .icon {
    position: absolute;
    bottom: 30px;
    left: 40px;
    width: 68px;
    height: 68px;
    text-align: center;
    background-color: var(--white);
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.06);
    padding: 14px;
    font-size: 30px;
    color: var(--theme);
  }

  .team-box-items .service-content {
    padding: 0 30px 30px 30px;
    position: relative;
  }

  .team-box-items .service-content .number {
    text-align: right;
    -webkit-text-stroke: 1px rgba(102, 102, 102, 0.5);
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;
    font-size: 50px;
    font-weight: 700;
    position: absolute;
    right: 30px;
    top: -50px;
  }

  .team-box-items .service-content .number:hover {
    -webkit-text-stroke: 1px rgba(245, 91, 31, 0.5);
  }

  .team-box-items .service-content h3 {
    margin-bottom: 15px;
    font-size: 20px;
  }

  .team-box-items .service-content h3 a:hover {
    color: var(--theme);
  }

  .team-box-items .service-content p {
    border-bottom: 1px solid var(--border);
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .team-box-items:hover .service-content .number {
    -webkit-text-stroke: 1px rgba(245, 91, 31, 0.5);
  }

  .team-box-items .card-overlay {
    z-index: 10; /* Ensure overlay is above other elements */
  }
`;

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot",
    clickable: true,
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
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// Team data with all fields for dynamic display
// const teamMembers = [
//   {
//     id: 1,
//     name: "Mr. Pahlad Singh",
//     role: "Founder",
//     image: "/assets/img/team/1.png",
//     bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
//     phone: "+91 5698 0036 420",
//     email: "pahlad@example.com",
//     website: "http://example.com/pahlad",
//     experience: "20 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 2,
//     name: "Sahil Sehrawat",
//     role: "Managing Director",
//     image: "/assets/img/team/2.png",
//     bio: "Amet I love liquorice jujubes pudding croissant I love pudding.",
//     phone: "+91 1234 5678 901",
//     email: "sahil@example.com",
//     website: "http://example.com/sahil",
//     experience: "15 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 3,
//     name: "Pal Raj",
//     role: "Regional Head, South",
//     image: "/assets/img/team/3.png",
//     bio: "Apple pie macaroon toffee jujubes pie tart cookie caramels.",
//     phone: "+91 9876 5432 109",
//     email: "palraj@example.com",
//     website: "http://example.com/palraj",
//     experience: "18 Years",
//     availability: "Part Time Consultant",
//   },
//   {
//     id: 4,
//     name: "Rohit Raj",
//     role: "Branch Manager, JDM Worldwide Pvt. Ltd.",
//     image: "/assets/img/team/4.png",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 5555 6666 777",
//     email: "alice1@example.com",
//     website: "http://example.com/alice1",
//     experience: "10 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 5,
//     name: "Abhilash D",
//     role: "Assistant Genreral Manager, Customs Operations",
//     image: "/assets/img/team/5.png",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 8888 9999 000",
//     email: "alice2@example.com",
//     website: "http://example.com/alice2",
//     experience: "12 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 6,
//     name: "Anuj Arora",
//     role: "General Manager",
//     image: "/assets/img/team/6.png",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 2222 3333 444",
//     email: "alice3@example.com",
//     website: "http://example.com/alice3",
//     experience: "14 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 7,
//     name: "Anju Dubey",
//     role: "Corporate Sales Manager",
//     image: "/assets/img/team/09.jpg",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 7777 8888 999",
//     email: "alice4@example.com",
//     website: "http://example.com/alice4",
//     experience: "11 Years",
//     availability: "Contractor",
//   },
//   {
//     id: 8,
//     name: "Jaspreet Singh",
//     role: "Assistant General Manager, Operations",
//     image: "/assets/img/team/09.jpg",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 7777 8888 999",
//     email: "alice4@example.com",
//     website: "http://example.com/alice4",
//     experience: "11 Years",
//     availability: "Contractor",
//   },
// ];

export default function TeamSlider() {
  return (
    <>
      <style>{customStyles}</style>
      <section className="service-section fix section-padding bg-cover">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Our Leadership Team
            </h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="swiper team-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {teamMembers.map((member, index) => (
                <SwiperSlide key={member.id} className="swiper-slide">
                  <Link href={`/team-details/${member.id}`} className="card-hover">
                    <div className="team-box-items">
                      <div className="service-thumb">
                        <img
                          src={member.image}
                          className="card-img-top"
                          alt={member.name}
                        />
                        <div className="icon">
                          <i className="fa-solid fa-user" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h2 className="number">{String(index + 1).padStart(2, "0")}</h2>
                        <h3>
                          <span>{member.name}</span>
                        </h3>
                        <p>{member.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="array-button d-flex justify-content-center mt-4">
              <button className="array-prev h1p me-3">
                <i className="fa-regular fa-arrow-left-long" />
              </button>
              <button className="array-next h1n">
                <i className="fa-regular fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}