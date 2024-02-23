import { React, lazy } from "react";

// COMPONENTS
const Home = lazy(() => import("../pages/Home/index.jsx"));

const About = lazy(() => import("../pages/About/index.jsx")) ;

import MainLaylout from "../Layout/MainLayout/index.jsx";

export const MainRoutes = {
  path: "/",
  element: <MainLaylout />,

  children: [
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,
    }
  ]
};