
import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Sigma Health Insurance. All Rights Reserved.</p>
        <div className="mt-4">
          <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white mx-2">Privacy Policy & Terms</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white mx-2">Contact Us</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
