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
  if (!service || !service.image || !service.title || !service.description1) {
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
              <div className="row g-4">
                <div className="service-details-image col-lg-6">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-details-content col-lg-6">
                  {/* <h2>{service.title}</h2> */}
                  <p>{service.description1}</p>
                  {(service.heading) &&
                    <h5 className="pt-3">{service.heading}</h5>
                  }
                  <p className="mt-4 mb-4">
                    {service.description2}
                  </p>
                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="details-list">
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>
                          <i className="fa-solid fa-circle-check" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* <div className="row g-4">
                    {/* <div className="col-lg-7">
                      <div className="service-details-image">
                        <img src="/assets/img/service/details-2.jpg" alt="img" />
                      </div>
                    </div> */}
                    {/* <div className="col-lg-7">
                      <div className="content">
                        {<h3>Services Benefits:</h3> */}
                        {/* <p className="mt-2 mb-2">{service.benefits[0]}</p>
                        <p>{service.benefits[1]}</p> */}
                      {/* </div>
                      
                    </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}