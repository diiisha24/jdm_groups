import Layout from "@/components/layout/Layout";
import ServiceDetail from "@/components/sections/ServiceDetails1";
import Link from "next/link";

// Sample data
const defaultServices = [
  {
    id: "air-freight",
    title: "Air Freight",
    image: "/assets/img/service/Air_Freight.jpeg", // Updated path
    description: "Fast and reliable air freight services for global shipping.",
    benefits: [
      "Quick delivery times",
      "Global reach",
      "Real-time tracking",
    ],
  },
  {
    id: "ocean-freight",
    title: "Ocean Freight",
    image: "/assets/img/service/Ocean.jpg", // Updated path
    description: "Cost-effective ocean freight solutions for bulk shipments.",
    benefits: [
      "Economical for large shipments",
      "Environmentally friendly",
      "Flexible scheduling",
    ],
  },
  {
    id: "train-freight",
    title: "Train Freight",
    image: "/assets/img/service/Rail.jpg", // Updated path
    description: "Efficient train freight services for regional transport.",
    benefits: [
      "Cost-effective for regional routes",
      "Reliable schedules",
      "Reduced carbon footprint",
    ],
  },
  {
    id: "road-transportation",
    title: "Road Transportation",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/truck1.jpg",
    description: "Flexible road transportation for local and regional deliveries.",
    benefits: [
      "Door-to-door service",
      "Flexible routes",
      "Fast local delivery",
    ],
  },
  {
    id: "custom-clearance",
    title: "Custom Clearance",
    image: "/assets/img/service/Customs_Brokrage.jpg", // Updated path
    description: "Seamless custom clearance services for international shipments.",
    benefits: [
      "Expert handling of regulations",
      "Fast processing",
      "Minimized delays",
    ],
  },
  {
    id: "courier-services",
    title: "Courier Services",
    image: "/assets/img/service/Courier.jpg", // Updated path
    description: "Express courier services for urgent deliveries.",
    benefits: [
      "Same-day delivery options",
      "Secure handling",
      "Real-time tracking",
    ],
  },
  {
    id: "project-cargo",
    title: "Project Cargo",
    image: "/assets/img/service/Project_Cargo.jpg", // Updated path
    description: "Specialized handling for oversized and complex cargo.",
    benefits: [
      "Customized solutions",
      "Expert logistics planning",
      "Safe transport",
    ],
  },
  {
    id: "warehousing",
    title: "Warehousing",
    image: "/assets/img/service/Warehouse.jpg", // Updated path
    description: "Secure and scalable warehousing solutions.",
    benefits: [
      "Inventory management",
      "Scalable storage",
      "Secure facilities",
    ],
  },
];

// Generate static paths for all services
export async function generateStaticParams() {
  return defaultServices.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetails({ params }) {
  console.log("Params ID:", params.id);

  // Handle "all-services" case
  if (params.id.toLowerCase() === "all-services") {
    return (
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="All Services"
      >
        <div className="container">
          <h2>All Services</h2>
          <ul>
            {defaultServices.map((service) => (
              <li key={service.id}>
                <Link href={`/service-details/${service.id}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }

  const service = defaultServices.find(
    (s) => s.id.toLowerCase() === params.id.toLowerCase()
  );

  if (!service) {
    console.log("Service not found for ID:", params.id);
    return (
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Service Not Found"
      >
        <div className="container">
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Services details"
    >
      <ServiceDetail service={service} />
    </Layout>
  );
}