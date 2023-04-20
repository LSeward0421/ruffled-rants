import "./Insult.css";

const Insult = ({ originalText, translatedText, dateCreated }) => {
  return (
    <div className="insult">
      <p className="date-created">{dateCreated}</p>
      <span>Original:</span>
      <p className="original-text">"{originalText}"</p>
      <span>Thy Insult:</span>
      <p className="translated-text">"{translatedText}"</p>
    </div>
  );
};

export default Insult;
