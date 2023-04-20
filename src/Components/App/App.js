import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import Header from "../Header/Header";
import History from "../History/History";
import Error from "../Error/Error";
import InsultHistoryContext from "../../InsultHistoryContext";

function App() {
  const [insultHistory, setInsultHistory] = useState([]);

  const addInsult = (originalText, translatedText) => {
    const dateCreated = new Date().toLocaleString();
    setInsultHistory([
      ...insultHistory,
      { originalText, translatedText, dateCreated },
    ]);
  };

  return (
    <div className="App">
      <InsultHistoryContext.Provider value={{ insultHistory, addInsult }}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/history" component={History} />
          <Route component={Error} />
        </Switch>
      </InsultHistoryContext.Provider>
    </div>
  );
}

export default App;
