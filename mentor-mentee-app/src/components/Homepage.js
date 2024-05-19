// src/components/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  { id: 1, name: 'Alice Opoku', image: '/Images/1.jpg', portfolio: 'Alice is a senior mentor with over 10 years of experience in software development.' },
  { id: 2, name: 'Bob Smith', image: '/Images/2.jpg', portfolio: 'Bob is an expert in AI and machine learning with numerous publications.' },
  { id: 3, name: 'Charlie Brown', image: '/Images/3.jpg', portfolio: 'Charlie specializes in web development and has worked on several high-profile projects.' },
  { id: 4, name: 'Daniel Green', image: '/Images/4.jpg', portfolio: 'Daniel is a cybersecurity specialist with a deep understanding of network security.' },
  { id: 5, name: 'Eva Adams', image: '/Images/5.jpg', portfolio: 'Eva is a junior mentee eager to learn more about software engineering.' },
  { id: 6, name: 'Frank Johnson', image: '/Images/6.jpg', portfolio: 'Frank is an aspiring data scientist currently exploring various machine learning algorithms.' },
  { id: 7, name: 'Grace Lee', image: '/Images/7.jpg', portfolio: 'Grace is passionate about front-end development and user experience design.' },
];

const Homepage = () => {
  return (
    <div className="p-4 bg-white">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p>Welcome to our mentoring platform where mentors and mentees can connect for a deeper learning experience. Our goal is to foster an environment of growth and development through meaningful connections.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <div key={member.id} className="border rounded-lg p-4 shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p>{member.portfolio}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4">Navigate</h2>
        <ul className="list-disc list-inside">
          <li><Link to="/" className="text-blue-600 hover:underline">Mentors</Link></li>
          <li><Link to="/mentees" className="text-blue-600 hover:underline">Mentees</Link></li>
          <li><Link to="/chat/1" className="text-blue-600 hover:underline">Chat</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Homepage;