"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// Default news data as fallback
const defaultNewsItems = [
  {
    id: 1,
    category: "Construction",
    date: "07 July 2024",
    title: "Latest Work Was Disapproved by the Supervisor.",
    image: "assets/img/news/04.jpg",
    authorImage: "assets/img/news/author-1.png",
    authorName: "Guy Hawkins",
    delay: ".2s",
  },
  {
    id: 2,
    category: "Building",
    date: "07 July 2024",
    title: "Manager Disapproved of the Most Recent Work.",
    image: "assets/img/news/05.jpg",
    authorImage: "assets/img/news/author-2.png",
    authorName: "Guy Hawkins",
    delay: ".4s",
  },
  {
    id: 3,
    category: "Industry",
    date: "07 July 2024",
    title: "Manager Found Latest Work Unsatisfactory.",
    image: "assets/img/news/06.jpg",
    authorImage: "assets/img/news/author-3.png",
    authorName: "Guy Hawkins",
    delay: ".6s",
  },
];

export default function News2() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [newsItems, setNewsItems] = useState(defaultNewsItems); // Initialize with default news items

  // Fetch blog data from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://jdm-backend.onrender.com";

    const fetchBlogData = async () => {
      try {
        const response = await fetch(`${apiUrl}/blog/api/blogs/`, { cache: "no-store" });
        const data = await response.json();
        const blogs = data.Blog; // Access the "Blog" array from the response

        if (blogs && Array.isArray(blogs) && blogs.length > 0) {
          const fetchedNewsItems = blogs.map((item, index) => ({
            id: item.id || index + 1, // Use API ID or fallback to index
            category: item.tags?.[0] || "Blog", // Use first tag as category, fallback to "Blog"
            date: item.date || "Unknown Date", // No date in API, use placeholder
            title: item.title || "Untitled Blog",
            image: item.image_1 ? `${apiUrl}${item.image_1}` : "assets/img/news/default.jpg", // Use image_1 with base URL
            // authorImage: item.image_2 ? `${apiUrl}${item.image_2}` : "assets/img/news/default-author.png", // Use image_2 as author image
            authorName: "Unknown Author", // No author name in API, use placeholder
            delay: defaultNewsItems[index % defaultNewsItems.length].delay, // Reuse delays
          }));
          setNewsItems(fetchedNewsItems);
          // Set active index to second item (or first if fewer items), 1-based index
          setActiveIndex(Math.min(2, fetchedNewsItems.length) || 1);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        // Fallback to defaultNewsItems (already set)
      }
    };

    fetchBlogData();
  }, []); // Runs once on mount

  const handleIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="news-section fix section-padding pt-0" id="blog">
        <div className="shape-3 float-bob-y">
          <img src="assets/img/news/shape-3.png" alt="img" />
        </div>
        <div className="shape-4 float-bob-y">
          <img src="assets/img/news/shape-4.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="wow fadeInUp">
                <i className="fa-regular fa-arrow-left-long" />
                Blog & News
                <i className="fa-regular fa-arrow-right-long" />
              </h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Latest News & Blog
              </h2>
            </div>
            <Link
              href="news-grid"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              View all post <i className="fa-regular fa-arrow-right" />
            </Link>
          </div>
          <div className="row">
            {newsItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleIndex(item.id)}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div
                  className={
                    activeIndex === item.id ? "news-box-items active" : "news-box-items"
                  }
                >
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                    <img src={item.image} alt={item.title} /> {/* Duplicate image preserved */}
                  </div>
                  <div className="news-content">
                    <ul className="post-list">
                      <li>{item.category}</li>
                      <li>{item.date}</li>
                    </ul>
                    <h4>
                      <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                    </h4>
                    <div className="author-items">
                      <div className="author-info">
                        {/* <img src={item.authorImage} alt={item.authorName} /> */}
                        <div className="content">
                          <h6>Admin</h6>
                          <p>{item.authorName}</p>
                        </div>
                      </div>
                      <Link href={`/news-details/${item.id}`} className="link-btn">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}