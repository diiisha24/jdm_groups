"use client"
import Link from "next/link"
import { useState } from "react"

export default function Team2() {
  const [isAccordion, setIsAccordion] = useState(null)

  const handleAccordion = (key) => {
    setIsAccordion(prevState => (prevState === key ? null : key))
  }

  const handleMouseLeave = () => {
    setIsAccordion(null)
  }

  const teamMembers = [
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
      linkedIn: "https://www.linkedin.com/in/kusum-bisht/" // Add if available
    },
    { 
      id: 3, 
      name: "Sushank Jain", 
      position: "Schedule Management", 
      image: "https://media.licdn.com/dms/image/v2/D5603AQGJ02_89wICeg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707456525210?e=1748476800&v=beta&t=YU2QHi4a2HU3SO1060Q0Cri_NVL07OQe0RfGBIhWu5s", 
      delay: "0.4s",
      linkedIn: "https://www.linkedin.com/in/sushank-jain-34878b93/" // Add if available
    },
    { 
      id: 4, 
      name: "Ronald Richards", 
      position: "Sr. Engineer", 
      image: "assets/img/team/08.jpg", 
      delay: "0.6s",
      linkedIn: "" // Add if available
    },
  ]

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
                    {/* Only show other social icons if their links are provided */}
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
  )
}