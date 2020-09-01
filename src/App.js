import React from "react";

import HomePage from "./pages/home/home";
import Shop from "./pages/shop/shop";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

const HatsPage = () => <div>HATS</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
