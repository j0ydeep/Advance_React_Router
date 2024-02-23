import React, { Suspense } from "react";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "./reduxStore/reduxStore.js";

import Routes from "./components/appRoutes/Routes.jsx";

const App = () => {
  return (
    <Suspense>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
};

export default App;
