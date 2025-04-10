// // "use client"
// // import Link from "next/link"
// // import { useState, useEffect } from "react"

// // // Default team members array as fallback
// // const defaultTeamMembers = [
// //   { 
// //     id: 1,
// //     name: "Sahil Sehrawat", 
// //     position: "Managing Director",
// //     image: "assets/img/team/01.jpg", 
// //     delay: "", 
// //     linkedIn: "https://www.linkedin.com/in/sahil-sehrawat-a1bab084/" 
// //   },
// //   { 
// //     id: 2, 
// //     name: "Pal Raj", 
// //     position: "Regional Head, South", 
// //     image: "assets/img/team/02.jpg", 
// //     delay: "0.2s",
// //     linkedIn: "https://www.linkedin.com/in/kusum-bisht/" 
// //   },
// //   { 
// //     id: 3, 
// //     name: "Rohit Raj", 
// //     position: "Branch Manager", 
// //     image: "assets/img/team/03.jpg", 
// //     delay: "0.4s",
// //     linkedIn: "https://www.linkedin.com/in/sushank-jain-34878b93/" 
// //   },
// //   { 
// //     id: 4, 
// //     name: "Abhilash", 
// //     position: "Assistant General Manager,Customs Operations", 
// //     image: "assets/img/team/04.jpg", 
// //     delay: "0.6s",
// //     linkedIn: "" 
// //   },
// //   { 
// //     id: 5, 
// //     name: "Anuj Arora", 
// //     position: "General Manager", 
// //     image: "assets/img/team/05.jpg", 
// //     delay: "0.6s",
// //     linkedIn: "" 
// //   },
// //   { 
// //     id: 6, 
// //     name: "Anju Dubey", 
// //     position: "Corporate Sales Manager", 
// //     image: "assets/img/team/09.jpg", 
// //     delay: "0.6s",
// //     linkedIn: "" 
// //   },
// //   { 
// //     id: 7,
// //     name: "Name", 
// //     position: "Designation", 
// //     image: "assets/img/team/09.jpg", 
// //     delay: "0.6s",
// //     linkedIn: "" 
// //   },
// // ];

// // export default function Team2() {
// //   const [isAccordion, setIsAccordion] = useState(null);
// //   const [teamMembers, setTeamMembers] = useState(defaultTeamMembers); // Initialize with default team members

// //   // Fetch team data from API on mount
// //   useEffect(() => {
// //     const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// //     const fetchTeamData = async () => {
// //       try {
// //         const response = await fetch(`${apiUrl}/home/api/our-team/`);
// //         const data = await response.json();
// //         // Assuming the API returns an array of objects with id, name, position, image, linkedIn, etc.
// //         if (data && Array.isArray(data) && data.length > 0) {
// //           const fetchedTeamMembers = data.map((member, index) => ({
// //             id: member.id || index + 1, // Use API ID or fallback to index
// //             name: member.name || "Unnamed Member",
// //             position: member.position || "Unknown Position",
// //             image: member.image || "assets/img/team/default.jpg", // Fallback image
// //             delay: defaultTeamMembers[index % defaultTeamMembers.length].delay, // Reuse delays
// //             linkedIn: member.linkedIn || "", // Optional field
// //             twitter: member.twitter || "", // Optional field
// //             instagram: member.instagram || "", // Optional field
// //             facebook: member.facebook || "", // Optional field
// //           }));
// //           setTeamMembers(fetchedTeamMembers);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching team data:", error);
// //         // Fallback to defaultTeamMembers (already set)
// //       }
// //     };

// //     fetchTeamData();
// //   }, []); // Runs once on mount

// //   const handleAccordion = (key) => {
// //     setIsAccordion(prevState => (prevState === key ? null : key));
// //   };

// //   const handleMouseLeave = () => {
// //     setIsAccordion(null);
// //   };

