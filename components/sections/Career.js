"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const defaultData = {
  title: "Our Story",
  description:
    `JDM Group was conceptualized by <b>Late Mr. Pahlad Singh</b> in 1978, starting with transportation in the logistics field. Renowned for his steadfast commitments, he built a legacy that JDM proudly continues under the leadership of Group Chairman & Managing Director Mr. Sahil Sehrawat and our dedicated team. JDM has evolved into one of the fastest-growing integrated supply chain logistics enterprises with the following verticals:`,
  image1: "assets/img/about/03.jpg",
  image2: "assets/img/about/04.jpg",
  videoId: "JXMWOmuR1hU",
  features: [
    "JDM Worldwide Freight Solutions Pvt. Ltd. – International Freight Forwarding",
    "JDM Cargo Planners Pvt. Ltd. – Customs Brokerage, Warehousing, Consultancy",
    "JDM Express Pvt. Ltd. – Courier Service",
    "JDM Transport Service – Transportation",
  ],
};

const CareerSection = ({ jobs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isGeneralForm, setIsGeneralForm] = useState(false); // New state to track general form
  const [aboutData] = useState(defaultData);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const jobParam = searchParams.get("job");
    if (jobParam) {
      const job = jobs.find((j) => j.applyLink?.includes(jobParam));
      if (job) {
        setSelectedJob(job);
        setIsModalOpen(true);
        setIsGeneralForm(false);
      }
    }
  }, [searchParams, jobs]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setIsGeneralForm(false);
    router.push("/careers");
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsGeneralForm(false); // Specific job form
    setIsModalOpen(true);
  };

  const handleGeneralApplyClick = () => {
    setSelectedJob(null); // No specific job
    setIsGeneralForm(true); // General form
    setIsModalOpen(true);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const getDepartmentFromJob = (jobTitle) => {
    if (!jobTitle) return "General";
    if (jobTitle.toLowerCase().includes("logistics")) return "Logistics";
    if (jobTitle.toLowerCase().includes("fleet")) return "Fleet Management";
    return "General";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", e.target);
    closeModal();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="career">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title flex flex-column text-left">
              {/* <h6 className="wow fadeInUp">
                <i className="fa-regular fa-arrow-left-long" />
                Find Your Career With Us
                <i className="fa-regular fa-arrow-right-long" />
              </h6> */}
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Join Our Logistics Family
              </h2>
            </div>
            <button
              on  className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
              onClick={handleGeneralApplyClick}
            >
              Apply Now<i className="fa-regular fa-arrow-right" />
            </button>
          </div>
        </div>
        <div id="job-listings" className="job-listings">
          <div className="container">
            <div className="row pt-1 justify-content-center align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="jobs-grid p-3">
                  {jobs.map((job, index) => (
                    <div
                      key={index}
                      className="job-card wow fadeInUp text-left"
                      data-wow-delay={`.${2 + index * 2}s`}
                    >
                      <h3>{job.title}</h3>
                      <p>
                        Location: {job.location} | Type: {job.type}
                      </p>
                      <p>{job.description}</p>
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="theme-btn apply-btn wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        Apply Now
                        <i className="fa-regular fa-arrow-right" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img
                    src={aboutData.image1}
                    alt="About Image"
                    className="wow fadeInLeft"
                    data-wow-delay=".2s"
                  />
                  <div className="about-image-2 wow fadeInUp" data-wow-delay=".4s">
                    <img src={aboutData.image2} alt="About Image 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="application-info py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>How to Apply</h2>
              <p>
                Interested in joining us? Click "Apply Now" on any job listing or send
                your resume and cover letter to{" "}
                <a href="mailto:careers@jdmlogistics.com">
                  careers@jdmlogistics.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content wow fadeInUp">
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            {isGeneralForm ? (
              <>
                <h3>General Application</h3>
                <p>Fill out the form below to apply for a position.</p>
              </>
            ) : (
              <>
                <h3>Apply for {selectedJob.title}</h3>
                <p>
                  Location: {selectedJob.location} | Type: {selectedJob.type}
                </p>
              </>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" required />
              </div>
              <div className="form-group">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  defaultValue={isGeneralForm ? "" : selectedJob?.title}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={getDepartmentFromJob(isGeneralForm ? "" : selectedJob?.title)}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="resume">Upload CV</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn theme-btn">
                  Submit Application
                  <i className="fa-regular fa-arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Inline Styles */}
      <style jsx>{`
        .text-left {
          text-align: left !important;
        }
        .job-card {
          background: #fff;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        .job-card:hover {
          transform: translateY(-5px);
        }
        .apply-btn {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          background: #fff;
          padding: 30px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-height: 80vh;
          overflow-y: auto;
        }
        .close-btn {
          position: sticky;
          top: 10px;
          left: 100%;
          padding: 5px 8px;
          font-size: 24px;
          background: none;
          border: 1px solid #666;
          color: #666;
          width: fit-content;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
        }
        .form-group input[readonly] {
          background: #f5f5f5;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default CareerSection;