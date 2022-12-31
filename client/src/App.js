import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { UserProvider } from './context/user';


function App() {
  return (
      <UserProvider>
        <Router>
          <Navbar />
            <h1>Secret NYC</h1>
            <p>Discover secret spots in NYC like a true New Yorker!</p>
          <Routes>
            <Route exact path="/signup" element={ <Signup /> } />
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/home" element={ <Home /> } />
          </Routes>
        </Router>
      </UserProvider>
  );
}

export default App;
