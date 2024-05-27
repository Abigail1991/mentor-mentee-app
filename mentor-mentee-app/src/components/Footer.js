import React from 'react';
import { FaFacebook, FaLinkedin, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gold p-2 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="https://facebook.com" className="mr-4" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://x.com" className="mr-4" target="_blank" rel="noopener noreferrer">
            <FaTimes size={24} /> {/* Using the X icon */}
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