import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  { path: "/quiz", element: <Quiz /> },
]);

export default router;
