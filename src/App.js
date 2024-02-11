import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import LikedQuotes from "./components/LikedQuotes";
import TrendingQuotes from "./components/TrendingQuotes";

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