// //   return (
// //     <>
// //       <section className="team-section section-padding" id="team">
// //         <div className="shape-1 float-bob-y">
// //           {/* <img src="assets/img/team/shape-1.png" alt="Decorative Shape" /> */}
// //         </div>
// //         <div className="shape-2">
// //           {/* <img src="assets/img/team/shape-2.png" alt="Decorative Shape" /> */}
// //         </div>
// //         <div className="container">
// //           <div className="section-title text-center">
// //             <h6 className="wow fadeInUp">
// //               <i className="fa-regular fa-arrow-left-long" /> our team members
// //               <i className="fa-regular fa-arrow-right-long" />
// //             </h6>
// //             <h2 className="wow fadeInUp" data-wow-delay=".2s">Our Team</h2>
// //           </div>
// //           <div className="row cursor-pointer">
// //             {teamMembers.map(member => (
// //               <div
// //                 key={member.id}
// //                 className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
// //                 style={{ animationDelay: member.delay }}
// //                 onMouseEnter={() => handleAccordion(member.id)}
// //                 onMouseLeave={handleMouseLeave}
// //               >
// //                 <div className={`team-box-items ${isAccordion === member.id ? 'active' : ''}`}>
// //                   <div className="social-icon d-grid align-items-center">
// //                     {member.linkedIn && (
// //                       <Link href={member.linkedIn} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
// //                         <i className="fab fa-linkedin-in" />
// //                       </Link>
// //                     )}
// //                     {member.twitter && (
// //                       <Link href={member.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
// //                         <i className="fab fa-twitter" />
// //                       </Link>
// //                     )}
// //                     {member.instagram && (
// //                       <Link href={member.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
// //                         <i className="fab fa-instagram" />
// //                       </Link>
// //                     )}
// //                     {member.facebook && (
// //                       <Link href={member.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
// //                         <i className="fab fa-facebook-f" />
// //                       </Link>
// //                     )}
// //                   </div>
// //                   <div className="team-image">
// //                     <img src={member.image} alt={member.name} />
// //                   </div>
// //                   <div className="team-content">
// //                     <h5><Link href="/team-details">{member.name}</Link></h5>
// //                     <p>{member.position}</p>
// //                     <Link href="/team-details" className="icon">
// //                       <i className="fa-solid fa-link" />
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section> 
// //       <style jsx>{`
// //         .row {
// //           display: flex;
// //           flex-wrap: wrap;
// //           justify-content: center;
// //         }

// //         .col-xl-3 {
// //           display: flex;
// //         }

// //         .team-box-items {
// //           display: flex;
// //           flex-direction: column;
// //           height: 100%;
// //           transition: transform 0.3s ease-in-out;
// //         }

// //         .team-image {
// //           width: 100%;
// //           overflow: hidden;
// //         }

// //         .team-image img {
// //           min-width:250px;
// //           width: 100%;
// //           height: 300px;
// //           object-fit: cover;
// //           object-position: center;
// //           transition: transform 0.3s ease-in-out;
// //         }

// //         .team-box-items.active .team-image img {
// //           transform: scale(1.1);
// //         }
// //       `}</style>
// //     </>
// //   );
// // }
// "use client"
// import Link from "next/link"
// import { useState, useEffect } from "react"

