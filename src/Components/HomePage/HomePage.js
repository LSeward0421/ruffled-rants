import InsultForm from "../InsultForm/InsultForm";
import { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [translatedText, setTranslatedText] = useState('...Thy text translation.');

  const handleTranslation = (translated) => {
    setTranslatedText(translated);
  };

  const handleClear = () => {
    setTranslatedText('');
  };

  return (
    <div className="home-page">
      <InsultForm onSubmit={handleTranslation} handleClear={handleClear} />
      <div className="translated-text-container">
        <p className="translated-text"> {translatedText}</p>
      </div>
    </div>
  );
};

export default HomePage;