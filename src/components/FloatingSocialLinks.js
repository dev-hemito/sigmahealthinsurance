'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {  FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FloatingSocialLinks = () => {
  return (
    <motion.div 
    className="fixed bottom-8 right-8 bg-white rounded-full shadow-lg p-4"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <div className="flex space-x-3">
      {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
        <motion.a
          key={index}
          href="#"
          className="text-blue-600 hover:text-blue-800"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </div>
  </motion.div>
  )
}

export default FloatingSocialLinks