// // Default team members array with added shortDescription
// const defaultTeamMembers = [
//   { 
//     id: 1,
//     name: "Sahil Sehrawat", 
//     position: "Managing Director",
//     shortDescription: "Leads with vision",
//     image: "assets/img/team/01.jpg", 
//     linkedIn: "https://www.linkedin.com/in/sahil-sehrawat-a1bab084/" 
//   },
//   { 
//     id: 2, 
//     name: "Pal Raj", 
//     position: "Regional Head, South",
//     shortDescription: "Drives southern growth",
//     image: "assets/img/team/02.jpg",
//     linkedIn: "https://www.linkedin.com/in/kusum-bisht/" 
//   },
//   { 
//     id: 3, 
//     name: "Rohit Raj", 
//     position: "Branch Manager",
//     shortDescription: "Manages branch operations",
//     image: "assets/img/team/03.jpg",
//     linkedIn: "https://www.linkedin.com/in/sushank-jain-34878b93/" 
//   },
//   { 
//     id: 4, 
//     name: "Abhilash", 
//     position: "Assistant General Manager, Customs Operations",
//     shortDescription: "Customs expert",
//     image: "assets/img/team/04.jpg",
//     linkedIn: "" 
//   },
//   { 
//     id: 5, 
//     name: "Anuj Arora", 
//     position: "General Manager",
//     shortDescription: "Oversees operations",
//     image: "assets/img/team/05.jpg",
//     linkedIn: "" 
//   },
//   { 
//     id: 6, 
//     name: "Anju Dubey", 
//     position: "Corporate Sales Manager",
//     shortDescription: "Boosts corporate sales",
//     image: "assets/img/team/09.jpg",
//     linkedIn: "" 
//   },
//   { 
//     id: 7,
//     name: "Name", 
//     position: "Designation",
//     shortDescription: "Team contributor",
//     image: "assets/img/team/09.jpg",
//     linkedIn: "" 
//   },
// ];

// export default function Team2() {
//   const [teamMembers, setTeamMembers] = useState(defaultTeamMembers);

//   useEffect(() => {
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//     const fetchTeamData = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/home/api/our-team/`);
//         const data = await response.json();
//         if (data && Array.isArray(data) && data.length > 0) {
//           const fetchedTeamMembers = data.map((member, index) => ({
//             id: member.id || index + 1,
//             name: member.name || "Unnamed Member",
//             position: member.position || "Unknown Position",
//             shortDescription: member.shortDescription || "Team contributor",
//             image: member.image || "assets/img/team/default.jpg",
//             linkedIn: member.linkedIn || "",
//           }));
//           setTeamMembers(fetchedTeamMembers);
//         }
//       } catch (error) {
//         console.error("Error fetching team data:", error);
//       }
//     };

//     fetchTeamData();
//   }, []);

//   return (
//     <>
//       <section className="team-section section-padding" id="team">
//         <div className="container">
//           <div className="section-title text-center">
//             <h6 className="wow fadeInUp">
//               <i className="fa-regular fa-arrow-left-long" /> Our Team Members
//               <i className="fa-regular fa-arrow-right-long" />
//             </h6>
//             <h2 className="wow fadeInUp" data-wow-delay=".2s">Meet Our Team</h2>
//           </div>
//           <div className="row cursor-pointer">
//             {teamMembers.map(member => (
//               <div
//                 key={member.id}
//                 className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp cursor-pointer"
//                 data-wow-delay={member.delay || "0s"}
//               >
//                 <div className="team-box-items">
//                   <div className="team-image">
//                     <img src={member.image} alt={member.name} />
//                     <div className="initial-overlay team-content">
//                       <h5>{member.name}</h5>
//                     </div>
//                     <div className="hover-overlay">
//                       <div className="overlay-content">
//                         <h5>{member.name}</h5>
//                         <p className="position">{member.position}</p>
//                         <p className="description">{member.shortDescription}</p>
//                         {/* {member.linkedIn && (
//                           <Link href={member.linkedIn} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
//                             <i className="fab fa-linkedin-in" />
//                           </Link>
//                         )} */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> 
//       <style jsx>{`
//         .row {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .col-xl-3 {
//           display: flex;
//         }

