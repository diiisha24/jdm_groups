'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return <>
		<div className="mobile-menu fix mb-3 mean-container">
			<div className="mean-bar">
				<Link href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
					<span>
						<span>
							<span />
						</span>
					</span>
				</Link>
				<nav className="mean-nav">
					<ul>
						<li className="has-dropdown active menu-thumb">
							<Link href="/">
								Home
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu has-homemenu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
								<li>
									<div className="homemenu-items">
										<div className="homemenu">
											<div className="homemenu-thumb">
												<img src="assets/img/header/home-1.jpg" alt="img" />
												<div className="demo-button">
													<Link href="/" className="theme-btn">
														Multi Page
													</Link>
													<Link href="/index-one-page" className="theme-btn">
														One Page
													</Link>
												</div>
											</div>
											<div className="homemenu-content text-center">
												<h4 className="homemenu-title">
													Home 01
												</h4>
											</div>
										</div>
										<div className="homemenu">
											<div className="homemenu-thumb mb-15">
												<img src="assets/img/header/home-2.jpg" alt="img" />
												<div className="demo-button">
													<Link href="/index-2" className="theme-btn">
														Multi Page
													</Link>
													<Link href="/index-two" className="theme-btn">
														One Page
													</Link>
												</div>
											</div>
											<div className="homemenu-content text-center">
												<h4 className="homemenu-title">
													Home 02
												</h4>
											</div>
										</div>
									</div>
								</li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(1)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li className="has-dropdown active d-xl-none">
							<Link href="/team" className="border-none">
								Home
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
								<li><Link href="/">Home 01</Link></li>
								<li><Link href="/index-2">Home 02</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(2)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li className="has-dropdown">
							<Link href="/news">
								Pages
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
								<li><Link href="/team">Our Team</Link></li>
								<li><Link href="/team-details">Team Details</Link></li>
								<li><Link href="/pricing">Pricing</Link></li>
								<li><Link href="/faq">Faq's</Link></li>
								<li><Link href="/404">404 Page</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(3)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li>
							<Link href="/service-details">
								Services
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
								<li><Link href="/service">Services</Link></li>
								<li><Link href="/service-details">Service Details</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(4)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li>
							<Link href="/project">
								Projects
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
								<li><Link href="/project">Projects</Link></li>
								<li><Link href="/project-details">Project Details</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(5)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li>
							<Link href="/news">
								Blog
								<i className="fa-regular fa-plus" />
							</Link>
							<ul className="submenu" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
								<li><Link href="/news-grid">Blog Grid</Link></li>
								<li><Link href="/news">Blog Standard</Link></li>
								<li><Link href="/news-details">Blog Details</Link></li>
							</ul>
							<a className="mean-expand" onClick={() => handleAccordion(6)} style={{ fontSize: 18 }}>
								<i className="far fa-plus" /></a>
						</li>
						<li className="mean-last">
							<Link href="/contact">Contact Us</Link>
						</li>
					</ul>
				</nav></div></div>

	</>
}
