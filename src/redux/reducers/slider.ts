import {
  SET_SLIDER_VISIBILITY,
  SET_CURRENT_SLIDE
} from "../actionTypes/sliderTypes";
import { SliderState, SliderTypes } from "../actions/slider/slider";

const INITIAL_STATE: SliderState = {
  visible: false
};

function sliderReducer(
  state = INITIAL_STATE,
  action: SliderTypes
): SliderState {
  switch (action.type) {
    case SET_SLIDER_VISIBILITY: {
      return { ...state, visible: action.payload };
    }
    case SET_CURRENT_SLIDE: {
      return { ...state, currentSlideIndex: action.payload };
    }
    default:
      return state;
  }
}

export default sliderReducer;
