
import React from 'react';
import { motion } from 'framer-motion';
import { services, WHATSAPP_BASE_URL } from '../constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Services: React.FC = () => {
  const getServiceUrl = (serviceName: string) => {
    return `${WHATSAPP_BASE_URL}?text=Hello%20Dondris%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(serviceName)}%20service.`;
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-blue">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white uppercase">
            Our <span className="text-yellow">Services</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-deep-blue/50 p-8 flex flex-col items-center justify-between text-center group transition-all duration-300 hover:bg-deep-blue"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 0 25px rgba(255, 195, 0, 0.5)',
                borderColor: '#FFC300',
              }}
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                <service.icon className="text-yellow text-6xl mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-wider h-14 flex items-center">{service.title}</h3>
              </div>
              <a
                href={getServiceUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-transparent border-2 border-yellow text-yellow font-bold py-2 px-6 uppercase tracking-wider transition-all duration-300 group-hover:bg-yellow group-hover:text-dark-navy"
              >
                Contact
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
