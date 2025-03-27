
import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Achivements from "@/components/sections/Achivements"
import Brand1 from "@/components/sections/Brand1"
import CtaBanner2 from "@/components/sections/CtaBanner2"
import Hero2 from "@/components/sections/Hero2"
import News2 from "@/components/sections/News2"
// import Pricing from "@/components/sections/Pricing"
import Project2 from "@/components/sections/Project2"
// import Service2 from "@/components/sections/Service2"
import Service3 from "@/components/sections/Service3"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Hero2 />
        <About2 />
        {/* <Service2 /> */}
        <Service3/>
        <Brand1 />
        {/* <Project2 /> */}
        <Team2 />
        {/* <Pricing /> */}
        <Achivements />
        <CtaBanner2 />
        <Testimonial2 />
        <News2 />
      </Layout>
    </>
  )
}
