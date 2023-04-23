import "./History.css";
import Insult from "./Insult/Insult";
import { useContext, useEffect } from "react";
import InsultHistoryContext from "../../InsultHistoryContext";
import HistoryCat from './historyCat.svg'

const History = () => {
  const { insultHistory } = useContext(InsultHistoryContext);

  useEffect(() => {
    console.log("Current insult history:", insultHistory);
  }, [insultHistory]);

  const historyResults = insultHistory.map((insult, index) => (
    <Insult
      key={index}
      originalText={insult.originalText}
      translatedText={insult.translatedText}
      dateCreated={insult.dateCreated}
    />
  ));

  return (
    <div className="history-page">
      <h1>Thine Insult History</h1>
      <div className="content-wrapper">
        <div className="svg-container">
          <img className="history-cat" src={HistoryCat} alt='History Cat' />
        </div>
        <div className="history-results">{historyResults}</div>
      </div>
    </div>
  );
};

export default History;
