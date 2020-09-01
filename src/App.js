import React from 'react';

import HomePage from './pages/home/home';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => <div>HATS</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
