import { useState } from 'react'
import { translateText } from '../../apiCalls';
import './InsultForm.css'

const InsultForm = ({ setInsultHistory }) => {
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
        setText('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form classname="insult-form" onSubmit={handleSubmit}>
      <label>
        <input type="text" placeholder='Insult here..' 
        value={text} 
        onChange={handleInputChange} 
        />
      </label>
      <button type="submit">Translate</button>
    </form>
  );
}

export default InsultForm;