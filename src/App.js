import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Home from "./features/home/home";
import LikedQuotes from "./features/home/LikedQuotes";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "liked",
        element: <LikedQuotes />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
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
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/liked">Like</Link>
            </p>
          </div>
          {/* <Home /> */}
          <Outlet />
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
