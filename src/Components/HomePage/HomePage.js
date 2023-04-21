import InsultForm from "../InsultForm/InsultForm";
import { useState, useContext } from 'react';
import './HomePage.css';
import InsultHistoryContext from "../../InsultHistoryContext";

const HomePage = () => {
  const [translatedText, setTranslatedText] = useState('...Thy text translation.');
  const { addInsult, setError } = useContext(InsultHistoryContext);

  const handleTranslation = (original, translated) => {
    setTranslatedText(translated);
    addInsult(original, translated)
  };

  const handleClear = () => {
    setTranslatedText('');
  };

  return (
    <div className="home-page">
      <InsultForm onSubmit={handleTranslation} handleClear={handleClear} translatedText={translatedText} />
      <div className="translated-text-container">
      </div>
    </div>
  );
};

export default HomePage;