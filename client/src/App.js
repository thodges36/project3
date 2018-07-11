import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import ListItem from "./pages/ListItem";
import Detail from "./pages/Detail";
import Summary from "./pages/Summary";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login/login";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/list" component={ListItem} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
