import React, { lazy } from "react";

import { BrowserRouter } from "react-router-dom";

// const Routes = lazy(() => import("./components/app routes/Routes.jsx"));

import Routes from "./components/appRoutes/Routes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
