"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";
// import "swiper/css"; // Uncomment if using Swiper CSS directly
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },
};

// Default news data as fallback
const defaultNewsItems = [
  {
    id: 1,
    image: "assets/img/news/post-1.jpg",
    author: "Admin",
    date: "09 July 2024",
    category: "Building",
    title: "Attentive was born in 2015 help sales teams",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of xyz Lorem Ipsum, you need to be sure there isn't anything embarrassing",
  },
  {
    id: 2,
    sliderImages: [
      "assets/img/news/post-1.jpg",
      "assets/img/news/post-2.jpg",
      "assets/img/news/post-3.jpg",
    ],
    author: "Admin",
    date: "09 July 2024",
    category: "Building",
    title: "Rules for Security on Construction Sites",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of xyz Lorem Ipsum, you need to be sure there isn't anything embarrassing",
  },
  {
    id: 3,
    image: "assets/img/news/post-3.jpg",
    videoId: "Cn4G2lZ_g2I",
    author: "Admin",
    date: "09 July 2024",
    category: "Building",
    title: "Norms for Security on Construction Sites",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of xyz Lorem Ipsum, you need to be sure there isn't anything embarrassing",
  },
];

export default function NewsList() {
  const [isOpen, setOpen] = useState(false);
  const [newsItems, setNewsItems] = useState(defaultNewsItems); // Initialize with default news items
  const [currentVideoId, setCurrentVideoId] = useState("Cn4G2lZ_g2I"); // Default video ID

  // Fetch news data from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchNewsData = async () => {
      try {
        const response = await fetch(`${apiUrl}/news/api/news/`);
        const data = await response.json();
        // Assuming the API returns an array of news objects
        if (data && Array.isArray(data) && data.length > 0) {
          const fetchedNewsItems = data.map((item, index) => ({
            id: item.id || index + 1,
            image: item.image || "assets/img/news/default.jpg",
            sliderImages: item.sliderImages || null, // Array for Swiper, if provided
            videoId: item.videoId || null,
            author: item.author || "Admin",
            date: item.date || "Unknown Date",
            category: item.category || "Uncategorized",
            title: item.title || "Untitled News",
            description: item.description || item.content || "No description available.",
          }));
          setNewsItems(fetchedNewsItems);
          // Set initial video ID from the first item with a video
          const videoItem = fetchedNewsItems.find((item) => item.videoId);
          if (videoItem) setCurrentVideoId(videoItem.videoId);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
        // Fallback to defaultNewsItems (already set)
      }
    };

    fetchNewsData();
  }, []); // Runs once on mount

  return (
    <>
      <section className="news-standard fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="news-standard-wrapper">
                {newsItems.map((item) => (
                  <div key={item.id} className="news-standard-items">
                    {item.sliderImages ? (
                      <>
                        <div className="array-button">
                          <button className="array-prev h1p">
                            <i className="fa-regular fa-arrow-left-long" />
                          </button>
                          <button className="array-next h1n">
                            <i className="fa-regular fa-arrow-right-long" />
                          </button>
                        </div>
                        <div className="swiper news-post-slider">
                          <Swiper {...swiperOptions} className="swiper-wrapper">
                            {item.sliderImages.map((slideImage, index) => (
                              <SwiperSlide key={index} className="swiper-slide">
                                <div className="news-thumb">
                                  <img src={slideImage} alt={item.title} />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </>
                    ) : (
                      <div className="news-thumb">
                        <img src={item.image} alt={item.title} />
                        {item.videoId && (
                          <div className="video-box">
                            <a
                              onClick={() => {
                                setCurrentVideoId(item.videoId);
                                setOpen(true);
                              }}
                              className="video-btn video-popup"
                            >
                              <i className="fas fa-play" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="news-content">
                      <ul className="date-list">
                        <li>
                          <i className="fa-regular fa-user" />
                          {item.author}
                        </li>
                        <li>
                          <i className="fa-regular fa-calendar-days" />
                          {item.date}
                        </li>
                        <li>
                          <i className="fa-regular fa-tag" />
                          {item.category}
                        </li>
                      </ul>
                      <h3>
                        <Link href="/news-details">{item.title}</Link>
                      </h3>
                      <p>{item.description}</p>
                      <div className="news-button">
                        <Link href="/news-details" className="theme-btn mt-4">
                          read more <i className="fa-regular fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  className="page-nav-wrap wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <ul>
                    <li>
                      <Link className="page-numbers icon" href="#">
                        <i className="fa-solid fa-arrow-left" />
                      </Link>
                    </li>
                    <li>
                      <Link className="page-numbers" href="#">
                        01
                      </Link>
                    </li>
                    <li>
                      <Link className="page-numbers" href="#">
                        02
                      </Link>
                    </li>
                    <li>
                      <Link className="page-numbers" href="#">
                        03
                      </Link>
                    </li>
                    <li>
                      <Link className="page-numbers icon" href="#">
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Search</h3>
                  </div>
                  <div className="search-widget">
                    <form action="#">
                      <input type="text" placeholder="Search here" />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>
                {/* <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      <li>
                        <Link href="/news-details">Cargo Insurance </Link>{" "}
                        <span>5</span>
                      </li>
                      <li>
                        <Link href="/news-details">Logistic Strategy</Link>{" "}
                        <span>3</span>
                      </li>
                      <li className="active">
                        <Link href="/news-details">Our Delivery </Link>
                        <span>4</span>
                      </li>
                      <li>
                        <Link href="/news-details">Shipment Solutions </Link>{" "}
                        <span>2</span>
                      </li>
                      <li>
                        <Link href="/news-details">Security System</Link>{" "}
                        <span>3</span>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Recent Post</h3>
                  </div>
                  <div className="recent-post-area">
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/news/pp2.jpg" alt="img" />
                      </div>
                      <div className="recent-content">
                        <ul>
                          <li>
                            <i className="fa-solid fa-calendar-days" />
                            09 July 2024
                          </li>
                        </ul>
                        <h6>
                          <Link href="/news-details">
                            Investing in Freight Broker Training
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/news/pp3.jpg" alt="img" />
                      </div>
                      <div className="recent-content">
                        <ul>
                          <li>
                            <i className="fa-solid fa-calendar-days" />
                            09 July 2024
                          </li>
                        </ul>
                        <h6>
                          <Link href="/news-details">
                            Ways to Improve Your Last-Mile Strategy
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img src="assets/img/news/pp4.jpg" alt="img" />
                      </div>
                      <div className="recent-content">
                        <ul>
                          <li>
                            <i className="fa-solid fa-calendar-days" />
                            09 July 2024
                          </li>
                        </ul>
                        <h6>
                          <Link href="/news-details">
                            How to Recruit and Retain Drivers
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Popular Tag</h3>
                  </div>
                  <div className="news-widget-categories">
                    <div className="tagcloud">
                      <Link href="/news-details">transport</Link>
                      <Link href="/news-details">cargo</Link>
                      <Link href="/news-details">engineering</Link>
                      <Link href="/news-details">Design</Link>
                      <Link href="/news-details">engineering</Link>
                      <Link href="/news-details">delivery</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={currentVideoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
}