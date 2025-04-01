"use client";
import React from "react";
import Link from "next/link";

const CareerSection = ({ jobs }) => {
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
              <Link
                href={job.applyLink}
                className="theme-btn wow fadeInUp"
                data-wow-delay=".4s"
              >
                Apply Now
                <i className="fa-regular fa-arrow-right" />
              </Link>
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

      {/* Inline Styles */}
      <style jsx>{`
        .hero {
          padding: 60px 0;
          background: #f9fafb;
        }
        .job-listings {
          padding: 60px 0;
        }
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
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        .job-card:hover {
          transform: translateY(-5px);
        }
        .job-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .job-card p {
          color: #666;
          margin-bottom: 15px;
        }
        .theme-btn {
          display: inline-block;
          padding: 10px 20px;
          background: #f59e0b;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          transition: background 0.3s;
        }
        .theme-btn:hover {
          background: #d97706;
        }
        .application-info {
          padding: 60px 0;
          text-align: center;
          background: #f9fafb;
        }
        .application-info h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .application-info p {
          max-width: 800px;
          margin: 0 auto;
          color: #666;
        }
        .application-info a {
          color: #f59e0b;
          text-decoration: none;
        }
        .application-info a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default CareerSection;