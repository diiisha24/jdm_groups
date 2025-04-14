"use client";
import React, { useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout/Layout";

const OtherServices = () => {
  const [activeTab, setActiveTab] = useState("consultancy"); // Default tab

  // Define tab data with headings and content
  const tabs = [
    {
      id: "consultancy",
      title: "Consultancy",
      content: (
        <>
          <p>
            JDM’s decades of experience as a successful freight forwarder puts us in the unique position to advise and consult executives in businesses seeking to enter or expand their presence in global trade.
          </p>
          <p>
            The regulatory and logistical needs of each company are unique, and we take pride in delivering the kind of custom-tailored services that are difficult to find in larger corporations. Take the first step towards success in the world of international freight forwarding by contacting our consulting division today.
          </p>
          <p>
            We are equipped with a knowledgeable team to provide Consultancy to our customers in SVB / EDD (submission, finalization), PSV, Offshore, HSS, Turnkey project movements, policies/notifications, etc., in a very professional and cost-effective manner.
          </p>
        </>
      ),
    },
    {
      id: "svb",
      title: "Special Valuation Branch (SVB)",
      content: (
        <p>
          Special Valuation Branch (SVB) is a Branch of the Custom House, specializing in investigating the transactions involving relationships between the supplier and the importer and certain other special features like Technical Collaboration between the parties, etc.
        </p>
      ),
    },
    {
      id: "drawback",
      title: "Drawback",
      content: (
        <>
          <p>
            A frequently asked question is whether or not JDM can recoup “drawback,” or duty already paid to Customs for exported cargo. The answer is “whenever possible!”
          </p>
          <p>
            Our staff is well aware that this is an important consideration for many importers/exporters, which is why we specialize in duty refunds for goods that have been marked for export following a period within the U.S. commerce system. If your business needs include drawback claims for manufactured, rejected, or unused merchandise, the need for accelerated drawback payment, waiver of prior notice of intent to export, or one-time waiver of prior notice of intent to export, JDM’s team will bring their expertise to bear on the issue and generate the best possible results.
          </p>
        </>
      ),
    },
    {
      id: "cargo-insurance",
      title: "Cargo Insurance",
      content: (
        <>
          <p>
            Although JDM does everything in our power to minimize the possibility of damage or loss of cargo in transit, the chance of an impossible-to-foresee disaster can never be completely removed.
          </p>
          <p>
            We encourage our customers to open a Cargo Policy as a way to protect their precious cargo from catastrophic loss. Our rates are competitive and, in the event of a claim, we will work with a government-approved company for settlement. Even the best-laid plans can still go awry.
          </p>
        </>
      ),
    },
    {
      id: "online-filing",
      title: "Online Filing",
      content: (
        <>
          <p>
            We have the facility for online filing & submission of documents to customs, thereby making it very easy for customers to get their work done in a flash. We are making use of advanced (EDI) technology in providing our logistics services.
          </p>
          <p>
            With our best customer service and commitment, we have made a good relationship with our customers, and Advanced (EDI) technology is a part of that.
          </p>
        </>
      ),
    },
    {
      id: "sez-stpi",
      title: "SEZ/STPI",
      content: (
        <>
          <p>
            Special Economic Zones (SEZ), Software Technology Parks of India (STPI), Free Trade and Warehousing Zone (FTWZ) are growth engines that can boost manufacturing, augment exports and generate employment. We are sought after for setting up SEZ/STPI/FTWZ units in Economics Zones. Well versed with the intricacies of the SEZ/STPI/FTWZ rules, we stand tall in providing single window solutions to all these units by handling government regulatory authorities.
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Other Services">
      <Head>
        <title>Other Services | JDM Logistics</title>
        <meta
          name="description"
          content="Explore JDM Logistics' additional services including consultancy, SVB, drawback, cargo insurance, and online filing."
        />
      </Head>

      {/* Hero Section */}
      <section className="hero" id="other-services">

        {/* Tab Section with Vertical Menu */}
        <div className="services-section">
          <div className="container">
            <div className="tab-container">
              <ul className="tab-menu wow fadeInUp" data-wow-delay=".2s">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={activeTab === tab.id ? "active" : ""}
                  >
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className="tab-button"
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content wow fadeInUp" data-wow-delay=".4s">
                {tabs.find((tab) => tab.id === activeTab)?.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Styles Inspired by Submenu */}
      <style jsx>{`
        .hero {
          padding: 60px 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .tab-container {
          display: flex;
          flex-direction: row;
          gap: 30px;
          align-items: stretch;
        }
        .tab-menu {
          width: 240px; /* Matches submenu min-width */
          background: var(--white);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Simplified from submenu */
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .tab-menu li {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        .tab-menu li button {
          position: relative;
          z-index: 11;
          font-size: 15px;
          font-weight: 600;
          color: var(--header);
          padding: 11px 25px;
          width: 100%;
          border-bottom: 1px solid #eeeeee;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.4s ease-in-out; /* From submenu */
        }
        .tab-menu li:last-child button {
          border-bottom: none; /* Matches submenu last-child */
        }
        .tab-menu li:hover button,
        .tab-menu li.active button {
          background: var(--theme);
          color: var(--white); /* Matches submenu hover */
        }
        .tab-content {
          flex: 1; /* Takes remaining space */
          background: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .tab-content p {
          margin: 0 0 15px;
          font-size: 16px;
          color: #666;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .tab-container {
            flex-direction: column;
          }
          .tab-menu {
            width: 100%;
          }
          .tab-content {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default OtherServices;