// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'; // Make sure to adjust the path if needed

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold">
            <Link to="/">Mentor-Mentee App</Link>
          </span>
        </div>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/mentors" className="mr-4 hover:underline">Mentors</Link>
          <Link to="/mentees" className="hover:underline">Mentees</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;