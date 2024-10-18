'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHeart, FaUsers, FaArrowRight } from 'react-icons/fa';

const InsuranceScheme = ({ title, description, icon }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Σ Sigma Health</div>
          <div className="hidden md:flex space-x-6">
            {['About', 'Services', 'Stats', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600">
            ☰
          </button>
        </nav>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4"
          >
            {['About', 'Services', 'Stats', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="hero" className="text-center mb-24">
          <motion.h1 
            className="text-5xl font-bold mb-6 text-blue-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Safeguarding Your Health, Securing Your Future
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Innovative health insurance solutions tailored just for you
          </motion.p>
          <motion.button 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </section>

        <section id="about" className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Sigma Health?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaShieldAlt className="text-blue-600 text-3xl" />, title: "Comprehensive Coverage", description: "Protecting you from unexpected health expenses" },
              { icon: <FaHeart className="text-blue-600 text-3xl" />, title: "Personalized Care", description: "Tailored plans to meet your unique health needs" },
              { icon: <FaUsers className="text-blue-600 text-3xl" />, title: "Family-Focused", description: "Ensuring the well-being of your loved ones" }
            ].map((item, index) => (
              <InsuranceScheme key={index} {...item} />
            ))}
          </div>
        </section>

        <section id="services" className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Health Check-ups", description: "Regular preventive care to keep you healthy" },
              { title: "Specialist Consultations", description: "Access to top medical experts in various fields" },
              { title: "Emergency Coverage", description: "24/7 support for unexpected health issues" },
              { title: "Wellness Programs", description: "Promoting a healthier lifestyle for our members" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.a 
                  href="#" 
                  className="inline-flex items-center mt-4 text-blue-600 hover:underline"
                  whileHover={{ x: 5 }}
                >
                  Learn More <FaArrowRight className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="stats" className="mb-24 bg-blue-600 text-white py-16 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: 500000, label: "Insured Members" },
              { value: 98, label: "Customer Satisfaction" },
              { value: 5000, label: "Healthcare Partners" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} duration={2000} />
                  {stat.label === "Customer Satisfaction" && "%"}
                  {stat.label === "Healthcare Partners" && "+"}
                </p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg"></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sigma Health Insurance. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}