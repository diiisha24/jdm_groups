// import Gallery from "@/components/elements/Gallery";
import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import Achivements from "@/components/sections/Achivements";
import IndianBranches from "@/components/sections/branches";
import Brand1 from "@/components/sections/Brand1";
import CtaBanner2 from "@/components/sections/CtaBanner2";
import Hero2 from "@/components/sections/Hero2";
import Journey from "@/components/sections/Journey";
import Network from "@/components/sections/network";
import News2 from "@/components/sections/News2";
// import Project2 from "@/components/sections/Project2";
import Service3 from "@/components/sections/Service3";
// import Team2 from "@/components/sections/Team2";
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
  "assets/img/career_partner_logos/1.png",
  "assets/img/career_partner_logos/2.png",
  "assets/img/career_partner_logos/3.png",
  "assets/img/career_partner_logos/4.png",
  "assets/img/career_partner_logos/5.png",
  "assets/img/career_partner_logos/6.png",
  "assets/img/career_partner_logos/7.png",
  "assets/img/career_partner_logos/8.png",
  "assets/img/career_partner_logos/9.png",
  "assets/img/career_partner_logos/10.png",
  "assets/img/career_partner_logos/11.png",
  "assets/img/career_partner_logos/12.png",
  "assets/img/career_partner_logos/13.png",
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
      <Brand1 images={customersImages} know_more="Our Clientelle" to="clientele" />
      <Journey />
      {/* <Team2 /> */}
      <Brand1 heading="Our Affiliations & Accreditations" />
      <Brand1 images={careerPartnerLogos} heading="Our Carrier Partner" />
      <Network />
      <IndianBranches/>
      {/* <Project2 /> */}
      <Achivements />
      <CtaBanner2 />
      <Testimonial2 />
      <News2 />
      {/* <Gallery/> */}
    </Layout>
  );
}