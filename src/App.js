/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AllDecks from './components/AllDecks';
import DeckPage from './components/DeckPage';

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path="/" component={AllDecks} exact />
          <Route path="/deck/:id" component={DeckPage} exact />
          {/* <Route path="/chart" component={ChartPage} exact /> */}
          {/* <Route component={NotFoundPage} /> */}

        </Switch>

      </div>

    </Router>
  );
}

export default App;
