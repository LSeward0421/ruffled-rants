import "./History.css";
import Insult from "./Insult/Insult";
import { useContext, useEffect } from "react";
import InsultHistoryContext from "../../InsultHistoryContext";

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
      {/* div around both and display flex, 100%, cat 20%, results 75% */}
      {/* cat image here */}
      <div className="history-results"> {historyResults}
      </div>
    </div>
  );
};

export default History;
