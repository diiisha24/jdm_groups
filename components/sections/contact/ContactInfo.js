import Link from "next/link";
import React from "react";

export default function ContactInfo() {
  return (
    <section className="contact-info-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            CONTACT US
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".4s">
            Our Contact Information
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <img src="assets/img/icon/18.svg" alt="img" />
              </div>
              <div className="content">
                <h3>Corporate and Registered Office</h3>
                <p>
                  A-75, Road No. 4, Street No. 6, Mahipalpur Extn., New Delhi 110037
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <img src="assets/img/icon/19.svg" alt="img" />
              </div>
              <div className="content">
                <h3>Contact Info</h3>
                <p>
                  Mobile:{" "}<Link href="tel:+9149707070">+91-49707070-100 Lines
                  </Link>
                  <br />
                  Email:{" "}
                  <Link href="mailto:info@jdmgroups.com">info@jdmgroups.com</Link>
                </p>
              </div>
            </div>
          </div>
          {/* <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <img src="assets/img/icon/20.svg" alt="img" />
              </div>
              <div className="content">
                <h3>Hours of Operation</h3>
                <p>
                  Monday-Saturday : 8:00 - <br /> 9:00 Sunday : Closed
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