//         .team-box-items {
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           height: 400px; /* Slightly taller for a premium feel */
//           width: 100%;
//           max-width: 280px; /* Fixed width for uniformity */
//           overflow: hidden;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//           background: #fff; /* White background for card */
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .team-box-items:hover {
//           transform: translateY(-10px); /* Slight lift on hover */
//           box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
//         }

//         .team-image {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//         }

//         .team-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center;
//           transition: height 0.4s ease-in-out; /* Smoother transition */
//         }

//         .initial-overlay {
//           position: absolute;
//           bottom: 20px;
//           left: 0;
//           right: 0;
//           text-align: center;
//           transition: opacity 0.3s ease-in-out;
//         }

//         .initial-overlay h5 {
//           font-size: 20px; /* Larger for premium feel */
//           font-weight: 600;
//           color: #fff;   
//         }

//         .hover-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           transform: scale(0);
//           transition: transform 0.4s ease-in-out;
//           display: flex;
//           align-items: flex-end;
//         }

//         .team-box-items:hover .hover-overlay {
//           transform: scale(1);
//         }

//         .team-box-items:hover .initial-overlay {
//           opacity: 0;
//         }

//         .team-box-items:hover .team-image img {
//           height: 65%; /* Slightly smaller window for more content space */
//           width: 100%; /* Maintains full width */
//         }

//         .overlay-content {
//           width: 100%;
//           background: #ffffff; /* Clean white for premium look */
//           padding: 20px;
//           text-align: center;
//           transform: translateY(100%);
//           transition: transform 0.4s ease-in-out;
//         }

//         .team-box-items:hover .overlay-content {
//           transform: translateY(0);
//         }

//         .overlay-content h5 {
//           margin: 0 0 8px 0;
//           font-size: 20px;
//           font-weight: 600;
//           color: #1a1a1a; /* Darker for readability */
//           letter-spacing: 0.5px;
//         }

//         .overlay-content .position {
//           margin: 0 0 6px 0;
//           font-size: 14px;
//           font-weight: 500;
//           color: #666;
//           font-style: normal; /* Remove italic for cleaner look */
//           text-transform: uppercase; /* Premium touch */
//           letter-spacing: 1px;
//         }

//         .overlay-content .description {
//           margin: 0 0 12px 0;
//           font-size: 14px;
//           color: #888;
//           font-weight: 400;
//         }

//         .overlay-content a {
//           color: #0077b5;
//           font-size: 20px;
//           margin: 0 5px;
//           text-decoration: none;
//           transition: color 0.3s ease;
//         }

//         .overlay-content a:hover {
//           color: #005582;
//         }

//         /* Section title styling for Trastek theme */
//         .section-title h6 {
//           font-size: 16px;
//           font-weight: 500;
//           color: #0077b5; /* Theme accent color */
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           margin-bottom: 10px;
//         }

//         .section-title h2 {
//           font-size: 36px;
//           font-weight: 700;
//           color: #1a1a1a;
//           margin-bottom: 40px;
//         }
//       `}</style>
//     </>
//   );
// }

// export const Team = () => {
//   return (
//     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
//         <div>
//           <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
//             Core Team
//           </p>
//         </div>
//         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
//           <span className="relative inline-block">
//             <svg
//               viewBox="0 0 52 24"
//               fill="currentColor"
//               className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
//             >
//               <defs>
//                 <pattern
//                   id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
//                   x="0"
//                   y="0"
//                   width=".135"
//                   height=".30"
//                 >
//                   <circle cx="1" cy="1" r=".7" />
//                 </pattern>
//               </defs>
//               <rect
//                 fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
//                 width="52"
//                 height="24"
//               />
//             </svg>
//             <span className="relative">Welcome</span>
//           </span>{' '}
//           our talented team of professionals
//         </h2>
//         <p className="text-base text-gray-700 md:text-lg">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//           accusantium doloremque rem aperiam, eaque ipsa quae.
//         </p>
//       </div>
//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//         <div>
//           <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//             <img
//               className="object-cover w-full h-56 md:h-64 xl:h-80"
//               src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
//               alt="Person"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//               <p className="mb-1 text-lg font-bold text-gray-100">
//                 Oliver Aguilerra
//               </p>
//               <p className="mb-4 text-xs text-gray-100">Product Manager</p>
//               <p className="mb-4 text-xs tracking-wide text-gray-400">
//                 Vincent Van Gogh’s most popular painting, The Starry Night.
//               </p>
//               <div className="flex items-center justify-center space-x-3">
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//             <img
//               className="object-cover w-full h-56 md:h-64 xl:h-80"
//               src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//               alt="Person"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//               <p className="mb-1 text-lg font-bold text-gray-100">
//                 Marta Clermont
//               </p>
//               <p className="mb-4 text-xs text-gray-100">Design Team Lead</p>
//               <p className="mb-4 text-xs tracking-wide text-gray-400">
//                 Amet I love liquorice jujubes pudding croissant I love pudding.
//               </p>
//               <div className="flex items-center justify-center space-x-3">
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//             <img
//               className="object-cover w-full h-56 md:h-64 xl:h-80"
//               src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//               alt="Person"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//               <p className="mb-1 text-lg font-bold text-gray-100">
//                 Anthony Geek
//               </p>
//               <p className="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
//               <p className="mb-4 text-xs tracking-wide text-gray-400">
//                 Apple pie macaroon toffee jujubes pie tart cookie caramels.
//               </p>
//               <div className="flex items-center justify-center space-x-3">
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//             <img
//               className="object-cover w-full h-56 md:h-64 xl:h-80"
//               src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//               alt="Person"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//               <p className="mb-1 text-lg font-bold text-gray-100">
//                 Alice Melbourne
//               </p>
//               <p className="mb-4 text-xs text-gray-100">Human Resources</p>
//               <p className="mb-4 text-xs tracking-wide text-gray-400">
//                 Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
//                 elit.
//               </p>
//               <div className="flex items-center justify-center space-x-3">
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//             <img
//               className="object-cover w-full h-56 md:h-64 xl:h-80"
//               src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
//               alt="Person"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//               <p className="mb-1 text-lg font-bold text-gray-100">
//                 Martin Garix
//               </p>
//               <p className="mb-4 text-xs text-gray-100">Good guy</p>
//               <p className="mb-4 text-xs tracking-wide text-gray-400">
//                 Bacon ipsum dolor sit amet salami jowl corned beef, andouille
//                 flank.
//               </p>
//               <div className="flex items-center justify-center space-x-3">
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//             <img
//               className="object-cover w-full h-56 md:h-64 xl:h-80"
//               src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//               alt="Person"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//               <p className="mb-1 text-lg font-bold text-gray-100">
//                 Andrew Larkin
//               </p>
//               <p className="mb-4 text-xs text-gray-100">Backend Developer</p>
//               <p className="mb-4 text-xs tracking-wide text-gray-400">
//                 Moonfish, steelhead, lamprey southern flounder tadpole fish
//                 bigeye.
//               </p>
//               <div className="flex items-center justify-center space-x-3">
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//             <img
//               className="object-cover w-full h-56 md:h-64 xl:h-80"
//               src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
//               alt="Person"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//               <p className="mb-1 text-lg font-bold text-gray-100">
//                 Sophie Denmo
//               </p>
//               <p className="mb-4 text-xs text-gray-100">Designer</p>
//               <p className="mb-4 text-xs tracking-wide text-gray-400">
//                 Veggies sunt bona vobis, proinde vos postulo esse magis grape
//                 pea.
//               </p>
//               <div className="flex items-center justify-center space-x-3">
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
//             <img
//               className="object-cover w-full h-56 md:h-64 xl:h-80"
//               src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//               alt="Person"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//               <p className="mb-1 text-lg font-bold text-gray-100">
//                 Benedict Caro
//               </p>
//               <p className="mb-4 text-xs text-gray-100">Frontend Developer</p>
//               <p className="mb-4 text-xs tracking-wide text-gray-400">
//                 I love cheese, especially airedale queso. Cheese and biscuits
//                 halloumi.
//               </p>
//               <div className="flex items-center justify-center space-x-3">
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="/"
//                   className="text-white transition-colors duration-300 hover:text-teal-accent-400"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// import Image from 'next/image';

"use client";
import React from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Uncomment if using Swiper CSS

// Custom styles combining Team2 and Service section styles
const customStyles = `
  .card-hover {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    height: 100%;
  }
  .social-icon {
    transition: color 0.3s ease;
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }

  .social-icon:hover {
    color: #0dcaf0 !important; /* Bootstrap's info color */
  }

  .swiper-slide {
    height: auto;
    display: flex;
    align-items: stretch;
  }

  .swiper-slide .card-hover {
    width: 100%;
    height: 100%;
  }

  /* Service section-inspired card styling */
  .team-box-items {
    margin-top: 30px;
    background-color: var(--white);
    text-align: center;
  }

  .team-box-items .service-thumb {
    padding: 18px 18px 65px 18px;
    position: relative;
  }

  .team-box-items .service-thumb img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .team-box-items .service-thumb .icon {
    position: absolute;
    bottom: 30px;
    left: 40px;
    width: 68px;
    height: 68px;
    text-align: center;
    background-color: var(--white);
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.06);
    padding: 14px;
    font-size: 30px;
    color: var(--theme);
  }

  .team-box-items .service-content {
    padding: 0 30px 30px 30px;
    position: relative;
  }

  .team-box-items .service-content .number {
    text-align: right;
    -webkit-text-stroke: 1px rgba(102, 102, 102, 0.5);
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;
    font-size: 50px;
    font-weight: 700;
    position: absolute;
    right: 30px;
    top: -50px;
  }

  .team-box-items .service-content .number:hover {
    -webkit-text-stroke: 1px rgba(245, 91, 31, 0.5);
  }

  .team-box-items .service-content h3 {
    margin-bottom: 15px;
  }

  .team-box-items .service-content h3 a:hover {
    color: var(--theme);
  }

  .team-box-items .service-content p {
    border-bottom: 1px solid var(--border);
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .team-box-items:hover .service-content .number {
    -webkit-text-stroke: 1px rgba(245, 91, 31, 0.5);
  }

  .team-box-items .card-overlay {
    z-index: 10; /* Ensure overlay is above other elements */
  }
`;

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".array-next",
    prevEl: ".array-prev",
  },
  breakpoints: {
    1399: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Oliver Aguilerra",
    role: "Product Manager",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    bio: "Vincent Van Gogh’s most popular painting, The Starry Night.",
  },
  {
    id: 2,
    name: "Marta Clermont",
    role: "Design Team Lead",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    bio: "Amet I love liquorice jujubes pudding croissant I love pudding.",
  },
  {
    id: 3,
    name: "Anthony Geek",
    role: "CTO, Lorem Inc.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    bio: "Apple pie macaroon toffee jujubes pie tart cookie caramels.",
  },
  {
    id: 4,
    name: "Alice Melbourne",
    role: "Human Resources",
    image: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
  },
  {
    id: 5,
    name: "Alice Melbourne",
    role: "Human Resources",
    image: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    bio: "Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.",
  },
];

export default function TeamSlider() {
  return (
    <>
      <style>{customStyles}</style>
      <section className="service-section fix section-padding bg-cover">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Our Team
            </h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="swiper team-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {teamMembers.map((member, index) => (
                <SwiperSlide key={member.id} className="swiper-slide">
                  <Link href={`/team-details/${member.id}`} className="card-hover">
                    <div className="team-box-items">
                      <div className="service-thumb">
                        <img
                          src={member.image}
                          className="card-img-top"
                          alt={member.name}
                        />
                        <div className="icon">
                          <i className="fa-solid fa-user" /> {/* Generic user icon; replace with specific icons if needed */}
                        </div>
                      </div>
                      <div className="service-content">
                        <h2 className="number">{String(index + 1).padStart(2, "0")}</h2>
                        <h3>
                          <span>{member.name}</span>
                        </h3>
                        <p>{member.bio}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Navigation Buttons */}
            <div className="array-button d-flex justify-content-center mt-4">
              <button className="array-prev h1p me-3">
                <i className="fa-regular fa-arrow-left-long" />
              </button>
              <button className="array-next h1n">
                <i className="fa-regular fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}