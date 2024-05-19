// src/components/MenteeList.js
import React from 'react';
import { Link } from 'react-router-dom';

import mentee1 from '../Images/5.jpg';
import mentee2 from '../Images/6.jpg';
import mentee3 from '../Images/7.jpg';

const mentees = [
  { id: 5, name: "Mentee 1", image: mentee1 },
  { id: 6, name: "Mentee 2", image: mentee2 },
  { id: 7, name: "Mentee 3", image: mentee3 },
];

const MenteeList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {mentees.map(mentee => (
        <div key={mentee.id} className="border p-4 rounded-lg shadow-lg">
          <img src={mentee.image} alt={mentee.name} className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-2 text-center">{mentee.name}</h3>
          <Link to={`/chat/${mentee.id}`} className="block text-center text-blue-500 hover:underline">Chat</Link>
        </div>
      ))}
    </div>
  );
};

export default MenteeList;