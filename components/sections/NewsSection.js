"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// Default news data as fallback
const defaultNewsItems = [
  {
    id: 1,
    image: "assets/img/news/04.jpg",
    category: "Construction",
    date: "07 July 2024",
    title: "Latest Work Was Disapproved by the Supervisor.",
    author: "Admin",
    authorName: "Guy Hawkins",
    authorImage: "assets/img/news/author-1.png",
  },
  {
    id: 2,
    image: "assets/img/news/05.jpg",
    category: "Building",
    date: "07 July 2024",
    title: "Manager Disapproved of the Most Recent Work.",
    author: "Admin",
    authorName: "Guy Hawkins",
    authorImage: "assets/img/news/author-2.png",
  },
  {
    id: 3,
    image: "assets/img/news/06.jpg",
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    author: "Admin",
    authorName: "Guy Hawkins",
    authorImage: "assets/img/news/author-3.png",
  },
  {
    id: 4,
    image: "assets/img/news/07.jpg",
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    author: "Admin",
    authorName: "Guy Hawkins",
    authorImage: "assets/img/news/author-3.png",
  },
  {
    id: 5,
    image: "assets/img/news/08.jpg",
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    author: "Admin",
    authorName: "Guy Hawkins",
    authorImage: "assets/img/news/author-3.png",
  },
  {
    id: 6,
    image: "assets/img/news/09.jpg",
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    author: "Admin",
    authorName: "Guy Hawkins",
    authorImage: "assets/img/news/author-3.png",
  },
];

export default function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Default active index is 2
  const [newsItems, setNewsItems] = useState(defaultNewsItems); // Initialize with default news items

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
            category: item.category || "Uncategorized",
            date: item.date || "Unknown Date",
            title: item.title || "Untitled News",
            author: item.author || "Admin",
            authorName: item.authorName || "Unknown Author",
            authorImage: item.authorImage || "assets/img/news/default-author.png",
          }));
          setNewsItems(fetchedNewsItems);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
        // Fallback to defaultNewsItems (already set)
      }
    };

    fetchNewsData();
  }, []); // Runs once on mount

  const handleIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleIndex(index + 1)} // Adjust index to match 1-based activeIndex
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`.${2 + index * 2}s`}
            >
              <div
                className={
                  activeIndex === index + 1
                    ? "news-box-items mt-0 active"
                    : "news-box-items mt-0"
                }
              >
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                  <img src={item.image} alt={item.title} /> {/* Duplicate image as per original */}
                </div>
                <div className="news-content">
                  <ul className="post-list">
                    <li>{item.category}</li>
                    <li>{item.date}</li>
                  </ul>
                  <h4>
                    <Link href="/news-details">{item.title}</Link>
                  </h4>
                  <div className="author-items">
                    <div className="author-info">
                      <img src={item.authorImage} alt={item.authorName} />
                      <div className="content">
                        <h6>{item.author}</h6>
                        <p>{item.authorName}</p>
                      </div>
                    </div>
                    <Link href="/news-details" className="link-btn">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="page-nav-wrap pt-5 text-center wow fadeInUp"
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
    </section>
  );
}