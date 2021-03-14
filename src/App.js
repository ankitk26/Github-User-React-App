import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Header from "./layouts/Header";
import UserRepos from "./pages/UserRepos";
import Home from "./pages/Home";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:username/repos/:pageNumber" component={UserRepos} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
