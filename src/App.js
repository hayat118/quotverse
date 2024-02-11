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
import TrendingQuotes from "./features/home/TrendingQuotes";
import "./App.css";

import Layout from "./features/home/Layout";

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
      {
        path: "/tags/:tagname",
        element: <TrendingQuotes />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
