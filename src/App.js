import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import UserRepos from "./pages/UserRepos";
import SnackbarProvider from "react-simple-snackbar";

const App = () => {
  return (
    <UserProvider>
      <SnackbarProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/:username/repos/:pageNumber"
              element={<UserRepos />}
            />
          </Routes>
        </Router>
      </SnackbarProvider>
    </UserProvider>
  );
};

export default App;
