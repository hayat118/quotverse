import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Home from "./features/home/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
