import { combineReducers } from "@reduxjs/toolkit";

import auth from "./authentication/index.js";

const reducers = combineReducers({auth});

export default reducers;