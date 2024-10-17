import React from 'react';
import { Zap, Layers, Users } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-indigo-600" />,
    title: 'Lightning Fast',
    description: 'Boost your productivity with our intuitive and responsive interface.'
  },
  {
    icon: <Layers className="h-8 w-8 text-indigo-600" />,
    title: 'Fully Integrated',
    description: 'Seamlessly connect all your tools and workflows in one place.'
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    title: 'Team Collaboration',
    description: 'Enhance teamwork with real-time collaboration features.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;