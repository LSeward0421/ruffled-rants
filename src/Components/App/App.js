import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import History from '../History/History';
import Error from '../Error/Error';


function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/history" component={History} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
