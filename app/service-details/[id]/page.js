// import Layout from "@/components/layout/Layout";
// import Brand1 from "@/components/sections/ServiceDetails1";

// // Sample data (replace with API or database in a real app)
// const defaultServices = [
//   {
//     id: "air-freight",
//     title: "Air Freight",
//     image: "assets/img/service/Air_Freight.jpeg",
//     description: "Fast and reliable air freight services for global shipping.",
//     benefits: [
//       "Quick delivery times",
//       "Global reach",
//       "Real-time tracking",
//     ],
//   },
//   {
//     id: "ocean-freight",
//     title: "Ocean Freight",
//     image: "assets/img/service/Ocean.jpg",
//     description: "Cost-effective ocean freight solutions for bulk shipments.",
//     benefits: [
//       "Economical for large shipments",
//       "Environmentally friendly",
//       "Flexible scheduling",
//     ],
//   },
//   {
//     id: "train-freight",
//     title: "Train Freight",
//     image: "assets/img/service/Rail.jpg",
//     description: "Efficient train freight services for regional transport.",
//     benefits: [
//       "Cost-effective for regional routes",
//       "Reliable schedules",
//       "Reduced carbon footprint",
//     ],
//   },
//   {
//     id: "road-transportation",
//     title: "Road Transportation",
//     image: "https://www.jdmgroups.com/wp-content/uploads/2014/11/truck1.jpg",
//     description: "Flexible road transportation for local and regional deliveries.",
//     benefits: [
//       "Door-to-door service",
//       "Flexible routes",
//       "Fast local delivery",
//     ],
//   },
//   {
//     id: "custom-clearance",
//     title: "Custom Clearance",
//     image: "assets/img/service/Customs_Brokrage.jpg",
//     description: "Seamless custom clearance services for international shipments.",
//     benefits: [
//       "Expert handling of regulations",
//       "Fast processing",
//       "Minimized delays",
//     ],
//   },
//   {
//     id: "courier-services",
//     title: "Courier Services",
//     image: "assets/img/service/Courier.jpg",
//     description: "Express courier services for urgent deliveries.",
//     benefits: [
//       "Same-day delivery options",
//       "Secure handling",
//       "Real-time tracking",
//     ],
//   },
//   {
//     id: "project-cargo",
//     title: "Project Cargo",
//     image: "assets/img/service/Project_Cargo.jpg",
//     description: "Specialized handling for oversized and complex cargo.",
//     benefits: [
//       "Customized solutions",
//       "Expert logistics planning",
//       "Safe transport",
//     ],
//   },
//   {
//     id: "warehousing",
//     title: "Warehousing",
//     image: "assets/img/service/Warehouse.jpg",
//     description: "Secure and scalable warehousing solutions.",
//     benefits: [
//       "Inventory management",
//       "Scalable storage",
//       "Secure facilities",
//     ],
//   },
// ];

// export default function ServiceDetails({ params }) {
//   // Find the service based on the id from the URL
//   const service = defaultServices.find((s) => s.id === params.id);

//   // If service is not found, you can return a 404 page or a fallback
//   if (!service) {
//     return (
//       <Layout
//         headerStyle={1}
//         footerStyle={1}
//         breadcrumbTitle="Service Not Found"
//       >
//         <div className="container">
//           <h2>Service Not Found</h2>
//           <p>The service you are looking for does not exist.</p>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout
//       headerStyle={1}
//       footerStyle={1}
//       breadcrumbTitle="Services details"
//     >
//       <Brand1 service={service} />
//     </Layout>
//   );
// }
import Layout from '@/components/layout/Layout'
import React from 'react'

const page = () => {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Services details"
    >
      Page
    </Layout>
  )
}

export default page