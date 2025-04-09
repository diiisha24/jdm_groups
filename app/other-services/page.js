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
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            Beyond Logistics
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Other Services
          </h2>
        </div>
        {/* Tab Section */}
      <div className="services-section">
        <div className="container">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button wow fadeInUp ${activeTab === tab.id ? "active" : ""}`}
                data-wow-delay=".2s"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="content-box wow fadeInUp" data-wow-delay=".4s">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
      </section>

      

      {/* Inline Styles */}
      <style jsx>{`
        .hero {
          padding: 60px 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 30px;
        }
        .tab-button {
          padding: 12px 25px;
          font-size: 16px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          color: #333;
        }
        .tab-button:hover {
          background: #f59e0b; /* Trastek orange */
          color: #fff;
          border-color: #f59e0b;
        }
        .tab-button.active {
          background: #f59e0b;
          color: #fff;
          border-color: #f59e0b;
        }
        .content-box {
          background: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-height: 200px;
        }
        .content-box p {
          margin: 0 0 15px;
          font-size: 16px;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </Layout>
  );
};

export default OtherServices;