import { initialStoreState } from '../store';

export const SET_BRIGHTNESS = 'SET_BRIGHTNESS';
export const SET_CONTRAST = 'SET_CONTRAST';
export const SET_SATURATION = 'SET_SATURATION';
export const SET_VIGNETTING = 'SET_VIGNETTING';
export const SET_NUMBER_OF_SHADES = 'SET_NUMBER_OF_SHADES';
export const SET_BLACK_AND_WHITE = 'SET_BLACK_AND_WHITE';
export const SET_INVERTED_COLOR = 'SET_INVERTED_COLOR';
export const SET_RED = 'SET_RED';
export const SET_GREEN = 'SET_GREEN';
export const SET_BLUE = 'SET_BLUE';
export const RESET_PARAMETERS = 'RESET_PARAMETERS';
export const RESET_STORE = 'RESET_STORE';
export const SET_IS_LOADED = 'SET_IS_LOADED';
export const SET_ABLE_TO_CHANGE = 'SET_ABLE_TO_CHANGE';
export const SET_CANVAS_REF = 'SET_CANVAS_REF';

export const parametersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BRIGHTNESS:
      return {...state, brightness: action.brightness};
    case SET_CONTRAST:
      return {...state, contrast: action.contrast};
    case SET_SATURATION:
      return {...state, saturation: action.saturation};
    case SET_VIGNETTING:
      return {...state, vignetting: action.vignetting};
    case SET_NUMBER_OF_SHADES:
      return {...state, numberOfShades: action.numberOfShades};
    case SET_BLACK_AND_WHITE:
      return {...state, blackAndWhite: action.blackAndWhite};
    case SET_INVERTED_COLOR:
      return {...state, invertedColor: action.invertedColor};
    case SET_RED:
      return {...state, red: action.red};
    case SET_GREEN:
      return {...state, green: action.green};
    case SET_BLUE:
      return {...state, blue: action.blue};
    case RESET_PARAMETERS:
      return {
        ...state,
        brightness: 0,
        contrast: 0,
        saturation: 1.0,
        vignetting: 0,
        numberOfShades: 0,
        red: true,
        green: true,
        blue: true,
        blackAndWhite: false,
        invertedColor: false,
      };
    case SET_IS_LOADED:
      return {...state, isLoaded: action.isLoaded};
    case SET_ABLE_TO_CHANGE:
      return {...state, ableToChange: action.ableToChange};
    case SET_CANVAS_REF:
      return {...state, canvasRef: action.reference};
    case RESET_STORE:
      return initialStoreState.parameters;
    default:
      return state;
  }
};