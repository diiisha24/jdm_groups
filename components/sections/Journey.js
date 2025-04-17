'use client'
import React, { useRef, useEffect, useState } from 'react';

const Journey = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Video plays when 50% of it is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div className="journey-section fix" id="journey">
      <div className="section-title text-center">
        {/* <h6 className="wow fadeInUp">
          <i className="fa-regular fa-arrow-left-long" />
          Milestones & Achievements
          <i className="fa-regular fa-arrow-right-long" />
        </h6> */}
        <h2 className="wow fadeInUp" data-wow-delay=".2s">
          Our Journey
        </h2>
      </div>
      <video
        ref={videoRef}
        className="w-full"
        loop
        muted
        playsInline
      >
        <source src="/assets/img/journey/JDM_Timeline.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div >
  );
};

export default Journey;