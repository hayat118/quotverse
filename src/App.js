import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Home from "./features/home/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <div className="h-16 border-b border-gray-100 center align-middle ">
            <h1>QuotesVerse</h1>
          </div>
        </div>

        <div className="col-span-6">
          <div>
            <p>Home</p>
            <p>Like</p>
          </div>
          <Home />
        </div>

        <div className="col-span-3">
          <div>
            <h2>Treding Topics</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
