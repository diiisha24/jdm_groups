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
    excerpt: "Founder, JDM Group of Companies",
    bio: "**Late Mr. Pahlad Singh** was the visionary founder of JDM Group, who laid the foundation of the company in 1978 with a humble beginning in transportation services within the logistics sector. Renowned for his steadfast commitment, integrity, and forward-thinking approach, he built more than just a business—he built a legacy rooted in trust, hard work, and excellence.His entrepreneurial spirit continues to guide JDM Group's values and vision, inspiring generations and shaping the company’s journey as it grows under the leadership of the current management and an ever-dedicated team.",
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
    excerpt: "Managing Director",
    image: "/assets/img/team/2.png",
    bio: "**Sahil Sehrawat** is a visionary leader and the driving force behind the **JDM Group of Companies**. Since taking on the role of Managing Director in 2015, he has been instrumental in steering the organization toward sustained growth and innovation.An alumnus of Deshbandhu College (2010–2013), Sahil combines academic insight with hands-on industry experience, bringing a strategic edge to every aspect of the business. His leadership has been pivotal in expanding the group's presence across multiple sectors, establishing JDM as a name synonymous with service excellence, operational efficiency, and customer-first solutions.In addition to leading the JDM Group, Sahil serves as Director of JDM Cargo Planner, JDM Worldwide, and JDM Express, and is also the Owner of Arrow Transport. His dynamic approach and forward-thinking mindset continue to shape the future of the organization, setting new benchmarks across the logistics and transport industries.",
    // phone: "+91 1234 5678 901",
    // email: "sahil@example.com",
    // availability: "Full Time",
    // social: {
    //   twitter: "https://twitter.com/sahil",
    //   linkedin: "https://linkedin.com/in/sahil",
    // },
  },
  {
    id: 3,
    name: "Pal Raj",
    role: "Regional Head, South",
    excerpt: "Regional Head, South",
    image: "/assets/img/team/3.png",
    bio: "With over **23 years in the logistics industry, Pal** brings deep expertise in **Operational Excellence, Customer Service Management, and P&L Oversight.** As **Regional Head – South at JDM Group**, he leads seamless logistics operations with a customer-first mindset, overseeing P&L, launching new branches, and building strong cross-functional teams across sales, marketing, and operations. Pal has a proven track record of streamlining supply chain processes, enhancing service quality, and driving financial performance. His strategic leadership focuses on minimizing inefficiencies, strengthening client relationships, and balancing cost with service excellence. Through innovation and continuous improvement, Pal plays a key role in delivering high-impact, sustainable logistics solutions for JDM.",
    // phone: "+91 9876 5432 109",
    // email: "palraj@example.com",
    // website: "http://example.com/palraj",
    // experience: "18 Years",
    // availability: "Part Time Consultant",
    // social: {
    //   facebook: "https://facebook.com/pahlad",
    //   linkedin: "https://linkedin.com/in/pahlad",
    // },
  },
  {
    id: 4,
    name: "Rohit Raj",
    role: "Branch Manager, JDM Group Pvt. Ltd.",
    excerpt: "Branch Manager, JDM Group Pvt. Ltd.",
    image: "/assets/img/team/4.png",
    bio: "Rohit Raj is a seasoned International Logistics Professional with over a decade of experience in freight forwarding, sales, and business development. He specializes in temperature-sensitive cargo, overseas networking, and strategic logistics planning.As the Branch Manager at JDM Group Pvt Ltd, Rohit oversees P&L management, key account handling, and new business development. He is instrumental in streamlining operations and ensuring top-notch service delivery.Holding a Postgraduate Diploma in Sales & Marketing and a Bachelor's in Commerce, Rohit combines academic insight with practical expertise to drive business growth. Based in Pune, he is passionate about traveling, exploring new cultures, and staying connected with global industry trends.",
    // phone: "+91 5555 6666 777",
    // email: "alice1@example.com",
    // website: "http://example.com/alice1",
    // experience: "10 Years",
    // availability: "Full Time Employee",
  },
  {
    id: 5,
    name: "Abhilash D",
    role: "Assistant General Manager, Customs Operations",
    excerpt: "Assistant General Manager, Customs Operations",
    image: "/assets/img/team/5.png",
    bio: "**Abhilash D,** AGM – Customs Operations at **JDM Group**, is a seasoned logistics professional with over 19 years of experience in customs operations. A BBA graduate from Kerala, he began his career in 2004 at an Export-Oriented Unit in New Delhi and later spent 15 years in Chennai managing import-export shipments for top multinational clients through the Chennai port.With deep expertise in Customs regulations, client management, and operational strategy, Abhilash leads customs processes at JDM Group, drives business development, and fosters strong stakeholder relationships. His leadership, compliance knowledge, and strategic insight continue to play a key role in streamlining operations and advancing JDM Groups’s success in the logistics space.",
    // phone: "+91 8888 9999 000",
    // email: "alice2@example.com",
    // website: "http://example.com/alice2",
    // experience: "12 Years",
    // availability: "Full Time Employee",
  },
  {
    id: 6,
    name: "Anuj Arora",
    role: "General Manager",
    excerpt: "General Manager",
    image: "/assets/img/team/6.png",
    bio: "As **General Manager,** my journey with JDM Group has been both professionally rewarding and personally fulfilling. Each challenge and achievement has shaped my growth, deepened my appreciation for our team's dedication, and reinforced the power of collaboration in our fast-paced logistics environment.I’m proud to have contributed by streamlining operations, enhancing systems, and nurturing a culture of innovation—always with the goal of empowering our team and driving our collective success. Together, we've built a resilient organization that consistently exceeds client expectations.Looking ahead, I’m excited for the opportunities that await. Let’s continue to push boundaries, support one another, and strive for excellence—together.",
    // phone: "+91 2222 3333 444",
    // email: "alice3@example.com",
    // website: "http://example.com/alice3",
    // experience: "14 Years",
    // availability: "Full Time Employee",
  },
  {
    id: 7,
    name: "Anju Dubey",
    role: "Corporate Sales Manager",
    excerpt: "Corporate Sales Manager",
    image: "/assets/img/team/09.jpg",
    bio: "**Anju Dubey** is a dynamic professional with a solid foundation in logistics, supply chain, and client management. As **Corporate Sales Manager at JDM Group**, she leads sales efforts, nurtures client relationships, and ensures smooth, efficient operations. Known for her hands-on approach and results-driven mindset, Anju has a proven ability to onboard clients, streamline processes, and support team collaboration. Her passion for delivering value aligns seamlessly with JDM’s culture of innovation and excellence, making her a key player in driving both client satisfaction and business growth.",
    // phone: "+91 7777 8888 999",
    // email: "alice4@example.com",
    // website: "http://example.com/alice4",
    // experience: "11 Years",
    // availability: "Contractor",
  },
  {
    id: 8,
    name: "Jaspreet Singh",
    role: "Assistant General Manager, Operations",
    excerpt: "Assistant General Manager, Operations",
    image: "/assets/img/team/09.jpg",
    bio: "**Jaspreet Singh**, AGM – Operations at **JDM Cargo Planners Pvt. Ltd.**, brings over 21 years of experience in import customs clearance and customer relationship management. A **Customs Rule 6-qualified** expert with a postgraduate diploma in international business and certifications in **IATA Cargo and Customs Compliance**, he joined JDM Group in 2021 and now leads strategic planning, key account management, and end-to-end customs operations.One of his career highlights includes managing imports for the Formula One Grand Prix for three consecutive years—a testament to his ability to execute high-pressure, time-sensitive projects with precision. Jaspreet’s leadership, deep industry insight, and consistent delivery of excellence make him a vital contributor to JDM’s continued success and reliability in the logistics space.",
    // phone: "+91 7777 8888 999",
    // email: "alice4@example.com",
    // website: "http://example.com/alice4",
    // experience: "11 Years",
    // availability: "Contractor",
  },
];