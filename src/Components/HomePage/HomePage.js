import InsultForm from "../InsultForm/InsultForm";
import { useState, useContext } from 'react';
import './HomePage.css';
import InsultHistoryContext from "../../InsultHistoryContext";

const HomePage = () => {
  const [translatedText, setTranslatedText] = useState('...Thy text translation.');
  const { addInsult } = useContext(InsultHistoryContext);

  const handleTranslation = (translated) => {
    setTranslatedText(translated);
    addInsult(originalText, translated)
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