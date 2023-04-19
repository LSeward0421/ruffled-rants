import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { translateText } from '../../apiCalls';
import './App.css'
import HomePage from '../HomePage/HomePage';


function App() {

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
