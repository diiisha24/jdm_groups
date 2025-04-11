// lib/data/teamMembers.js

/**
 * @typedef {Object} TeamMember
 * @property {number} id - Unique identifier for the team member
 * @property {string} name - Full name of the team member
 * @property {string} role - Job title or role
 * @property {string} image - Path to the team member's image
 * @property {string} bio - Short biography or description
 * @property {string} phone - Contact phone number
 * @property {string} email - Contact email address
 * @property {string} website - Personal or professional website URL
 * @property {string} experience - Years of experience
 * @property {string} availability - Employment status (e.g., Full Time, Contractor)
 * @property {{facebook?: string, twitter?: string, youtube?: string, linkedin?: string}} [social] - Optional social media links
 */

/** @type {TeamMember[]} */
export const teamMembers = [
  {
    id: 1,
    name: "Late Mr. Pahlad Singh",
    role: "Founder, JDM Group of Companies",
    image: "/assets/img/team/1.png",
    excerpt: "Late Mr. Pahlad Singh was the visionary founder of JDM Group",
    bio: "Late Mr. Pahlad Singh was the visionary founder of JDM Group, who laid the foundation of the company in 1978 with a humble beginning in transportation services within the logistics sector. Renowned for his steadfast commitment, integrity, and forward-thinking approach, he built more than just a business—he built a legacy rooted in trust, hard work, and excellence.His entrepreneurial spirit continues to guide JDM Group's values and vision, inspiring generations and shaping the company’s journey as it grows under the leadership of the current management and an ever-dedicated team.",
    // phone: "+91 5698 0036 420",
    // email: "pahlad@example.com",
    // website: "http://example.com/pahlad",
    // experience: "20 Years",
    // availability: "Full Time Employee",
    // social: {
    //   facebook: "https://facebook.com/pahlad",
    //   linkedin: "https://linkedin.com/in/pahlad",
    // },
  },
  {
    id: 2,
    name: "Sahil Sehrawat",
    role: "Managing Director",
    image: "/assets/img/team/2.png",
    bio: "**Sahil Sehrawat** is a visionary leader and the driving force behind the **JDM Group of Companies**. Since taking on the role of Managing Director in 2015, he has been instrumental in steering the organization toward sustained growth and innovation.An alumnus of Deshbandhu College (2010–2013), Sahil combines academic insight with hands-on industry experience, bringing a strategic edge to every aspect of the business. His leadership has been pivotal in expanding the group's presence across multiple sectors, establishing JDM as a name synonymous with service excellence, operational efficiency, and customer-first solutions.In addition to leading the JDM Group, Sahil serves as Director of JDM Cargo Planner, JDM Worldwide, and JDM Express, and is also the Owner of Arrow Transport. His dynamic approach and forward-thinking mindset continue to shape the future of the organization, setting new benchmarks across the logistics and transport industries.",
    phone: "+91 1234 5678 901",
    email: "sahil@example.com",
    availability: "Full Time",
    social: {
      twitter: "https://twitter.com/sahil",
      linkedin: "https://linkedin.com/in/sahil",
    },
  },
  {
    id: 3,
    name: "Pal Raj",
    role: "Regional Head, South",
    image: "/assets/img/team/3.png",
    bio: "Apple pie macaroon toffee jujubes pie tart cookie caramels.",
    phone: "+91 9876 5432 109",
    email: "palraj@example.com",
    website: "http://example.com/palraj",
    experience: "18 Years",
    availability: "Part Time Consultant",
    social: {
      facebook: "https://facebook.com/pahlad",
      linkedin: "https://linkedin.com/in/pahlad",
    },
  },
  {
    id: 4,
    name: "Rohit Raj",
    role: "Branch Manager, JDM Worldwide Pvt. Ltd.",
    image: "/assets/img/team/4.png",
    bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
    phone: "+91 5555 6666 777",
    email: "alice1@example.com",
    website: "http://example.com/alice1",
    experience: "10 Years",
    availability: "Full Time Employee",
  },
  {
    id: 5,
    name: "Abhilash D",
    role: "Assistant General Manager, Customs Operations",
    image: "/assets/img/team/5.png",
    bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
    phone: "+91 8888 9999 000",
    email: "alice2@example.com",
    website: "http://example.com/alice2",
    experience: "12 Years",
    availability: "Full Time Employee",
  },
  {
    id: 6,
    name: "Anuj Arora",
    role: "General Manager",
    image: "/assets/img/team/6.png",
    bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
    phone: "+91 2222 3333 444",
    email: "alice3@example.com",
    website: "http://example.com/alice3",
    experience: "14 Years",
    availability: "Full Time Employee",
  },
  {
    id: 7,
    name: "Anju Dubey",
    role: "Corporate Sales Manager",
    image: "/assets/img/team/09.jpg",
    bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
    phone: "+91 7777 8888 999",
    email: "alice4@example.com",
    website: "http://example.com/alice4",
    experience: "11 Years",
    availability: "Contractor",
  },
  {
    id: 8,
    name: "Jaspreet Singh",
    role: "Assistant General Manager, Operations",
    image: "/assets/img/team/09.jpg",
    bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
    phone: "+91 7777 8888 999",
    email: "alice4@example.com",
    website: "http://example.com/alice4",
    experience: "11 Years",
    availability: "Contractor",
  },
];