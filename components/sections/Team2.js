"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

// Default team members array as fallback
const defaultTeamMembers = [
  { 
    id: 1, 
    name: "Sahil Sehrawat", 
    position: "Managing Director", 
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGHZ-PmavljGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516948614237?e=1748476800&v=beta&t=4nBwiHmVYpTmeyWWyla9VP9hcmbEQLe_Z0SM97K5N3k", 
    delay: "", 
    linkedIn: "https://www.linkedin.com/in/sahil-sehrawat-a1bab084/" 
  },
  { 
    id: 2, 
    name: "Kusum Bisht", 
    position: "BD & HR Manager", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQFrx1eMxps6Sw/profile-displayphoto-shrink_800_800/B56ZWyveqPHEAg-/0/1742460546147?e=1748476800&v=beta&t=pNCZgI4aYRlMolfig4GrOwlGS_qXcuVZGqXXH6qeCIE", 
    delay: "0.2s",
    linkedIn: "https://www.linkedin.com/in/kusum-bisht/" 
  },
  { 
    id: 3, 
    name: "Sushank Jain", 
    position: "Schedule Management", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQGJ02_89wICeg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707456525210?e=1748476800&v=beta&t=YU2QHi4a2HU3SO1060Q0Cri_NVL07OQe0RfGBIhWu5s", 
    delay: "0.4s",
    linkedIn: "https://www.linkedin.com/in/sushank-jain-34878b93/" 
  },
  { 
    id: 4, 
    name: "Ronald Richards", 
    position: "Sr. Engineer", 
    image: "assets/img/team/08.jpg", 
    delay: "0.6s",
    linkedIn: "" 
  },
];

export default function Team2() {
  const [isAccordion, setIsAccordion] = useState(null);
  const [teamMembers, setTeamMembers] = useState(defaultTeamMembers); // Initialize with default team members

  // Fetch team data from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchTeamData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/api/our-team/`);
        const data = await response.json();
        // Assuming the API returns an array of objects with id, name, position, image, linkedIn, etc.
        if (data && Array.isArray(data) && data.length > 0) {
          const fetchedTeamMembers = data.map((member, index) => ({
            id: member.id || index + 1, // Use API ID or fallback to index
            name: member.name || "Unnamed Member",
            position: member.position || "Unknown Position",
            image: member.image || "assets/img/team/default.jpg", // Fallback image
            delay: defaultTeamMembers[index % defaultTeamMembers.length].delay, // Reuse delays
            linkedIn: member.linkedIn || "", // Optional field
            twitter: member.twitter || "", // Optional field
            instagram: member.instagram || "", // Optional field
            facebook: member.facebook || "", // Optional field
          }));
          setTeamMembers(fetchedTeamMembers);
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
        // Fallback to defaultTeamMembers (already set)
      }
    };

    fetchTeamData();
  }, []); // Runs once on mount

  const handleAccordion = (key) => {
    setIsAccordion(prevState => (prevState === key ? null : key));
  };

  const handleMouseLeave = () => {
    setIsAccordion(null);
  };

  return (
    <>
      <section className="team-section section-padding pt-0" id="team">
        <div className="shape-1 float-bob-y">
          {/* <img src="assets/img/team/shape-1.png" alt="Decorative Shape" /> */}
        </div>
        <div className="shape-2">
          {/* <img src="assets/img/team/shape-2.png" alt="Decorative Shape" /> */}
        </div>
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">
              <i className="fa-regular fa-arrow-left-long" /> our team members
              <i className="fa-regular fa-arrow-right-long" />
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">Our Team</h2>
          </div>
          <div className="row cursor-pointer">
            {teamMembers.map(member => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                style={{ animationDelay: member.delay }}
                onMouseEnter={() => handleAccordion(member.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`team-box-items ${isAccordion === member.id ? 'active' : ''}`}>
                  <div className="social-icon d-grid align-items-center">
                    {member.linkedIn && (
                      <Link href={member.linkedIn} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    )}
                    {member.twitter && (
                      <Link href={member.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </Link>
                    )}
                    {member.instagram && (
                      <Link href={member.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </Link>
                    )}
                    {member.facebook && (
                      <Link href={member.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    )}
                  </div>
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-content">
                    <h5><Link href="/team-details">{member.name}</Link></h5>
                    <p>{member.position}</p>
                    <Link href="/team-details" className="icon">
                      <i className="fa-solid fa-link" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> 
      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
        }

        .col-xl-3 {
          display: flex;
        }

        .team-box-items {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease-in-out;
        }

        .team-image {
          width: 100%;
          overflow: hidden;
        }

        .team-image img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease-in-out;
        }

        .team-box-items.active .team-image img {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}