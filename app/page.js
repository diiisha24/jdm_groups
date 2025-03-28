
import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Achivements from "@/components/sections/Achivements"
import Brand1 from "@/components/sections/Brand1"
import CtaBanner2 from "@/components/sections/CtaBanner2"
import GroupofCompanies from "@/components/sections/GroupofCompanies"
import Hero2 from "@/components/sections/Hero2"
import Journey from "@/components/sections/Journey"
import News2 from "@/components/sections/News2"
// import Pricing from "@/components/sections/Pricing"
import Project2 from "@/components/sections/Project2"
// import Service2 from "@/components/sections/Service2"
import Service3 from "@/components/sections/Service3"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"

const customers_image_data = [
  "assets/img/customer_logo/CSL-1.png",
  "assets/img/customer_logo/CSL-2.png",
  "assets/img/customer_logo/CSL-3.png",
  "assets/img/customer_logo/CSL-4.png",
  "assets/img/customer_logo/CSL-5.png",
  "assets/img/customer_logo/CSL-6.png",
  "assets/img/customer_logo/CSL-7.png",
]

export default function Home2() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Hero2 />
        <About2 />
        <GroupofCompanies/>
        <Service3/>
        <Brand1 images={customers_image_data} know_more="Meet Our Clients"/>
        <Journey/>
        {/* <Service2 /> */}
        <Team2 />
        <Brand1 heading="Our Affiliations & Accreditations"/>
        <Brand1 images={customers_image_data} heading="Our Carrier Partner"/>
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
