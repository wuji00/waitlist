import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Revolutionize Your Workflow</h1>
        <p className="text-xl mb-8">StartupX is the all-in-one platform that streamlines your business operations.</p>
        <a href="#waitlist" className="bg-white text-indigo-700 py-3 px-8 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
          Join the Waitlist
        </a>
      </div>
    </section>
  );
};

export default Hero;