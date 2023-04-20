import "./Insult.css";

const Insult = ({ originalText, translatedText, dateCreated }) => {
  return (
    <div className="insult">
      <p className="original-text">{originalText}</p>
      <p className="translated-text">{translatedText}</p>
      <p className="date-created">{dateCreated}</p>
    </div>
  );
};

export default Insult;
