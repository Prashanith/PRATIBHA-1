import React from "react";
import "./App.css";
import  AuthProvider  from "./components/context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login/loginPage";
import Home from "./components/home/home";
// import PrivateRoute from "./components/context/privateRoute";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/"  element={ <LoginPage/> }/>
            <Route exact path="/home" element={  <Home/> }/>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;