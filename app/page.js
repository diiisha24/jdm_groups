import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Achivements from "@/components/sections/Achivements"
import Brand1 from "@/components/sections/Brand1"
import CtaBanner2 from "@/components/sections/CtaBanner2"
import GroupofCompanies from "@/components/sections/GroupofCompanies"
import Hero2 from "@/components/sections/Hero2"
import Journey from "@/components/sections/Journey"
import Network from "@/components/sections/network"
import News2 from "@/components/sections/News2"
// import Pricing from "@/components/sections/Pricing"
import Project2 from "@/components/sections/Project2"
// import Service2 from "@/components/sections/Service2"
import Service3 from "@/components/sections/Service3"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"

// Default data as fallback
const customers_image_data = [
  "assets/img/customer_logo/CSL-1.png",
  "assets/img/customer_logo/CSL-2.png",
  "assets/img/customer_logo/CSL-3.png",
  "assets/img/customer_logo/CSL-4.png",
  "assets/img/customer_logo/CSL-5.png",
  "assets/img/customer_logo/CSL-6.png",
  "assets/img/customer_logo/CSL-7.png",
]

const career_partner_logo_data = [
  "assets/img/career_partner_logos/Logo-1.png",
  "assets/img/career_partner_logos/Logo-2.png",
  "assets/img/career_partner_logos/Logo-3.png",
  "assets/img/career_partner_logos/Logo-4.png",
  "assets/img/career_partner_logos/Logo-5.png",
  "assets/img/career_partner_logos/Logo-6.png",
  "assets/img/career_partner_logos/Logo-7.png",
  "assets/img/career_partner_logos/Logo-8.png",
  "assets/img/career_partner_logos/Logo-9.png",
  "assets/img/career_partner_logos/Logo-10.png",
  "assets/img/career_partner_logos/Logo-11.png",
  "assets/img/career_partner_logos/Logo-12.png",
  "assets/img/career_partner_logos/Logo-13.png",
]

// Async Server Component
export default async function Home2() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Fetch customers/associations data
  let customersImages = customers_image_data; // Default fallback
  try {
    const customersRes = await fetch(`${apiUrl}/home/api/Associations`, {
      cache: "no-store",
    });
    const customersData = await customersRes.json();
    console.log(customersData);
    if (customersData?.Associations && Array.isArray(customersData.Associations) && customersData.Associations.length > 0) {
      // Flatten the img arrays and extract URLs
      customersImages = customersData.Associations.flatMap(item => item.img);
    }
    console.log(customersImages);
  } catch (error) {
    console.error("Error fetching associations:", error);
    // Fallback to default data
    customersImages = defaultImages; // Use Brand1's defaultImages as fallback
  }

  // Fetch career partner logos
  let careerPartnerLogos = career_partner_logo_data; // Default fallback
  // try {
  //   const careerRes = await fetch(`${apiUrl}/career/api/carrier-partner`, {
  //     cache: "no-store", // Ensures fresh data
  //   });
  //   const careerData = await careerRes.json();
  //   if (careerData && Array.isArray(careerData) && careerData.length > 0) {
  //     careerPartnerLogos = careerData.map(item => item.logo || item); // Adjust based on API response
  //   }
  // } catch (error) {
  //   console.error("Error fetching career partner logos:", error);
  //   // Fallback to default data
  // }

  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Hero2 />
        <About2 /> 
        <GroupofCompanies/>
        <Service3/>
        <Brand1 images={customersImages} know_more="Meet Our Clients"/>
        <Journey/>
        {/* <Service2 /> */}
        <Team2 />
        <Network/>
        <Brand1 heading="Our Affiliations & Accreditations"/>
        <Brand1 images={careerPartnerLogos} heading="Our Carrier Partner"/>
        {/* <Project2 /> */}
        {/* <Pricing /> */}
        <Achivements />
        <CtaBanner2 />
        <Testimonial2 />
        <News2 />
      </Layout>
    </>
  )
}