import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import ListItem from "./pages/ListItem";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/list" component={ListItem} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
