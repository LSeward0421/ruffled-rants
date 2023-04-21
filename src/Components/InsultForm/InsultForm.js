import { useState } from "react";
import { translateText } from "../../apiCalls";
import "./InsultForm.css";
import PropTypes from 'prop-types';
import InsultHistoryContext from "../../InsultHistoryContext";

const InsultForm = ({ onSubmit, handleClear, translatedText }) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text) {
      try {
        const data = await translateText(text);
        const translated = data.contents.translated;
        onSubmit(text, translated);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClearClick = () => {
    setText("");
    handleClear();
  };

  return (
    <div className="form-container">
      <div className="left-cat">
        <div className="chat-bubble-left"></div>
        <div className="input-container">
          <form className="insult-form" onSubmit={handleSubmit}>
            <label>
              <textarea
                placeholder="Insult here..."
                value={text}
                onChange={handleInputChange}
                rows="4"
              />
            </label>
            <div className="buttons-container">
              <button className="button submit-btn" type="submit">
                Translate
              </button>
              <button className="button clear-btn" type="button" onClick={handleClearClick}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-cat">
        <div className="chat-bubble-right"></div>
        <p className="translated-text"> {translatedText}</p>
      </div>
    </div>
  );
};

InsultForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default InsultForm;
