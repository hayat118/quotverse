import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";

import Trending from "./Trending";

function Layout() {
  return (
    <div className="App">
      <div className="home grid grid-cols-12 gap-4">
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
          <Outlet />
        </div>

        <div className="col-span-3">
          <div>
            <h2>Treding Topics</h2>
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
