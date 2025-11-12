
import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks, WHATSAPP_BASE_URL } from '../constants';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-navy text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase">
            Let's Build Your <span className="text-yellow">Dream Project</span> Together
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Reach out to us for reliable, affordable, and innovative construction solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={itemVariants} className="flex items-start mb-6">
              <FaMapMarkerAlt className="text-yellow text-3xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-gray-400">Johannesburg, South Africa (Placeholder)</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start mb-6">
              <FaPhone className="text-yellow text-3xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <a href="tel:+27786151390" className="text-gray-400 hover:text-yellow transition-colors">+27 786 151 390</a>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start mb-6">
              <FaEnvelope className="text-yellow text-3xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <a href="mailto:info@dondrisconstruction.co.za" className="text-gray-400 hover:text-yellow transition-colors">info@dondrisconstruction.co.za</a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center bg-yellow text-dark-navy font-bold py-3 px-8 text-lg uppercase tracking-wider transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="mr-3 text-2xl"/>
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow text-3xl transition-transform duration-300"
                    whileHover={{ scale: 1.2, y: -5 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="h-80 md:h-full w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.239863486015!2d28.0321853150293!3d-26.22143098343058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950897223e7a0b%3A0x3565452a2df25b2!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert-[90%] contrast-[0.8]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
