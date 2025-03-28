import React from 'react';

const Journey = () => {
  return (
    <>
        <div className="section-title text-center">
            <h6 className="wow fadeInUp">
                <i className="fa-regular fa-arrow-left-long" />
                Milestones & Achivements
                <i className="fa-regular fa-arrow-right-long" />
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Our Journey
            </h2>
        </div>
        <img
          className="journey" // Reuse the same class for styling consistency
          src="/assets/img/journey/JDM_Timeline.gif"
          alt="Journey Timeline"
        />
    </>
  );
};

export default Journey;