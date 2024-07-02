import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginPage';
import Home from './components/Home';
import About from './components/About';
import Places from './components/Places';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
    localStorage.setItem('user', username);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home user={currentUser} onLogout={handleLogout} />} />
            <Route path="/about" element={<About onLogout={handleLogout} />} />
            <Route path="/places" element={<Places onLogout={handleLogout} />} />
            <Route path="/contact" element={<Contact onLogout={handleLogout} />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
