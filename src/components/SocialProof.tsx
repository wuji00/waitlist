import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'StartupX has transformed the way we operate. It\'s a game-changer!'
  },
  {
    name: 'Jane Smith',
    role: 'CTO, InnovateCo',
    content: 'The efficiency gains we\'ve seen with StartupX are truly remarkable.'
  }
];

const partnerLogos = [
  'https://via.placeholder.com/150x50?text=Partner1',
  'https://via.placeholder.com/150x50?text=Partner2',
  'https://via.placeholder.com/150x50?text=Partner3'
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-800 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-8">
          {partnerLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Partner ${index + 1}`} className="h-12" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;