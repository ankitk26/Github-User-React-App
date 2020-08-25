import React from "react";
import "./css/style.css";
import "./App.css";

// Context and Routers
import { UserProvider } from "./components/UserContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/GithubUser/Header";
import GithubUser from "./components/GithubUser/GithubUser";
import UserRepos from "./components/UserRepos/UserRepos";
function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={GithubUser} />
          <Route path="/:username/repos" component={UserRepos} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
