import { useState } from "react";
import { translateText } from "../../apiCalls";
import "./InsultForm.css";

const InsultForm = ({ onSubmit, handleClear }) => {
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
        onSubmit(translated);
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
              <button className="submit-btn" type="submit">
                Translate
              </button>
              <button type="button" onClick={handleClearClick}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-cat">
        <div className="translated-text-container">
          <p className="translated-text"></p>
        </div>
      </div>
    </div>
  );
};

export default InsultForm;
