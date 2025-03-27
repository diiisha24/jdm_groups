"use client"
// import "swiper/css"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 500,
	loop: true,
	autoplay: {
		delay: 500,
		disableOnInteraction: false,
	},
	breakpoints: {
		1199: {
			slidesPerView: 5,
		},
		991: {
			slidesPerView: 4,
		},
		767: {
			slidesPerView: 3,
		},
		575: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		},
	},
}

export default function Brand1({ alt }) {
	return (
		<>
			<section className={`brand-section fix section-padding ${alt ? "pt-0 section-bg-2" : ""}`}>
				<div className="p-4">
					<div className="swiper brand-slider">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							{/* <SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									<img src="assets/img/brand/brand-logo.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									<img src="assets/img/brand/brand-logo-2.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									<img src="assets/img/brand/brand-logo-3.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									<img src="assets/img/brand/brand-logo-4.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									<img src="assets/img/brand/brand-logo-5.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									<img src="assets/img/brand/brand-logo-5.png" alt="img" />
								</div>
							</SwiperSlide> */}
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-1.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-2.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-3.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-4.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-5.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-6.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-7.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-8.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-9.png" alt="img" />
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="brand-image center">
									{/* <img src="assets/img/brand/brand-logo.png" alt="img" /> */}
									<img src="assets/img/brand/JDM-png-10.png" alt="img" />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
			<style jsx>{`
				.brand-image {
					padding: 15px;
					border: 3px solid var(--theme);
					min-height: 152px;
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
					transition: box-shadow 0.3s ease;
					border-radius: 2px;
				}

				.brand-image:hover {
					box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
				}
			`}</style>
		</>
	)
}
