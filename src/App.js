import React from 'react';
import Header from './Header/Header';
import ClockSlide from './ClockSlide/ClockSlide';
import Form from './Form/Form';
import WeatherControl from './Weather/WeatherControl';

import './App.css';
import './css/style.css';

//Clock Applicaion is a simple interface of forward back 
//that switches the user's interface below displaying weather near them
//How they feel today 

// 3 features:
// 1) Watch interface
// 2) Weather display
// 3) Talk about (Form) 

function App() {
  return (
    <div className={`App dark-mode`}>
    <Header/>
    <ClockSlide />
    <p>_______________________________________________________</p>
      <WeatherControl />
      <p>_________________________________</p>
      <Form/>
    </div>
  );
}

export default App;
