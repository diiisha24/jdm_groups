// pages/team-details/[id].jsx
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import TeamDetails1 from "@/components/sections/TeamDetails1";
import { teamMembers } from "@/util/teamMembers"; // Corrected import path

// export async function generateStaticParams() {
//   return teamMembers.map((member) => ({ id: String(member.id) }));
// }

export default function TeamDetails({ params }) {
  const member = teamMembers.find((m) => String(m.id) === params.id) || {
    id: null,
    name: "Unknown Member",
    role: "N/A",
    image: "/assets/img/team/details-1.jpg",
    bio: "No details available.",
    phone: "N/A",
    email: "N/A",
    website: "#",
    experience: "N/A",
    availability: "N/A",
  };

  if (!member.id) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Member Not Found">
        <div className="container">
          <h2>Team Member Not Found</h2>
          <p>The team member you are looking for does not exist.</p>
          <Link href="/team" className="btn btn-primary">
            Back to Team
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={member.name}>
      <TeamDetails1 member={member} />
    </Layout>
  );
}