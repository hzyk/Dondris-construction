
import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks, socialLinks, WHATSAPP_BASE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-navy border-t border-deep-blue py-10">
      <div className="container mx-auto px-6 text-gray-400">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-white text-xl font-bold mb-2">Dondris Construction & Projects</h3>
            <p className="text-sm mb-2">Reliable building, renovation and infrastructure services in Johannesburg and surrounding areas.</p>
            <p className="text-sm">Address: Johannesburg, South Africa</p>
            <p className="text-sm">Phone: <a href="tel:+27786151390" className="hover:text-yellow">+27 786 151 390</a></p>
            <p className="text-sm">Email: <a href="mailto:info@dondrisconstruction.co.za" className="hover:text-yellow">info@dondrisconstruction.co.za</a></p>
            <p className="text-xs mt-2 text-gray-500">© {new Date().getFullYear()} Dondris Construction & Projects. All Rights Reserved.</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  className="text-gray-400 hover:text-yellow transition-colors duration-300 uppercase tracking-wider"
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-end items-center space-x-4 mb-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.url}`}
                    className="text-gray-400 hover:text-yellow text-2xl transition-transform duration-200"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow text-dark-navy font-bold py-2 px-4 uppercase tracking-wider hover:opacity-95"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          Website designed and built with modern technology.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
