// import Layout from "@/components/layout/Layout";
// import About1 from "@/components/sections/About1";
// import Brand1 from "@/components/sections/Brand1";
// import Contact from "@/components/sections/Contact";
// import CtaBanner from "@/components/sections/CtaBanner";
// import Faq from "@/components/sections/Faq";
// import Hero1 from "@/components/sections/Hero1";
// import News1 from "@/components/sections/News1";
// import OurSkills from "@/components/sections/OurSkills";
// import Project1 from "@/components/sections/Project1";
// import Service1 from "@/components/sections/Service1";
// import Team1 from "@/components/sections/Team1";
// import Testimonial1 from "@/components/sections/Testimonial1";
// export default function Home() {
//   return (
//     <>
//       <Layout headerStyle={1} footerStyle={1}>
//         <Hero1 />
//         <About1 />
//         <Service1 />
//         <CtaBanner />
//         <OurSkills />
//         <Testimonial1 />
//         <Project1 />
//         <Faq />
//         <Team1 />
//         <Contact />
//         <News1 />
//         <Brand1 />
//       </Layout>
//     </>
//   );
// }
import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Achivements from "@/components/sections/Achivements"
import Brand1 from "@/components/sections/Brand1"
import CtaBanner2 from "@/components/sections/CtaBanner2"
import Hero2 from "@/components/sections/Hero2"
import News2 from "@/components/sections/News2"
import Pricing from "@/components/sections/Pricing"
import Project2 from "@/components/sections/Project2"
import Service2 from "@/components/sections/Service2"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Hero2 />
        <About2 />
        <Service2 />
        <Brand1 />
        <Project2 />
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
