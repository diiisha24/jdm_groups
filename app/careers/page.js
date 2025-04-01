// app/careers/page.jsx
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import CareerSection from "../../components/sections/Career";

export default async function Careers() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const defaultJobs = [
    {
      title: "Logistics Coordinator",
      location: "Remote",
      type: "Full-Time",
      description: "Coordinate shipments and ensure timely delivery for our clients.",
      applyLink: "/careers/apply?job=logistics-coordinator",
    },
    {
      title: "Fleet Manager",
      location: "[City Name]",
      type: "Full-Time",
      description: "Oversee our fleet operations and optimize performance.",
      applyLink: "/careers/apply?job=fleet-manager",
    },
  ];

  let jobs = defaultJobs;
  try {
    const response = await fetch(`${apiUrl}/careers/api/jobs/`, {
      cache: "no-store",
    });
    const data = await response.json();
    if (data && Array.isArray(data) && data.length > 0) {
      jobs = data.map((job) => ({
        title: job.title || "Untitled Position",
        location: job.location || "Unknown Location",
        type: job.type || "Full-Time",
        description: job.description || "No description available.",
        applyLink: job.applyLink || job.url || "#",
      }));
    }
  } catch (error) {
    console.error("Error fetching career data:", error);
  }

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Careers">
      <Head>
        <title>Careers | JDM Logistics</title>
        <meta
          name="description"
          content="Join our team at JDM Logistics. Explore career opportunities in transport and logistics."
        />
      </Head>
      <CareerSection jobs={jobs} />
    </Layout>
  );
}