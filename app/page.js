import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import Achivements from "@/components/sections/Achivements";
import Brand1 from "@/components/sections/Brand1";
import CtaBanner2 from "@/components/sections/CtaBanner2";
import Hero2 from "@/components/sections/Hero2";
import Journey from "@/components/sections/Journey";
import Network from "@/components/sections/network";
import News2 from "@/components/sections/News2";
// import Project2 from "@/components/sections/Project2";
import Service3 from "@/components/sections/Service3";
import Team2 from "@/components/sections/Team2";
import Testimonial2 from "@/components/sections/Testimonial2";

// Default data as fallback
const customers_image_data = [
  "assets/img/customer_logo/CSL-1.png",
  "assets/img/customer_logo/CSL-2.png",
  "assets/img/customer_logo/CSL-3.png",
  "assets/img/customer_logo/CSL-4.png",
  "assets/img/customer_logo/CSL-5.png",
  "assets/img/customer_logo/CSL-6.png",
  "assets/img/customer_logo/CSL-7.png",
];

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
];

export default async function Home2() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // Fallback for dev

  // Fetch customers/associations data
  let customersImages = customers_image_data;
  try {
    const customersRes = await fetch(`${apiUrl}/home/api/Associations`, {
      cache: "no-store",
    });
    if (!customersRes.ok) throw new Error("Failed to fetch associations");
    const customersData = await customersRes.json();
    if (
      customersData?.Associations &&
      Array.isArray(customersData.Associations) &&
      customersData.Associations.length > 0
    ) {
      customersImages = customersData.Associations.flatMap((item) => item.img || []);
    }
  } catch (error) {
    console.error("Error fetching associations:", error);
    customersImages = customers_image_data; // Fixed fallback
  }

  // Fetch career partner logos (uncommented and improved)
  let careerPartnerLogos = career_partner_logo_data;
  try {
    const careerRes = await fetch(`${apiUrl}/career/api/carrier-partner`, {
      cache: "no-store",
    });
    if (!careerRes.ok) throw new Error("Failed to fetch career partners");
    const careerData = await careerRes.json();
    if (Array.isArray(careerData) && careerData.length > 0) {
      careerPartnerLogos = careerData.map((item) => item.logo || item);
    }
  } catch (error) {
    console.error("Error fetching career partner logos:", error);
    careerPartnerLogos = career_partner_logo_data; // Fallback
  }

  return (
    <Layout headerStyle={2} footerStyle={2}>
      <Hero2 />
      {/* Add Group Of companies */}
      <About2 />
      {/* <GroupofCompanies /> */}
      <Service3 />
      <Brand1 images={customersImages} know_more="Meet Our Clients" />
      <Journey />
      <Team2 />
      <Network />
      <Brand1 heading="Our Affiliations & Accreditations" />
      <Brand1 images={careerPartnerLogos} heading="Our Carrier Partner" />
      {/* <Project2 /> */}
      <Achivements />
      <CtaBanner2 />
      <Testimonial2 />
      <News2 />
    </Layout>
  );
}