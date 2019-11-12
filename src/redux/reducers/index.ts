import { combineReducers } from "redux";
import teamReducer from "./team";
import sliderReducer from "./slider";

const rootReducer = combineReducers({
  team: teamReducer,
  slider: sliderReducer
});

export default rootReducer;
