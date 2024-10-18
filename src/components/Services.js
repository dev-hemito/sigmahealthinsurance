import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStethoscope, FaUserMd, FaAmbulance, FaHeartbeat } from 'react-icons/fa';
import Image from 'next/image';

const ServiceCard = ({ title, description, icon: Icon, image }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="relative h-48 mb-6 rounded-lg overflow-hidden group">
      <Image 
        width={500} 
        height={500} 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Icon className="text-white text-5xl" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <motion.a
      href="#"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
      whileHover={{ x: 5 }}
    >
      Learn More <FaArrowRight className="ml-2" />
    </motion.a>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    { 
      title: "Health Check-ups", 
      description: "Comprehensive preventive care to keep you at your best", 
      image: "/service.jpg",
      icon: FaStethoscope
    },
    { 
      title: "Specialist Consultations", 
      description: "Access to top medical experts across various specialties", 
      image: "/service.jpg",
      icon: FaUserMd
    },
    { 
      title: "Emergency Coverage", 
      description: "Round-the-clock support for unexpected health issues", 
      image: "/service.jpg",
      icon: FaAmbulance
    },
    { 
      title: "Wellness Programs", 
      description: "Tailored programs to promote a healthier lifestyle", 
      image: "/service.jpg",
      icon: FaHeartbeat
    }
  ];

  return (
    <section id="services" className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Comprehensive healthcare solutions tailored to your needs
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;