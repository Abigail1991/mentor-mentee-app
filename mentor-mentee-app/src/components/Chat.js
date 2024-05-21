import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const mentors = [
  { id: 1, name: 'Abigail Opoku', image: '/Images/1.jpg' },
  { id: 2, name: 'Emmanuel Gyan', image: '/Images/2.jpg' },
  { id: 3, name: 'Deborah Sakyi', image: '/Images/3.jpg' },
  { id: 4, name: 'Doreen Ampadu', image: '/Images/4.jpg' }
];

const mentees = [
  { id: 5, name: 'Nana Yaa', image: '/Images/5.jpg' },
  { id: 6, name: 'Akosua Frema', image: '/Images/6.jpg' },
  { id: 7, name: 'Grace Opare', image: '/Images/7.jpg' }
];

const Chat = () => {
  const { id } = useParams();
  const person = [...mentors, ...mentees].find(person => person.id === parseInt(id));

  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  if (!person) {
    return <div className="p-4">Person not found</div>;
  }

  const isMentor = mentors.some(mentor => mentor.id === person.id);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() === '') return;

    setChatHistory([...chatHistory, { text: message, sender: 'You' }]);
    setMessage('');
  };

  return (
    <div className="p-4">
      <Link to={isMentor ? "/" : "/mentees"} className="text-blue-600 mb-4 inline-block hover:underline">
        Back to {isMentor ? "Mentors" : "Mentees"}
      </Link>
      <h2 className="text-2xl font-bold mb-4">Chat with {person.name}</h2>
      <div className="border rounded-lg p-4 shadow-md">
        <div className="max-h-80 overflow-y-auto mb-4 p-2 border-b border-gray-300">
          {chatHistory.map((msg, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">{msg.sender}:</span> {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input 
            type="text" 
            value={message} 
            onChange={handleInputChange} 
            placeholder="Type your message..." 
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <button type="submit" className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;