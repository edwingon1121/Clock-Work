import React from 'react';
import Form from './Form/Form';
import WeatherControl from './Weather/WeatherControl'

import logo from './logo.svg';
import './App.css';

//Clock Applicaion is a simple interface of forward back 
//that switches the user's interface below displaying weather near them
//How they feel today 

// 3 features:
// 1) Watch interface
// 2) Weather display
// 3) Talk about (Form) 

function App() {
  return (
    <div className="App">
      <WeatherControl />
      <Form/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
