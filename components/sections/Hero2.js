"use client"
import { useState, useEffect, useRef } from 'react';
import TaglineBanner from "../layout/tagline_banner";

export default function Hero2() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/assets/img/hero/intro.mp4"); // Default video source
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Fetch video source from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchVideoData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/api/banners/`);
        const data = await response.json();
        // Assuming the API returns an object or array with a video URL field
        if (data && data.length > 0 && data[0].video) {
          setVideoSrc(data[0].video); // Adjust based on actual API response structure
        }
      } catch (error) {
        console.error("Error fetching hero banner data:", error);
        // Fallback to default video source (already set)
      }
    };

    fetchVideoData();
  }, []); // Runs once on mount

  // Handle video visibility and playback
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Video is visible when section is at least 10% in viewport
        setIsVisible(entry.isIntersecting);
        
        // Play/pause video based on visibility
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Adjust as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-section fix hero-2">
      <div className="video-container fixed">
        <video 
          ref={videoRef}
          className="hero-video"
          autoPlay={isVisible}
          loop
          muted
          playsInline
          style={{ display: isVisible ? 'block' : 'none' }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <TaglineBanner />
    </section>
  );
}