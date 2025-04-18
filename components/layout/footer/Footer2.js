import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer className="footer-section bg-cover">
        <div className="container">
          <div className="footer-widgets-wrapper">
            <div className="row">
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Quick Link</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/about">
                        <i className="fa-solid fa-chevrons-right" />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <i className="fa-solid fa-chevrons-right" />
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <i className="fa-solid fa-chevrons-right" />
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/news">
                        <i className="fa-solid fa-chevrons-right" />
                        Blog & News
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <i className="fa-solid fa-chevrons-right" />
                        FAQ’S
                      </Link>
                    </li>
                    {/* <li> */}
                      <a
                        className="theme-btn w-100"
                        href="/assets/doc/JDM Profile_2025.pdf"
                        download="JDM Profile_2025.pdf"
                      >
                        Download Profile
                        <i className="fa-regular fa-arrow-right"></i>
                      </a>
                    {/* </li> */}
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Our Services</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/service-details/air-freight">
                        <i className="fa-solid fa-chevrons-right" />
                        Air Freight Forwarding
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/ocean-freight">
                        <i className="fa-solid fa-chevrons-right" />
                        Ocean Freight Forwarding
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/train-freight">
                        <i className="fa-solid fa-chevrons-right" />
                        Rail Freight
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/road-transportation">
                        <i className="fa-solid fa-chevrons-right" />
                        Road Transportation
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/custom-clearance">
                        <i className="fa-solid fa-chevrons-right" />
                        Customs Brokerage
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/courier-services">
                        <i className="fa-solid fa-chevrons-right" />
                        Courier Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details/warehousing">
                        <i className="fa-solid fa-chevrons-right" />
                        Warehousing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-7 wow fadeInUp fst-italic"
                data-wow-delay=".8s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>JDM Group</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a>
                        <i className="fa-solid fa-chevrons-right" />
                        JDM Worldwide Freight Solutions Pvt. Ltd.
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa-solid fa-chevrons-right" />
                        JDM Cargo Planners Pvt. Ltd.
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa-solid fa-chevrons-right" />
                        JDM Express Pvt. Ltd.
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa-solid fa-chevrons-right" />
                        Arrow Transport Service
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa-solid fa-chevrons-right" />
                        AS Transport Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp"
                data-wow-delay="1s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Contact Info</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link target="_blank" href="https://www.google.com/maps?ll=28.545654,77.084271&z=12&t=m&hl=en&gl=JP&mapclient=embed&cid=13113964979499734147">
                        <i className="fa-sharp fa-solid fa-location-dot" />
                        A-75, Road No. 4, Street No. 6, Mahipalpur Extn., New Delhi 110037
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@jdmgroups.com">
                        <i className="fa-solid fa-envelope fst-italic" />
                        info@jdmgroups.com
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+9149707070">
                        <i className="fa-solid fa-phone-volume" />
                        +91-49707070-100 Lines
                      </Link>
                    </li>
                  </ul>
                  <div className="social-icon d-flex align-items-center">
                    <Link href="https://www.facebook.com/profile.php?id=100090951694492">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="https://x.com/JDMGroup">
                      <FontAwesomeIcon icon={faXTwitter}/>
                    </Link>
                    <Link href="https://www.instagram.com/we_jdm/">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/27983246"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © All Copyright {new Date().getFullYear()} by{" "}
              <Link href="/" className="fst-italic">
                JDM Group
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}