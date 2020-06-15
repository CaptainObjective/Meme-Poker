import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Main from "./views/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/room/:roomId" component={Main} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
