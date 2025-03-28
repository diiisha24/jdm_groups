import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer
        className="footer-section bg-cover bg-cover"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="container">
          <div className="contact-info-area">
            {/* <Link
              href="/"
              className="logo-img wow fadeInUp"
              data-wow-delay=".2s"
            > */}
              {/* <img src="assets/img/logo/black-logo.svg" alt="img" /> */}
              {/* <img src="assets/img/logo/black-logo.jpg" alt="img" />
            </Link> */}
            <div 
              className="contact-info-items wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="icon">
                <i className="fa-sharp fa-solid fa-location-dot" />
              </div>
              <div className="content">
                <p>Office location</p>
                <h3>A-75, New Delhi - 1100037, India</h3>
              </div>
            </div>
            <div
              className="contact-info-items wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="content">
                <p>send email</p>
                <h3>
                <Link href="mailto:info@jdmgroups.com">info@jdmgroups.com</Link>
                </h3>
              </div>
            </div>
            <div
              className="contact-info-items wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="icon">
                <i className="fa-solid fa-phone-volume" />
              </div>
              <div className="content">
                <p>call emergency</p>
                <h3>
                <Link href="tel:+9149707070">+91-49707070-100 Lines</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="footer-widgets-wrapper">
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>About Company</h5>
                  </div>
                  <div className="footer-content">
                    <p>
                    Our mission is to provide operational excellence, competitive cost control and visibility to our customers who are globally sourcing and distributing in an integrated supply chain environment.
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <Link href="https://www.facebook.com/profile.php?id=100090951694492">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="https://x.com/home?lang=en">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="https://www.instagram.com/we_jdm/">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link href="https://www.linkedin.com/company/27983246" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Quick Link</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="about">
                        <i className="fa-solid fa-chevrons-right" />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="service">
                        <i className="fa-solid fa-chevrons-right" />
                       Services
                      </Link>
                    </li>
                    <li>
                      <Link href="contact">
                        <i className="fa-solid fa-chevrons-right" />
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="news">
                        <i className="fa-solid fa-chevrons-right" />
                        Blog &amp; News
                      </Link>
                    </li>
                    <li>
                      <Link href="faq">
                        <i className="fa-solid fa-chevrons-right" />
                        FAQ’S
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Our Services</h5>
                  </div>
                  {/* <ul className="list-area">
                    <li>
                      <Link href="service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        What We Do
                      </Link>
                    </li>
                    <li>
                      <Link href="service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Request a Freight
                      </Link>
                    </li>
                    <li>
                      <Link href="service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Track &amp; Trace
                      </Link>
                    </li>
                    <li>
                      <Link href="service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Rail Freight
                      </Link>
                    </li>
                    <li>
                      <Link href="service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Maritime Transport
                      </Link>
                    </li>
                  </ul> */}
                  <ul className="list-area">
                    <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Air Freight Forwarding
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Ocean Freight Forwarding
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Rail Freight
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Road Transportation
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Customs Brokerage
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Project Management
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Courier Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Warehouse
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Packers & Movers
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Other Services
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              {/* <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Instagram</h5>
                  </div>
                  <div className="footer-gallery">
                    <div className="gallery-wrap">
                      <div className="gallery-item">
                        <div className="thumb">
                          <Link
                            href="assets/img/footer/gallery-1.jpg"
                            className="img-popup"
                          >
                            <img
                              src="assets/img/footer/gallery-1.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus" />
                            </div>
                          </Link>
                        </div>
                        <div className="thumb">
                          <Link
                            href="assets/img/footer/gallery-2.jpg"
                            className="img-popup"
                          >
                            <img
                              src="assets/img/footer/gallery-2.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus" />
                            </div>
                          </Link>
                        </div>
                        <div className="thumb">
                          <Link
                            href="assets/img/footer/gallery-3.jpg"
                            className="img-popup"
                          >
                            <img
                              src="assets/img/footer/gallery-3.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="gallery-item">
                        <div className="thumb">
                          <Link
                            href="assets/img/footer/gallery-4.jpg"
                            className="img-popup"
                          >
                            <img
                              src="assets/img/footer/gallery-4.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus" />
                            </div>
                          </Link>
                        </div>
                        <div className="thumb">
                          <Link
                            href="assets/img/footer/gallery-5.jpg"
                            className="img-popup"
                          >
                            <img
                              src="assets/img/footer/gallery-5.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus" />
                            </div>
                          </Link>
                        </div>
                        <div className="thumb">
                          <Link
                            href="assets/img/footer/gallery-6.jpg"
                            className="img-popup"
                          >
                            <img
                              src="assets/img/footer/gallery-6.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>JDM Group</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/company-details">
                        <i className="fa-solid fa-chevrons-right" />
                        JDM Worldwide Freight Solutions Pvt. Ltd.
                      </Link>
                    </li>
                    <li>
                      <Link href="/company-details">
                        <i className="fa-solid fa-chevrons-right" />
                        JDM Cargo Planners Pvt. Ltd.
                      </Link>
                    </li>
                    <li>
                      <Link href="/company-details">
                        <i className="fa-solid fa-chevrons-right" />
                        JDM Express Pvt. Ltd.
                      </Link>
                    </li>
                    <li>
                      <Link href="/company-details">
                        <i className="fa-solid fa-chevrons-right" />
                        Arrow Transport Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/company-details">
                        <i className="fa-solid fa-chevrons-right" />
                        AS Transport Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © All Copyright {new Date().getFullYear()} by{" "}
              <Link href="/">JDM Group</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
