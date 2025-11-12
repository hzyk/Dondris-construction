
import React from 'react';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-navy border-t border-deep-blue py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-gray-400 hover:text-yellow transition-colors duration-300 uppercase tracking-wider"
            >
              {link.title}
            </a>
          ))}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Dondris Construction & Projects. All Rights Reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Website designed and built with modern technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
