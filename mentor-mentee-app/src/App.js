import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import MentorList from './components/MentorList';
import MenteeList from './components/MenteeList';
import Chat from './components/Chat';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-8 bg-gray-100"> {/* Adjust the padding here */}
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/mentors" element={<MentorList />} />
                <Route path="/mentees" element={<MenteeList />} />
                <Route path="/chat/:id" element={<Chat />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;