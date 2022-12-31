import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
