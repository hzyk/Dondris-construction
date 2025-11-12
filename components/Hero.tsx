
import React from 'react';
import { motion } from 'framer-motion';
import { highlights, WHATSAPP_BASE_URL } from '../constants';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero: React.FC = () => {
  const line1 = "Building Tomorrow,";
  const line2 = "Today.";
  const quoteUrl = `${WHATSAPP_BASE_URL}?text=Hello%20Dondris%2C%20I'd%20like%20to%20get%20a%20quote.`;

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}
      ></div>
      <div className="absolute inset-0 bg-dark-navy/70"></div>
      
      <div className="relative z-10 px-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase text-white leading-tight"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          <br />
          <span className="text-yellow">
            {line2.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Delivering quality, reliability, and innovation across Africa.
        </motion.p>
        
        <motion.a
          href={quoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-yellow text-dark-navy font-bold py-3 px-8 text-lg uppercase tracking-wider transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px #FFD60A' }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Quote
        </motion.a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-dark-navy/50 backdrop-blur-sm p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.5 + index * 0.2 }}
              >
                <item.icon className="text-yellow text-4xl mb-2" />
                <h3 className="text-xl font-bold">{item.title} <span className="font-light">{item.text}</span></h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
