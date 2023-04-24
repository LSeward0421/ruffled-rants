import InsultForm from "../InsultForm/InsultForm";
import { useState, useContext } from 'react';
import './HomePage.css';
import InsultHistoryContext from "../../InsultHistoryContext";

const HomePage = () => {
  const [translatedText, setTranslatedText] = useState('');
  const { addInsult } = useContext(InsultHistoryContext);

  const handleTranslation = (original, translated) => {
    setTranslatedText(translated);
    addInsult(original, translated)
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