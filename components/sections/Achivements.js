import Counter1 from "./Counter1";

export default async function Achievements() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://jdm-backend.onrender.com";

  // Default data
  const defaultData = {
    title: "Let's Get Started We are now Transport a dream.",
    description: "It is a long established fact that a reader will be distracted...",
    image1: "https://trastek-nextjs.vercel.app/assets/img/achivements-image.jpg",
    image2: "https://trastek-nextjs.vercel.app/assets/img/achivements-image-2.jpg",
    counterData: [
      { count: 45, suffix: "k+", label: "No of Consignment", icon: "assets/img/icon/11.svg", delay: ".2s" },
      { count: 25, suffix: "k+", label: "No of Team Members", icon: "assets/img/icon/12.svg", delay: ".4s" },
      { count: 2, suffix: "+", label: "BOE Entries", icon: "assets/img/icon/13.svg", delay: ".2s" },
      { count: 2.4, suffix: "k+", label: "Customers Served", icon: "assets/img/icon/14.svg", delay: ".4s" },
    ],
  };

  let achievementsData = defaultData;

  try {
    const response = await fetch(`${apiUrl}/home/api/Achievements`, { cache: "no-store" });
    const data = await response.json();
    const achievement = data.Achievements[0]; // Take the first item from "Achievements" array

    if (achievement && typeof achievement === "object") {
      achievementsData = {
        title: achievement.Heading || defaultData.title,
        description: achievement.Paragraph || defaultData.description,
        image1: achievement.Image ? `${apiUrl}${achievement.Image}` : defaultData.image1,
        image2: defaultData.image2, // No second image in API, use default
        counterData: [
          {
            count: achievement.No_of_Consignment || defaultData.counterData[0].count,
            suffix: achievement.No_of_Consignment >= 1000 ? "k+" : "",
            label: "No of Consignment",
            icon: defaultData.counterData[0].icon,
            delay: ".2s",
          },
          {
            count: achievement.No_of_TeamMembers || defaultData.counterData[1].count,
            suffix: achievement.No_of_TeamMembers >= 1000 ? "k+" : "",
            label: "No of Team Members",
            icon: defaultData.counterData[1].icon,
            delay: ".4s",
          },
          {
            count: achievement.BOE_Entries || defaultData.counterData[2].count,
            suffix: achievement.BOE_Entries >= 1000 ? "k+" : "+",
            label: "BOE Entries",
            icon: defaultData.counterData[2].icon,
            delay: ".2s",
          },
          {
            count: achievement.Customers_Served || defaultData.counterData[3].count,
            suffix: achievement.Customers_Served >= 1000 ? "k+" : "",
            label: "Customers Served",
            icon: defaultData.counterData[3].icon,
            delay: ".4s",
          },
          {
            count: achievement.Fleets_Size || 0, // No default for this, assume 0 if not present
            suffix: achievement.Fleets_Size >= 1000 ? "k+" : "",
            label: "Fleets Size",
            icon: "assets/img/icon/14.svg", // Reuse an icon since no specific one provided
            delay: ".4s",
          },
        ],
      };
    }
  } catch (error) {
    console.error("Error fetching achievements data:", error);
    // Fall back to defaultData (already set)
  }

  return (
    <section
      className="achivements-section fix section-bg-2 section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/achivements-bg-shape.png")' }}
    >
      <div className="container">
        <div className="achivements-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="achivements-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long" />
                    ACHIVEMENTS
                    <i className="fa-regular fa-arrow-right-long" />
                  </h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    {achievementsData.title}
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp">
                  {achievementsData.description}
                </p>
                <Counter1 counterData={achievementsData.counterData} />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="achivements-image">
                <img src={achievementsData.image1} alt="Achievements Image" />
                <div className="achivements-image-2 float-bob-y">
                  <img src={achievementsData.image2} alt="Achievements Image 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}