import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Profile from './components/Profile.js';

function App() {
  
  return (
    <div className="App">
      <Header />
      <div class="Contents">
        <Profile />
      </div>
    </div>
  );
}
 
export default App;
