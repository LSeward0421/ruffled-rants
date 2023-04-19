import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { translateText } from './apiCalls';

function App() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text) {
      try {
        const data = await translateText(text);
        const translated = data.contents.translated;
        setTranslatedText(translated);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Do thy worst:
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <button type="submit">Translate</button>
      </form>
      <p>Thy Shakespearean Insult: {translatedText}</p>
    </div>
  );
}

export default App;
