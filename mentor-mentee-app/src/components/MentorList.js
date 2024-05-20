// src/components/MentorList.js
import React from 'react';
import { Link } from 'react-router-dom';

import mentor1 from '../Images/1.jpg';
import mentor2 from '../Images/2.jpg';
import mentor3 from '../Images/3.jpg';
import mentor4 from '../Images/4.jpg';

const mentors = [
  { id: 1, name: "Mentor 1", image: mentor1 },
  { id: 2, name: "Mentor 2", image: mentor2 },
  { id: 3, name: "Mentor 3", image: mentor3 },
  { id: 4, name: "Mentor 4", image: mentor4 },
];

const MentorList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {mentors.map(mentor => (
        <div key={mentor.id} className="border p-4 rounded-lg shadow-lg text-center">
          <Link to={`/chat/${mentor.id}`}>
            <img 
              src={mentor.image} 
              alt={mentor.name} 
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-gold" 
            />
            <h3 className="text-lg font-semibold mt-2">{mentor.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MentorList;