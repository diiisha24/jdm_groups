import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Layout from "@/components/layout/Layout";
import TeamDetails1 from "@/components/sections/TeamDetails1";
import { teamMembers } from "@/util/teamMembers";
import TeamSlider from "@/components/sections/Team2";

// Team data (copied from TeamSlider; ideally move to a shared file)
// const teamMembers = [
//   {
//     id: 1,
//     name: "Mr. Pahlad Singh",
//     role: "Founder",
//     image: "assets/img/team/team/Founder.png",
//     bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
//     phone: "+91 5698 0036 420",
//     email: "pahlad@example.com",
//   },
//   {
//     id: 2,
//     name: "Sahil Sehrawat",
//     role: "Managing Director",
//     image: "assets/img/team/1.png",
//     bio: "Amet I love liquorice jujubes pudding croissant I love pudding.",
//     phone: "+91 1234 5678 901",
//     email: "sahil@example.com",
//     website: "http://example.com/sahil",
//     experience: "15 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 3,
//     name: "Pal Raj",
//     role: "Regional Head, South",
//     image: "assets/img/team/2.png",
//     bio: "Apple pie macaroon toffee jujubes pie tart cookie caramels.",
//     phone: "+91 9876 5432 109",
//     email: "palraj@example.com",
//     website: "http://example.com/palraj",
//     experience: "18 Years",
//     availability: "Part Time Consultant",
//   },
//   {
//     id: 4,
//     name: "Alice Melbourne",
//     role: "Human Resources",
//     image: "assets/img/team/3.png",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 5555 6666 777",
//     email: "alice1@example.com",
//     website: "http://example.com/alice1",
//     experience: "10 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 5,
//     name: "Alice Melbourne",
//     role: "Human Resources",
//     image: "assets/img/team/4.png",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 8888 9999 000",
//     email: "alice2@example.com",
//     website: "http://example.com/alice2",
//     experience: "12 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 6,
//     name: "Alice Melbourne",
//     role: "Human Resources",
//     image: "assets/img/team/5.png",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 2222 3333 444",
//     email: "alice3@example.com",
//     website: "http://example.com/alice3",
//     experience: "14 Years",
//     availability: "Full Time Employee",
//   },
//   {
//     id: 7,
//     name: "Alice Melbourne",
//     role: "Human Resources",
//     image: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
//     phone: "+91 7777 8888 999",
//     email: "alice4@example.com",
//     website: "http://example.com/alice4",
//     experience: "11 Years",
//     availability: "Contractor",
//   },
// ];

// Generate static paths (for Pages Router with getStaticPaths or App Router)
export async function generateStaticParams() {
  return teamMembers.map((member) => ({ id: String(member.id) }));
}

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2500,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: { slidesPerView: 5 },
    991: { slidesPerView: 4 },
    767: { slidesPerView: 3 },
    575: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
};

export default function TeamDetails({ params }) {
  console.log("Params ID:", params.id);

  const member = teamMembers.find((m) => String(m.id) === params.id);

  if (!member) {
    console.log("Team member not found for ID:", params.id);
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Member Not Found">
        <div className="container">
          <h2>Team Member Not Found</h2>
          <p>The team member you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={member.name}>
      <TeamDetails1 member={member} />
      <TeamSlider/>
    </Layout>
  );
}