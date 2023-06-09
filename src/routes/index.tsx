//routes/index.js
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
export default function MyRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Navigate to="/recommend" />,
        },
        {
          path: "/recommend",
          element: <Recommend />,
        },
        {
          path: "/singers",
          element: <Singers />,
        },
        {
          path: "/rank",
          element: <Rank />,
        },
      ],
    },
  ]);
}
