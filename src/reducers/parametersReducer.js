export const SET_BRIGHTNESS = 'SET_BRIGHTNESS';
export const SET_CONTRAST = 'SET_CONTRAST';
export const SET_SATURATION = 'SET_SATURATION';
export const SET_SHARPNESS = 'SET_SHARPNESS';
export const SET_NUMBER_OF_SHADES = 'SET_NUMBER_OF_SHADES';
export const SET_BLACK_AND_WHITE = 'SET_BLACK_AND_WHITE';
export const RESET_PARAMETERS = 'RESET_PARAMETERS';
export const SET_ABLE_TO_CHANGE = 'SET_ABLE_TO_CHANGE';

    export const parametersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BRIGHTNESS:
      return { ...state, brightness: action.brightness };
    case SET_CONTRAST:
      return { ...state, contrast: action.contrast };
    case SET_SATURATION:
      return { ...state, saturation: action.saturation };
    case SET_SHARPNESS:
      return { ...state, sharpness: action.sharpness };
    case SET_NUMBER_OF_SHADES:
      return { ...state, numberOfShades: action.numberOfShades };
    case SET_BLACK_AND_WHITE:
      return { ...state, blackAndWhite: action.blackAndWhite };
    case RESET_PARAMETERS:
      return {
        ...state,
        brightness: 0,
        contrast: 0,
        saturation: 1.0,
        sharpness: 0,
        numberOfShades: 0,
        blackAndWhite: false,
      };
    case SET_ABLE_TO_CHANGE:
      return { ...state, ableToChange: action.ableToChange };

    default:
      return state
  }
};
