
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const toPath = (id: string) => (id === 'home' ? '/' : `/${id}`);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled || isOpen ? 'bg-dark-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl lg:text-3xl font-bold tracking-wider text-white">
          DON<span className="text-yellow">DRIS</span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={toPath(link.id)}
              className={({ isActive }) => `text-white text-lg uppercase tracking-widest relative transition-colors duration-300 hover:text-yellow ${isActive ? 'text-yellow' : ''}`}
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl z-50 relative">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-dark-navy flex flex-col items-center justify-center"
          >
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 text-center"
            >
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={itemVariants}>
                  <NavLink
                    to={toPath(link.id)}
                    onClick={toggleMenu}
                    className="text-3xl uppercase tracking-widest text-white hover:text-yellow transition-colors duration-300"
                  >
                    {link.title}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
