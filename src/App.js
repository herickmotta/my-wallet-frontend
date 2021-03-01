import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/index.js";
import SignIn from "./pages/SignIn";
import NewTransaction from "./pages/NewTransaction";
import ResetCSS from "./assets/globalStyles/ResetCSS";
import Home from "./pages/Home";
import GlobalStyle from "./assets/globalStyles/GlobalStyle";
import { UserProvider } from "./context/UserContext";

const App = () => (
  <UserProvider>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/new/:type" component={NewTransaction} />
      </Switch>
    </Router>
  </UserProvider>
);

export default App;
