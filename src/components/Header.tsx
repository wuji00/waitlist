import React from 'react';
import { Rocket } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Rocket className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-800">StartupX</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-indigo-600">About</a></li>
            <li><a href="#waitlist" className="text-gray-600 hover:text-indigo-600">Join Waitlist</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;