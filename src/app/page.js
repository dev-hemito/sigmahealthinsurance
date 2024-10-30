'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHeart, FaUsers, FaSmile, FaHospital } from 'react-icons/fa';
import Image from 'next/image';
import ServicesSection from '@/components/Services';
import Link from 'next/link';

const page = () => {
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

  const InsuranceScheme = ({ title, description, icon, image }) => (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Image width={600} height={600} src={image} alt={title} className="w-full h-48 object-cover rounded cover" />
    </motion.div>
  );

  const ImpactCard = ({ icon: Icon, value, label, image }) => (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-40">
        <Image width={500} height={500} src={image} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="text-white text-5xl" />
        </div>
      </div>
      <div className="p-6 text-center">
        <p className="text-4xl font-bold mb-2 text-blue-600">
      {value?<>
          <AnimatedCounter end={value} duration={2000} /> </> : '' }
          {label === "Customer Satisfaction" && "%"}
          {label === "Healthcare Partners" && "+"}
          {label === "Insured Members" && "+"}
        </p>
        <p className="text-xl text-gray-700">{label}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <section id="hero" className="text-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <Image
              src="/home.jpg"
              alt="Happy family"
              className="w-full h-[60vh] object-cover rounded-xl mb-8"
              width={5000}
              height={5000}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-xl">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Safeguarding Your Health, Securing Your Future
              </h1>
              <p className="text-xl text-white mb-8">
                Affordable health insurance solutions tailored just for you
              </p>
              <Link href="tel:+919349780957"
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call Us
              </Link>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Sigma Health?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaShieldAlt className="text-blue-600 text-3xl" />, title: "Comprehensive Coverage", description: "Protecting you from unexpected health expenses", image: "/ani.jpg" },
              { icon: <FaHeart className="text-blue-600 text-3xl" />, title: "Personalized Care", description: "Tailored plans to meet your unique health needs", image: "/personalisedcare.jpg" },
              { icon: <FaUsers className="text-blue-600 text-3xl" />, title: "Family-Focused", description: "Ensuring the well-being of your loved ones", image: "/Family-Focused.jpg" }
            ].map((item, index) => (
              <InsuranceScheme key={index} {...item} />
            ))}
          </div>
        </section>

        <ServicesSection />

        <section id="stats" className="mb-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ImpactCard
                icon={FaUsers}
                value={1000}
                label="Insured Members"
                image="/client.jpg"
              />
              <ImpactCard
                icon={FaSmile}
                value={98}
                label="Customer Satisfaction"
                image="/customer.jpg"
              />
              <ImpactCard
                icon={FaHospital}
                label="Multiple Healthcare Partners"
                image="/partner.jpg"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Ravi Stephan", quote: "Sigma Health has been a lifesaver for my family. Their comprehensive coverage and excellent customer service give us peace of mind.", image: "/download.png" },
              { name: "Arun Lal", quote: "Sigma Health Insurance provided exceptional service, tailoring insurance solutions to my specific needs and clearly explaining the options available. Sudheer's professionalism and dedication made the process seamless, and I highly recommend him for anyone seeking insurance guidance.", image: "/download.png" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <Image width={500} height={500} src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 cover object-cover" />
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
