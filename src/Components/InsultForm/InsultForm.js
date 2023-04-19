import { useState } from 'react';
import { translateText } from '../../apiCalls';
import './InsultForm.css';

const InsultForm = ({ onSubmit, handleClear }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text) {
      try {
        const data = await translateText(text);
        const translated = data.contents.translated;
        onSubmit(translated);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClearClick = () => {
    setText('');
    handleClear();
  };

  return (
    <form classname="insult-form" onSubmit={handleSubmit}>
      <label>
        <input type="text" placeholder='Insult here...' 
        value={text} 
        onChange={handleInputChange} 
        />
      </label>
      <button type="submit-btn">Translate</button>
      <button type="button" onClick={handleClearClick}>Clear</button>
    </form>
  );
}

export default InsultForm;