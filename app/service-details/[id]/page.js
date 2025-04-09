import Layout from "@/components/layout/Layout";
import ServiceDetail from "@/components/sections/ServiceDetails1";
import Link from "next/link";

// Sample data
const defaultServices = [
  {
    id: "air-freight",
    title: "Air Freight",
    image: "/assets/img/service/Air_Freight.jpeg",
    description1:
      "We offer a comprehensive range of airfreight services worldwide. Each movement of Air Cargo is diligently planned by our experts in close coordination with our worldwide agents to utilize the most economic air carriers that provide safe and speedy delivery. Strong relationships with all leading airlines enable us to secure space with reasonable price in all significant sectors.",
    description2:
      "Exporters/Importers of specialized, high-value cargo, perishable cargo, and Hazardous/Dangerous goods cargo can rely on us for providing them value addition with our state-of-the-art services. We offer \"consolidations, Back to Back, Door to Door, and Airport to Airport\" services as per the requirements of our valued customers.",
    benefits: ["Quick delivery times", "Global reach", "Real-time tracking"],
  },
  {
    id: "ocean-freight",
    title: "Ocean Freight",
    image: "/assets/img/service/Ocean.jpg",
    description1:
      "We are known for cost-effectiveness, reliability, timely and safe delivery, across the world. We offer movement through Full Container Load (FCL) or Less than Container Load (LCL), Reefer, Full or Partial Vessel Charter that includes on-board crane to handle heavy shipment to gateway ports. Owing to the presence of a qualified and experienced team, we adeptly handle bulk and liquid commodities without any hassles.",
    benefits: ["Economical for large shipments", "Environmentally friendly", "Flexible scheduling"],
  },
  {
    id: "train-freight",
    title: "Train Freight",
    image: "/assets/img/service/Rail.jpg",
    description1: "Train freight offers a highly efficient and reliable solution for regional transport, especially when moving large volumes of goods over medium to long distances. With the ability to carry substantial loads in a single trip, rail transport reduces the number of journeys required, lowering overall logistics costs and environmental impact. It is less affected by traffic congestion and weather conditions compared to road freight, ensuring more consistent delivery schedules. Ideal for industries like manufacturing, agriculture, and mining, train freight supports smooth, scalable logistics operations while contributing to greener supply chains..",
    benefits: ["Cost-effective for regional routes", "Reliable schedules", "Reduced carbon footprint"],
  },
  {
    id: "road-transportation",
    title: "Road Transportation",
    image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/truck1.jpg",
    description1: "JDM GROUP was conceptualized by Late Mr. Pahlad Singh in the year 1978, with an initial start in Transportation & Logistics. His deep understanding of logistics and dedication to value-added services strengthened the foundations of the organization.Transportation is a crucial part of the modern logistics sector, covering cargo pick-up, port handling, customs clearance, and warehousing. JDM Group has become a leading logistics partner for India's top corporate houses.",
    description2: "We firmly believe in the “Just in Time” concept, ensuring seamless logistics support through well-trained and experienced staff. Our company is also committed to a sustainable future, adopting electric vehicles (EVs) and reducing emissions under the Mission 2050 initiative.",
    benefits: ["Door-to-door service", "Flexible routes", "Fast local delivery"],
  },
  {
    id: "custom-clearance",
    title: "Custom Clearance",
    image: "/assets/img/service/Customs_Brokrage.jpg",
    description1:
    "We have an adept team of Customs Brokerage professionals with years of experience, who are proficient not only with Customs procedures and regulations but also with the allied laws. We assist in effectively and efficiently filing all customs-related compliances across multiple regulatory agencies, including additional facilitations for:\n\n- Advance Authorization (AA)\n- Special Valuation Branch (SVB)\n- Refund of Extra Duty Deposit (EDD)\n- Authorized Economic Operator (AEO)\n- Export Promotion Capital Goods (EPCG)\n- Import of Goods at Concessional Rate of Duty (IGCR)\n- Matters related to Directorate General of Foreign Trade (DGFT)\n- Manufacturing and Other Operations in a Warehouse Rules (MOOWR)",
    heading:"Setting up of SEZ/STPI/FTWZ units",
    description2: "Special Economic Zones (SEZ), Software Technology Parks of India (STPI), Free Trade and Warehousing Zone (FTWZ) are growth engines that can boost manufacturing, augment exports and generate employment. We are sought after for setting up SEZ/STPI/FTWZ units in Economic Zones. Well-versed with the intricacies of the SEZ/STPI/FTWZ rules, we stand tall in providing single-window solutions to all these units by handling government regulatory authorities.",
    benefits: ["Expert handling of regulations", "Fast processing", "Minimized delays"],
  },
  {
    id: "courier-services",
    title: "Courier Services",
    image: "/assets/img/service/Courier.jpg",
    description1: "We offer customized and door-to-door express delivery services and logistics solutions for moving time-sensitive documents and parcels around the world. Our global network enables us to offer international express deliveries within a variety of transit time options. Before proposing a solution, our approach is to understand your underlying business issues and needs. We ensure the safety and security of your valuable shipments worldwide.",
    benefits: ["Same-day delivery options", "Secure handling", "Real-time tracking"],
  },
  {
    id: "project-cargo",
    title: "Project Cargo",
    image: "/assets/img/service/Project_Cargo.jpg",
    description1: "We provide project handling services that are widely appreciated by our clients, backed by well-trained and experienced staff. We have efficiently handled various projects involving Over Dimensional and Over Weight Cargo (ODC/OWC) in specialized equipment (open-top and flat rack containers). We proficiently plan the shipment according to the specifications given by the customers with complete management—starting from vessel booking to vessel loading. We provide reasonable rates for project and break bulk cargo as we have strong working relations with the leading ship owners.",
    benefits: ["Customized solutions", "Expert logistics planning", "Safe transport"],
  },
  {
    id: "warehousing",
    title: "Warehousing",
    image: "/assets/img/service/Warehouse.jpg",
    description1: "We have grown rapidly in 5PL solutions in the form of warehousing, distribution, and trans-load operations. We have the capabilities to serve right from packing, loading/unloading, customs brokerage, inventory control, warehouse management, and transportation. Our services include multi-modal transportation for our esteemed customers and final distribution to retail outlets in a cost-effective manner with safe and intact deliveries.",
    heading:" Warehousing of Goods in Public and Private Bonded Warehouses",
    description2: "As an emerging leader in warehousing services, we also assist our esteemed customers in storing goods in public & private bonded warehouses (governed under customs act/rules) for better supply chain, inventory control, and deferred customs duty payments.",
    benefits: ["Cost-effective & safety of goods", "Our warehouses have zero liability to end clients", "Warehouse distance \– 4 km from New Delhi Airport", "24x7 security with CCTV & security teams", "Hi-tech equipment for handling goods safely"],
  },
];

// Generate static paths for all services
export async function generateStaticParams() {
  return defaultServices.map((service) => ({ id: service.id }));
}

export default function ServiceDetails({ params }) {
  console.log("Params ID:", params.id);

  // Handle "all-services" case
  if (params.id.toLowerCase() === "all-services") {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="All Services" backgroundImage="/assets/img/banner/services.jpg">
        <div className="container">
          <h2>All Services</h2>
          <ul>
            {defaultServices.map((service) => (
              <li key={service.id}>
                <Link href={`/service-details/${service.id}`}>{service.title}</Link>
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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service Not Found"  backgroundImage="/assets/img/banner/services.jpg">
        <div className="container">
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service Details"  backgroundImage="/assets/img/banner/services.jpg">
      <ServiceDetail service={service} />
    </Layout>
  );
}