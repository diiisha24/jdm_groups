"use client"
import Link from "next/link"

const services = [
  {
    title: "Air Freight",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/flight2.jpg",
    link: "/services/logistics/air-freight",
  },
  {
    title: "Sea Freight",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/ship2.jpg",
    link: "/services/logistics/sea-freight",
  },
  {
    title: "Road Transportation",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/truck1.jpg",
    link: "/services/logistics/road-transport",
  },
  {
    title: "Warehousing",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/where.jpg",
    link: "/warehousing",
  },
  {
    title: "Project Management",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/project.jpg",
    link: "/services/project-management",
  },
  {
    title: "Custom Clearance",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/custom1.jpg",
    link: "/custom-brokerage",
  },
  {
    title: "Packaging",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/packing.jpg",
    link: "/packers-movers",
  },
  {
    title: "Exhibitions",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/exhibition.jpg",
    link: "/exhibition",
  },
  {
    title: "Courier Services",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/courier.jpg",
    link: "/courier-services",
  },
  {
    title: "Perishable Cargo",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/peri.jpg",
    link: "/perishable-cargo",
  },
  // ... rest of your services array remains the same
]

export default function GlobalServices() {
    return (
      <section className="global-services-section service-section fix section-padding" id="services">
        <div className="bg-shape">
            <img src="assets/img/service/bg-shape.png" alt="img" />
        </div>
        <div className="container">
            <div className="section-title text-center">
                <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long" />
                    quality Services
                    <i className="fa-regular fa-arrow-right-long" />
                </h6>
                <h2 className="text-black wow fadeInUp" data-wow-delay=".2s">
                    Our Services
                </h2>
            </div>
        </div>
        <div className="">
          {/* <h2 className="section-title">Our Global Services</h2> */}
          <div className="services-grid cursor-pointer">
            {services.map((service, index) => (
              <div key={index} className="service-item cursor-pointer">
                <div
                  className="service-image cursor-pointer"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                />
                <Link href={service.link}>
                  <div className="overlay cursor-pointer">
                    <div className="overlay-content cursor-pointer">
                      <p>{service.title}</p>
                      <span>more →</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
  
        <style jsx>{`
          .global-services-section {
            padding: 50px 0 0;
          }
  
          .section-title {
            text-align: center;
            font-size: 36px;
            color: #4a2c2a;
            margin-bottom: 40px;
            text-transform: uppercase;
          }
  
          .services-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 0;
          }
  
          .service-item {
            position: relative;
            overflow: hidden;
            height: 200px;
          }
  
          .service-image {
            width: 100%;
            height: 100%;
            transition: transform 0.3s ease; /* Added transition for image */
            transform: scale(1.1); /* Slightly scaled up to ensure no gaps */
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
  
          .service-item:hover .overlay {
            opacity: 85%;
            transform: translateY(0);
          }
  
          .service-item:hover .service-image {
            transform: scale(1.1) rotate(5deg); /* Tilt and maintain scale on hover */
          }
        `}</style>
      </section>
    )
  }