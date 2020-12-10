import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import Information from './components/Information.js';

function App() {
  
  return (
    <div className="App">
      <Header />
      <div class="Contents">
        <Profile />
        <Information />
      </div>
    </div>
  );
}
 
export default App;
