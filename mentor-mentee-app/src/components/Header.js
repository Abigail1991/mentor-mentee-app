import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'; // Make sure to adjust the path if needed

const Header = () => {
  return (
    <header className="bg-black text-gold p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold text-gold">
            <Link to="/" className="hover:underline">Mentor-Mentee App</Link>
          </span>
        </div>
        <div>
          <Link to="/" className="mr-4 text-gold hover:underline">Home</Link>
          <Link to="/mentors" className="mr-4 text-gold hover:underline">Mentors</Link>
          <Link to="/mentees" className="text-gold hover:underline">Mentees</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;