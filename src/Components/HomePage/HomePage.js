import InsultForm from "../InsultForm/InsultForm";
import { useState } from 'react';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <InsultForm />
      <p className= 'translated-text'>Translated:</p>
    </div>
  )
}

export default HomePage;