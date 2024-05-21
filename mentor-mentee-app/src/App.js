// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MentorList from './components/MentorList';
import MenteeList from './components/MenteeList';
import Chat from './components/Chat';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import './App.css';
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mentors" element={<MentorList />} />
            <Route path="/mentees" element={<MenteeList />} />
            <Route path="/chat/:id" element={<Chat />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;