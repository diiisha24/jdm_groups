"use client"
import Link from "next/link"

// const services = [
//   {
//     title: "Air Freight",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/flight2.jpg",
//     link: "/services/logistics/air-freight",
//   },
//   {
//     title: "Sea Freight",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/ship2.jpg",
//     link: "/services/logistics/sea-freight",
//   },
//   {
//     title: "Road Transportation",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/truck1.jpg",
//     link: "/services/logistics/road-transport",
//   },
//   {
//     title: "Warehousing",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/where.jpg",
//     link: "/warehousing",
//   },
//   {
//     title: "Project Management",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/project.jpg",
//     link: "/services/project-management",
//   },
//   {
//     title: "Custom Clearance",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/custom1.jpg",
//     link: "/custom-brokerage",
//   },
//   {
//     title: "Packaging",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/packing.jpg",
//     link: "/packers-movers",
//   },
//   {
//     title: "Exhibitions",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/exhibition.jpg",
//     link: "/exhibition",
//   },
//   {
//     title: "Courier Services",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/courier.jpg",
//     link: "/courier-services",
//   },
//   {
//     title: "Perishable Cargo",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/peri.jpg",
//     link: "/perishable-cargo",
//   },
//   // ... rest of your services array remains the same
// ]
const services = [
  {
    title: "Air Freight",
    image: "assets/img/service/Air_Freight.jpeg",
    link: "/services/logistics/air-freight",
  },
  {
    title: "Ocean Freight",
    image: "assets/img/service/Ocean.jpg",
    link: "/services/logistics/sea-freight",
  },
  {
    title: "Train Freight",
    image: "assets/img/service/Rail.jpg", // Placeholder image, update if needed
    link: "/services/logistics/train-freight",
  },
  {
    title: "Road Transportation",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/truck1.jpg",
    link: "/services/logistics/road-transport",
  },
  {
    title: "Custom Clearance",
    image: "assets/img/service/Customs_Brokrage.jpg",
    link: "/custom-brokerage",
  },
  {
    title: "Courier Services",
    image: "assets/img/service/Courier.jpg",
    link: "/courier-services",
  },
  {
    title: "Project Cargo",
    image: "assets/img/service/Project_Cargo.jpg",
    link: "/services/project-cargo",
  },
  {
    title: "Warehousing",
    image: "assets/img/service/Warehouse.jpg",
    link: "/warehousing",
  },
];

export default function GlobalServices() {
    const totalSlides = services.length;
    let columnsPerRow;
    
    if (totalSlides <= 8) {
      columnsPerRow = totalSlides/2; // Up to 8 slides, show 4 per row
    } else {
      columnsPerRow = 5; // 11 or more slides, show 5 per row
    }
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
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
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
            padding: 50px 0 120px;
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
            grid-template-columns: repeat(${columnsPerRow}, 1fr);
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