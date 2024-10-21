'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';

const FloatingSocialLinks = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 bg-white rounded-full shadow-lg p-4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex space-x-3">

        <motion.a
          href="https://wa.me/+919349780957?text=I'm%20interested%20in%20your%20service."
          className="text-blue-600 hover:text-blue-800 "
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >  <FaWhatsapp size={24} /></motion.a>
        <motion.a
          className="text-blue-600 hover:text-blue-800 "
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }} href='tel:+919349780957'>  <FaPhone size={24} /></motion.a>


      </div>
    </motion.div >
  )
}

export default FloatingSocialLinks
