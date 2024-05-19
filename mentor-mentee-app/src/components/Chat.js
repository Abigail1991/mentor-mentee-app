// src/components/Chat.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const mentors = [
  { id: 1, name: 'Alice Opoku', image: '/Images/1.jpg' },
  { id: 2, name: 'Bob Smith', image: '/Images/2.jpg' },
  { id: 3, name: 'Charlie Brown', image: '/Images/3.jpg' },
  { id: 4, name: 'Daniel Green', image: '/Images/4.jpg' }
];

const mentees = [
  { id: 5, name: 'Eva Adams', image: '/Images/5.jpg' },
  { id: 6, name: 'Frank Johnson', image: '/Images/6.jpg' },
  { id: 7, name: 'Grace Lee', image: '/Images/7.jpg' }
];

const Chat = () => {
  const { id } = useParams();
  const person = [...mentors, ...mentees].find(person => person.id === parseInt(id));

  if (!person) {
    return <div className="p-4">Person not found</div>;
  }

  const isMentor = mentors.some(mentor => mentor.id === person.id);

  return (
    <div className="p-4">
      <Link to={isMentor ? "/" : "/mentees"} className="text-blue-600 mb-4 inline-block hover:underline">
        Back to {isMentor ? "Mentors" : "Mentees"}
      </Link>
      <h2 className="text-2xl font-bold mb-4">Chat with {person.name}</h2>
      <div className="border rounded-lg p-4 shadow-md">
        <div className="mb-4">Hello! How can I help you?</div>
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>
    </div>
  );
};

export default Chat;