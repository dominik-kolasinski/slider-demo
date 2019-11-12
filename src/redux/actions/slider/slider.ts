import {
  SET_SLIDER_VISIBILITY,
  SET_CURRENT_SLIDE
} from "../../actionTypes/sliderTypes";

export const setSliderVisibility = (visibility: boolean) => ({
  payload: visibility,
  type: SET_SLIDER_VISIBILITY
});

export const setCurrentSlide = (index: number) => ({
  payload: index,
  type: SET_CURRENT_SLIDE
});

export interface SliderState {
  visible: boolean;
  currentSlideIndex?: number;
}

export interface SliderAction {
  type: string;
  payload: any;
}

export type SliderTypes = SliderAction;
