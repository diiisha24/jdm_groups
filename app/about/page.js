import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Clientele from "@/components/sections/Clientele";
import Achivements from "@/components/sections/Achivements";
import Brand1 from "@/components/sections/Brand1";
import Faq from "@/components/sections/Faq";
import Team2 from "@/components/sections/Team2";
// import Team1 from "@/components/sections/Team1";
import Testimonial1 from "@/components/sections/Testimonial1";
export default function About() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About">
        <About1 />
        <Clientele/>
        <Achivements />
        {/* <Testimonial1 /> */}
        {/* <Team1 /> */}
        <Team2 />
        <Faq/>
        <Brand1 />
      </Layout>
    </>
  );
}
