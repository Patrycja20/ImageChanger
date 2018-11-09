export const SET_BRIGHTNESS = 'SET_BRIGHTNESS';
export const SET_CONTRAST = 'SET_CONTRAST';
export const SET_SATURATION = 'SET_SATURATION';
export const SET_SHARPNESS = 'SET_SHARPNESS';
export const SET_GREYSCALE = 'SET_GREYSCALE';

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
    case SET_GREYSCALE:
      return { ...state, greyscale: action.greyscale };

    default:
      return state
  }
};
