import Link from "next/link"
import Menu from "../Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons"


export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas, isSearch, handleSearch }) {
	return (
		<>
			<header className="header-section-2">
				<div className="container-fluid">
					{/* <div className="header-top-wrapper-2">
						<ul className="contact-list">
							<li>
								<i className="far fa-envelope" />
								<Link href="mailto:info@jdmgroups.com">info@jdmgroups.com</Link>
							</li>
							<li>
								<i className="fa-sharp fa-solid fa-location-dot" />
								{/* 4648 Rocky, New York */}
								{/* A-75, New Delhi - 1100037, India
							</li>
							<li>
								<i className="fa-regular fa-phone" />
								<Link href="tel:+9149707070">+91-49707070-100 Lines</Link>
							</li>
						</ul>
						<div className="top-right">
							<ul className="text-list">
								<li>
									<Link href="contact">Privacy Policy</Link>
								</li>
								<li>
									<Link href="contact">Terms &amp; Conditions</Link>
								</li>
							</ul>
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
					</div> */} 
					<div id="header-sticky" className={`header-2 sticky`}>
						<div className="mega-menu-wrapper">
							<div className="header-main">
								<div className="header-left">
									<div className="logo">
										<Link href="/" className="header-logo">
											{/* <img
												src="assets/img/logo/black-logo.svg"
												alt="logo-img"
											/> */}
											<img src="/assets/img/logo/black-logo.jpg" alt="logo-img" />
										</Link>
									</div>
								</div>
								<div className="header-right d-flex justify-content-end align-items-center">
									<div className="mean__menu-wrapper">
										<div className="main-menu">
											<Menu />
										</div>
									</div>
									<div className="header-button">
										<Link href="contact" className="theme-btn">
											GAT A QUOTE <i className="fa-regular fa-arrow-right" />
										</Link>
									</div>
									<div className="search-item social-links d-none d-xl-flex">
										{/* <a className="search-trigger search-icon" onClick={handleSearch}>
											<i className="fal fa-search" />
										</a> */}
										<Link href="https://www.facebook.com/profile.php?id=100090951694492">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link href="https://x.com/JDMGroup" target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon icon={faXTwitter} />
										</Link>
										<Link href="https://www.instagram.com/we_jdm/">
											<i className="fab fa-instagram" />
										</Link>
										<Link href="https://www.linkedin.com/company/27983246" target="_blank">
											<i className="fab fa-linkedin-in" />
										</Link>
										{/* <div className="social-icon d-flex align-items-center">
										</div> */}
									</div>
									<div className="header__hamburger d-xl-none my-auto">
										<div className="sidebar__toggle" onClick={handleOffCanvas}>
											<i className="fas fa-bars" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
