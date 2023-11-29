import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
