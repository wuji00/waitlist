import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          At StartupX, we're on a mission to empower businesses of all sizes with cutting-edge tools and technologies. 
          We believe that by simplifying complex workflows and fostering collaboration, we can help companies achieve 
          their full potential and drive innovation in their industries.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;