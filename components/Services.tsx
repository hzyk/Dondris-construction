import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { services, WHATSAPP_BASE_URL } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Services: React.FC = () => {
  const getServiceUrl = (serviceName: string) =>
    `${WHATSAPP_BASE_URL}?text=Hello%20Dondris%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(
      serviceName
    )}%20service.`;

  // Responsive carousel settings (1 image at a time)
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
  };

  // ✅ Make sure images are inside /public/images/projects/
  const projectImages = [
     "WhatsApp Image 2025-11-12 at 08.07.08_17108ffa.jpg",
    "WhatsApp Image 2025-11-12 at 08.07.15_50b7eb22.jpg",
   "WhatsApp Image 2025-11-12 at 08.07.16_8abaaf3e.jpg",
    "WhatsApp Image 2025-11-12 at 08.07.17_6193ee4d.jpg",
    "WhatsApp Image 2025-11-12 at 08.07.17_6193ee4d.jpg",
    "WhatsApp Image 2025-11-12 at 08.07.17_f02ed693.jpg",
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-dark-navy text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-[#0E1A3B] to-dark-navy opacity-95" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* INTRO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase text-yellow">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Dondris Construction & Projects provides a comprehensive range of
            construction solutions — from concept to completion. Our dedicated
            team ensures quality, safety, and reliability in every project we
            deliver across residential, commercial, and industrial sectors.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#0F224D]/70 border border-yellow/20 p-8 flex flex-col items-center justify-between text-center rounded-2xl group transition-all duration-300 hover:bg-[#0F224D] hover:border-yellow/40 hover:shadow-lg hover:shadow-yellow/20"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                <service.icon className="text-yellow text-6xl mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-wider h-14 flex items-center">
                  {service.title}
                </h3>
              </div>
              <a
                href={getServiceUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-transparent border-2 border-yellow text-yellow font-bold py-2 px-6 uppercase tracking-wider rounded-md transition-all duration-300 group-hover:bg-yellow group-hover:text-dark-navy"
              >
                Contact
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* PROJECTS CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-10 text-yellow uppercase">
            Featured Projects
          </h3>

          <div className="relative">
            <Slider {...sliderSettings}>
              {projectImages.map((img, idx) => (
                <div key={idx} className="px-3">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-yellow/30 transition-transform duration-500 hover:scale-[1.02]">
                    <img
                      src={img}
                      alt={`Project ${idx + 1}`}
                      className="w-full h-[450px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <p className="mt-12 text-gray-400 max-w-3xl mx-auto">
            From infrastructure development to modern housing and industrial
            complexes, Dondris Construction continues to redefine excellence in
            every project. We take pride in delivering sustainable, durable, and
            innovative solutions tailored to your vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
