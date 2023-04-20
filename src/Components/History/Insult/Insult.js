import "./Insult.css";
import PropTypes from 'prop-types';

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

Insult.propTypes = {
  originalText: PropTypes.string.isRequired,
  translatedText: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
};

export default Insult;
