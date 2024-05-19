// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="https://facebook.com" className="mr-4" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="mr-4" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" className="mr-4" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div>
          <a href="/terms" className="mr-4 hover:underline">Terms of Service</a>
          <a href="/policy" className="hover:underline">Policy Statement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;