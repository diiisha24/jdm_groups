"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const CareerSection = ({ jobs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const jobParam = searchParams.get("job");
    if (jobParam) {
      const job = jobs.find((j) => j.applyLink.includes(jobParam));
      if (job) {
        setSelectedJob(job);
        setIsModalOpen(true);
      }
    }
  }, [searchParams, jobs]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    router.push("/careers"); // Reset URL
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  // Autofetch department based on job title (example mapping)
  const getDepartmentFromJob = (jobTitle) => {
    if (!jobTitle) return "General";
    if (jobTitle.toLowerCase().includes("logistics")) return "Logistics";
    if (jobTitle.toLowerCase().includes("fleet")) return "Fleet Management";
    return "General"; // Default fallback
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log("Form submitted:", e.target);
    closeModal(); // Close modal after submission
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="career">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            Find Your Career With Us
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Join Our Logistics Family
          </h2>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="job-listings" className="job-listings">
        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="job-card wow fadeInUp"
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
      </section>

      {/* Application Info Section */}
      <section className="application-info">
        <h2>How to Apply</h2>
        <p>
          Interested in joining us? Click "Apply Now" on any job listing or send
          your resume and cover letter to{" "}
          <a href="mailto:careers@jdmlogistics.com">
            careers@jdmlogistics.com
          </a>.
        </p>
      </section>

      {/* Modal */}
      {isModalOpen && selectedJob && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content wow fadeInUp">
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            <h3>Apply for {selectedJob.title}</h3>
            <p>
              Location: {selectedJob.location} | Type: {selectedJob.type}
            </p>
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
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={getDepartmentFromJob(selectedJob.title)}
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
        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
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
        .application-info {
          padding: 60px 0;
          text-align: center;
          background: #f9fafb;
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
        .modal-content h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
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
          cursor: pointer;
          width: fit-content;
        }
        .close-btn:hover {
          color: #333;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #333;
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
        .form-actions {
          display: flex;
          justify-content: flex-end;
        }
        .submit-btn {
          padding: 20px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default CareerSection;