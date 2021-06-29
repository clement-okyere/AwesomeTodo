import React from 'react';
import logo from './logo.svg';
import Todo from "./Domain/Todo/Todo";
import './App.css';
import { Switch, Route, } from "react-router-dom";
import HomePage from "./Domain/HomePage";
import LoginPage from "./Domain/Login";
import SignupPage from "./Domain/Signup";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/signup">
          <SignupPage />
        </Route>

        <Route path="/dashboard">
          <Todo />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
