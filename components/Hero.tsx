import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaTools,
  FaShieldAlt,
  FaUsers,
  FaHardHat,
  FaBuilding,
} from "react-icons/fa";
import { WHATSAPP_BASE_URL } from "../constants";

// Animation configs
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
  visible: { opacity: 1, y: 0 },
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const line1 = "Building Tomorrow,";
  const line2 = "Today.";
  const quoteUrl = `${WHATSAPP_BASE_URL}?text=Hello%20Dondris%2C%20I'd%20like%20to%20get%20a%20quote.`;

  return (
    <main className="w-full overflow-hidden bg-dark-navy text-white">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center isolate"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('WhatsApp Image 2025-11-12 at 08.07.17_f02ed693.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-dark-navy/85" />

        <div className="relative z-10 px-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase text-white leading-tight drop-shadow-lg"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {line1.split("").map((char, i) => (
              <motion.span key={char + "-" + i} variants={letter}>
                {char}
              </motion.span>
            ))}
            <br />
            <span className="text-yellow">
              {line2.split("").map((char, i) => (
                <motion.span key={char + "-" + i} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            Dondris Construction and Projects delivers high-quality, reliable, and
            innovative construction and project management services across Africa.
          </motion.p>

          <motion.a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-yellow text-dark-navy font-bold py-3 px-10 text-lg uppercase tracking-wide rounded-xl shadow-lg transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px #FFD60A' }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
          </motion.a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-navy to-transparent"></div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-dark-navy px-6 md:px-16 lg:px-28">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-yellow mb-6">Who We Are</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Dondris Construction and Projects is a proudly South African company built on
            integrity, innovation, and craftsmanship. We provide cost-effective and
            high-quality construction and project management services across residential,
            commercial, and industrial sectors. Our team of engineers, project managers,
            and artisans is dedicated to excellence, safety, and sustainability in every
            build.
          </p>
        </motion.div>
      </section>

      {/* VISION AND MISSION */}
      <section id="vision" className="bg-[#0E1A3B] py-20 px-6 md:px-16 lg:px-28">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-center md:text-left">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
            <h3 className="text-3xl font-bold text-yellow mb-4">Our Vision</h3>
            <p className="text-gray-200">
              To be one of the most trusted and innovative construction companies in
              Africa — known for delivering exceptional quality and sustainable solutions.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
            <h3 className="text-3xl font-bold text-yellow mb-4">Our Mission</h3>
            <p className="text-gray-200">
              To provide reliable, high-quality, and cost-effective construction services
              that exceed client expectations while upholding the highest standards of
              safety, integrity, and craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section id="values" className="py-20 bg-dark-navy px-6 md:px-16 lg:px-28">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-yellow mb-4">Our Core Values</h2>
          <p className="text-gray-300">
            These principles define who we are and guide every project we undertake.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {[
            { icon: FaHandshake, title: "Integrity", text: "Honesty and accountability in every interaction." },
            { icon: FaTools, title: "Quality", text: "Craftsmanship and attention to every detail." },
            { icon: FaShieldAlt, title: "Safety", text: "Creating a culture of prevention and care." },
            { icon: FaUsers, title: "Teamwork", text: "Unified goals across our teams and partners." },
            { icon: FaHardHat, title: "Reliability", text: "We deliver on our promises — on time and within scope." },
            { icon: FaBuilding, title: "Customer Satisfaction", text: "We build long-term trust through communication." },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              className="p-6 bg-[#0F224D] rounded-2xl shadow-md hover:bg-yellow/10 transition"
            >
              <Icon className="text-yellow text-5xl mb-4 mx-auto" />
              <h4 className="text-2xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-300 text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-[#101935] px-6 md:px-16 lg:px-28 text-center">
        <h2 className="text-4xl font-bold text-yellow mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Road Construction",
            "Storm Water Systems",
            "Warehouse Building",
            "Renovations & Refurbishments",
            "Insulation & Roofing",
            "Residential Housing",
            "Plumbing & Electrical",
            "Landscaping & Tiling",
            "Ceilings & Welding Works",
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              className="bg-dark-navy/70 border border-yellow/10 p-6 rounded-2xl hover:border-yellow/40 transition-all"
            >
              <h4 className="text-xl font-semibold mb-2 text-yellow">{service}</h4>
              <p className="text-gray-300 text-sm">
                Professionally executed with precision, reliability, and care.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        id="contact"
        className="relative py-20 text-center bg-yellow text-dark-navy"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092335326-8a6f1d94e891?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build the Future Together
          </h2>
          <p className="text-lg mb-10 text-dark-navy/90">
            Partner with Dondris Construction & Projects for quality, reliability, and
            innovation — your trusted partner in building excellence.
          </p>
          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark-navy text-yellow font-bold py-3 px-10 text-lg uppercase rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
