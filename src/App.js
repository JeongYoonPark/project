import React, { useState } from 'react';
import { Provider } from  'react-redux';

import './App.css';
// import Header from './components/Header.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Profile from './components/Profile.js';
import Information from './components/Information.js';
import Footer from './components/Footer.js';

import createStore from './store';
import reducers from './reducers';

const store = createStore(reducers);

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header /> */}
        <div className="Contents">
          <Profile />
          <Information />
        </div>
        <Footer />
      </div>
    </Provider>  
  );
}
 
export default App;
