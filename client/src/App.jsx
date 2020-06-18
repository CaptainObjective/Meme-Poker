import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Main from "./views/Main/Main";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route exact path="/room/:roomId" component={Main} />
          <Route exact path="/" component={Home} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
