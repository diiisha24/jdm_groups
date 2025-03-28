'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function About2() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<section className="about-section fix section-padding" id="about">
				<div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div>
				<div className="about-shape-5 float-bob-y">
					<img src="assets/img/about/about-shape-5.png" alt="img" />
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
							<div className="col-lg-6">
								<div className="about-image">
									<img
										src="assets/img/about/03.jpg"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/about/04.jpg" alt="img" />
									</div>
									<div className="video-items wow fadeInUp">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											play now
										</a>
									</div>
									<div className="bar-shape">
										<img src="assets/img/about/bar 2.png" alt="img" />
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											<i className="fa-regular fa-arrow-left-long" />
											About Our Company
											<i className="fa-regular fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
											Customer Delight <br /> Is Our Passion
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									Our mission is to provide operational excellence, competitive cost control and visibility to our customers who are globally sourcing and distributing in an integrated supply chain environment.
									</p>
									<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
											<div className="icon-items">
												<div className="icon">
													<i className="fas fa-shipping-timed" />
												</div>
												<h5>Build &amp; Development</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dolly-flatbed-alt" />
												</div>
												<h5>Full-service offering</h5>
											</div>
										</div>
									</div>
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											<i className="fa-solid fa-circle-check" />
											Recognized 24*7 Customs Brokerage
										</li>
										<li>
											<i className="fa-solid fa-circle-check" />
											10+ offices at prominent locations in India
										</li>
										<li>
											<i className="fa-solid fa-circle-check" />
											Dedicated customer support for personalized services
										</li>
										<li>
											<i className="fa-solid fa-circle-check" />
											Comprehensive compliance &amp; regulatory expertise ensuring smooth Logistics Solutions
										</li>
									</ul>

									<div className="about-author">
										<Link
											href="about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />

		</>
	)
}
