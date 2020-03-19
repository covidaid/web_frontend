import React from "react";
import "./CSS/App.css";
import { Route } from "react-router-dom";
import TempLandingPage from "./components/pages/tempLandingPage";
import RegisterUserPage from "./components/pages/userRegisterPage";
import LoginPage from "./components/pages/loginPage";
function App() {
  return (
    <div className="App">
      <Route exact path="/" render={TempLandingPage} />
      <Route exact path="/registeruser" render={RegisterUserPage} />
      <Route exact path="/login" render={LoginPage} />
    </div>
  );
}

export default App;
