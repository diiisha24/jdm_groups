import Link from "next/link";
import React from "react";

export default function ServiceDetails1({ service }) {
  // Sample categories
  const categories = [
    { title: "Air Freight", id: "air-freight" },
    { title: "Ocean Freight", id: "ocean-freight" },
    { title: "Train Freight", id: "train-freight" },
    { title: "Road Transportation", id: "road-transportation" },
    { title: "Custom Clearance", id: "custom-clearance" },
    { title: "Courier Services", id: "courier-services" },
    { title: "Project Cargo", id: "project-cargo" },
    { title: "Warehousing", id: "warehousing" },
  ];

  // If service is undefined, render a fallback
  if (!service || !service.image || !service.title || !service.description || !service.benefits) {
    return (
      <section className="service-details-section section-padding">
        <div className="container">
          <h2>Service Not Available</h2>
          <p>Please select a valid service.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="service-details-section section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-8">
                <div className="service-details-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-details-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <p className="mt-4 mb-4">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum,
                  </p>
                  <div className="row g-4">
                    <div className="col-lg-7">
                      <div className="service-details-image">
                        <img src="/assets/img/service/details-2.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="content">
                        <h3>Services Benefits:</h3>
                        <p className="mt-2 mb-2">{service.benefits[0]}</p>
                        <p>{service.benefits[1]}</p>
                      </div>
                      <ul className="details-list">
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>
                            <i className="fa-solid fa-circle-check" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Download</h3>
                    </div>
                    <div className="brochures-download-items">
                      <div className="brochures-items">
                        <div className="icon">
                          <i className="fal fa-file-pdf" />
                        </div>
                        <div className="content">
                          <h5>Company Details</h5>
                          <p>Download Profile</p>
                        </div>
                      </div>
                      <Link
                        href={`/service-details/${service.id}`}
                        className="download-btn active"
                      >
                        <i className="fa-light fa-download" />
                      </Link>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="news-widget-categories">
                      <ul>
                        {categories.map((category) => (
                          <li
                            key={category.id}
                            className={
                              category.id === service.id ? "active" : ""
                            }
                          >
                            <Link href={`/service-details/${category.id}`}>
                              {category.title}
                            </Link>
                            <span>
                              <i className="fa-regular fa-arrow-right-long" />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="service-sidebar-widget">
                    <div
                      className="contact-bg text-center bg-cover"
                      style={{
                        backgroundImage:
                          'url("/assets/img/contact-bg.jpg")',
                      }}
                    >
                      <p>Do You Need Help? We're Here to Support You</p>
                      <Link href="/contact" className="theme-btn w-100">
                        Contact us now
                        <i className="fa-regular fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}