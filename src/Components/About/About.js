import React from 'react';

import AboutImage from '../../Images/about/about.jpg';

const About = () => {
  return (
    <div className='container mt-2 mb-5 text-center bg-light'>
      <img src={AboutImage} className='img-fluid w-25 rounded-circle' alt='' />
      <h2 className='pt-2 text-dark fw-bold'>Anik Das</h2>
      <p>
        My goal is to become a full-stack web developer. To achieve my goal I
        have already started working on it. Currently, I am doing a web
        development course in programming hero. I am in a beginner-level
        learning phase. I will work hard and practice more to achieve my goal.
      </p>
    </div>
  );
};

export default About;
