// src/components/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLink, FaHeart } from 'react-icons/fa';
import menteeImage from '../Images/5.jpg';

const Homepage = () => {
  return (
    <div className="p-4 bg-white">
      <section className="mb-8 mt-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p>Welcome to our mentoring platform where mentors and mentees can connect for a deeper learning experience. Our goal is to foster an environment of growth and development through meaningful connections.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
        <div className="border rounded-lg p-4 shadow-md text-center">
          <img src={menteeImage} alt="Abigail Acheampomaa Opoku" className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-green-500" />
          <h3 className="text-2xl font-bold mb-2">Abigail Acheampomaa Opoku</h3>
          <p><FaUser className="inline mr-2" />Student, Alx SE (Frontend Development)</p>
          <p><FaLink className="inline mr-2" /><a href="https://github.com/Abigail1991" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Acc.: https://github.com/Abigail1991</a></p>
          <p><FaHeart className="inline mr-2" />Passion: To see young ones get the support they need for their career and personal growth.</p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <p>Our mission is to empower individuals by fostering meaningful mentor-mentee relationships that drive personal and professional growth. We aim to provide an accessible, user-friendly platform where mentors and mentees can connect, share knowledge, and develop their skills in a supportive environment.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Vision</h2>
        <p>Our vision is to become the leading platform for mentoring, where every individual has the opportunity to benefit from the guidance and support of a mentor. We strive to create a global community that values continuous learning, collaboration, and the development of future leaders.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Shared Values</h2>
        <ul className="list-disc list-inside">
          <li>Empowerment: We believe in empowering individuals to reach their full potential through mentorship.</li>
          <li>Inclusivity: We are committed to creating an inclusive environment where everyone is welcome and valued.</li>
          <li>Collaboration: We promote a culture of collaboration, where knowledge and experiences are shared openly.</li>
          <li>Continuous Learning: We value lifelong learning and the continuous development of skills and knowledge.</li>
          <li>Integrity: We conduct ourselves with integrity, maintaining the highest ethical standards in all our interactions.</li>
          <li>Support: We foster a supportive community where mentors and mentees can thrive.</li>
          <li>Innovation: We embrace innovation, continually improving our platform to meet the evolving needs of our users.</li>
          <li>Respect: We treat everyone with respect, valuing diverse perspectives and experiences.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4">Navigate</h2>
        <ul className="list-disc list-inside">
          <li><Link to="/mentors" className="text-blue-600 hover:underline">Mentors</Link></li>
          <li><Link to="/mentees" className="text-blue-600 hover:underline">Mentees</Link></li>
          <li><Link to="/chat/1" className="text-blue-600 hover:underline">Chat</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Homepage;