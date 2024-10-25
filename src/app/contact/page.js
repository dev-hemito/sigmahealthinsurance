'use client';
import React, { useState } from 'react';

import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSmile, FaHospital, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Page = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plans:'',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_wf5y8am',
        'template_382eby9',
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_plans: formData.plans,
          message: formData.message,
          to_email: 'contact@sigmahealth.com',
        },
        'IFKy67yDOUJZ373_E'
      );
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-gray-700 mb-2">Plans</label>
                <select
                  name="plans"
                  id="plans"
                  onChange={handleChange}
                  value={formData.plans} // Set the value to formData.plans
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>Select a plan</option>
                  <option value="Personal Accidental Insurance">Personal Accidental Insurance</option>
                  <option value="Critical Illness Insurance">Critical Illness Insurance</option>
                  <option value="Family Health Insurance">Family Health Insurance</option>
                  <option value="Individual Insurance">Individual Insurance</option>
                  <option value="Hospital Daily Cash Insurance">Hospital Daily Cash Insurance</option>
                
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" />
                <p>Sreerangam Building, Chittoor Rd, Iyyattil Junction, Shenoys, Ernakulam, Kerala 682011</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 text-xl mr-3" />
                <a  href='tel:+919349780957'>+91 9349780957</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 text-xl mr-3" />
                <p>sigmahealthinsurance@gmail.com</p>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-600 text-xl mr-3" />
                <p>Monday - Friday: 9am - 5pm</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                  <a key={index} href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;