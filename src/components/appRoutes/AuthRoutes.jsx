import { React, lazy } from "react";

// COMPONENTS
const Login = lazy(() => import("../pages/Login/index.jsx"));

const SignUp = lazy(() => import('../pages/SignUp/index.jsx'));

import AuthLaylout from "../Layout/AuthLayout/index.jsx";

export const AuthRoutes = {
  path: "/",
  element: <AuthLaylout />,

  children: [
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/signup",
      element: <SignUp />,
    },
  ],
};