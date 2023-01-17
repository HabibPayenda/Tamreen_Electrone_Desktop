import { combineReducers } from "redux";

import userReducers from "./userReducers";
import newStudioReducer from "./newStudioReducer";

export default combineReducers({
  users: userReducers,
  newStudio: newStudioReducer,
});
