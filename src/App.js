import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header.js';
import Profile from './components/Profile.js';
import Information from './components/Information.js';
import Footer from './components/Footer.js';

function App() {
  
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="Contents">
        <Profile />
        <Information />
        <Footer />
      </div>
    </div>
  );
}
 
export default App;
