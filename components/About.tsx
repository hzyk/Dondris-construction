
import React from 'react';
import { motion } from 'framer-motion';
import { coreValues } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase">
    {children}
  </h2>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl font-bold text-yellow mb-2 uppercase tracking-wider">
    {children}
  </h3>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-deep-blue">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionTitle>About <span className="text-yellow">Us</span></SectionTitle>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-5 gap-12 items-center"
            variants={containerVariants}
          >
            <div className="md:col-span-3">
              <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 leading-relaxed">
                Dondris Construction and Projects is a proudly South African construction company that provides high-quality, cost-effective building and project management services across residential, commercial, and industrial sectors. Established in 2025, we’ve built a solid reputation for delivering reliable, timely, and innovative construction solutions. Our team of experienced engineers, project managers, and skilled artisans are committed to excellence, safety, and sustainability in every project we undertake.
              </motion.p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                  <SubHeading>Our Vision</SubHeading>
                  <p className="text-gray-300">To be one of the most trusted and innovative construction companies in Africa, known for delivering exceptional quality and sustainable solutions.</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <SubHeading>Our Mission</SubHeading>
                  <p className="text-gray-300">To provide high-quality, reliable, and cost-effective construction services that exceed client expectations while upholding the highest standards of safety, integrity, and craftsmanship.</p>
                </motion.div>
              </div>
            </div>
            <motion.div variants={itemVariants} className="md:col-span-2 bg-dark-navy p-6 shadow-2xl">
              <div className="w-full h-64 md:h-80 bg-cover bg-center mb-4" style={{backgroundImage: "url('https://picsum.photos/400/500?random=2')"}}></div>
              <h4 className="text-2xl font-bold text-white">Ndabenhle Nhlakanipho Madondo</h4>
              <p className="text-yellow text-sm uppercase">Director</p>
              <p className="text-gray-400 mt-2 text-sm italic">"A seasoned construction industry professional with over 10 years of hands-on experience in project management, construction operations, and business leadership."</p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SubHeading>Our Core Values</SubHeading>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8"
            variants={containerVariants}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-blue/50 p-6 flex flex-col items-center justify-center aspect-square transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: '#003566', boxShadow: '0 0 15px #FFC300' }}
              >
                <value.icon className="text-yellow text-5xl mb-3" />
                <h4 className="text-lg font-semibold text-center uppercase">{value.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
