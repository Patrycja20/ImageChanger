import {
  SET_DRAW_MODE,
  SET_PAINT_SIZE,
  SET_COLOR,
  SET_CANVAS_REF,
  CHANGE_FILL_MODE,
} from '../reducers/drawingReducer';

import {
  SET_IMAGE_DIMENSIONS,
  SET_IMAGE_URL,
  SET_SELECTED_FILTER,
} from '../reducers/filtersReducer';

import {
  SET_BRIGHTNESS,
  SET_CONTRAST,
  SET_SATURATION,
  SET_VIGNETTING,
  SET_NUMBER_OF_SHADES,
  SET_BLACK_AND_WHITE,
  SET_INVERTED_COLOR,
  SET_RED,
  SET_GREEN,
  SET_BLUE,
  RESET_PARAMETERS,
  SET_IS_LOADED,
  SET_ABLE_TO_CHANGE,
} from '../reducers/parametersReducer';

export const contactsFetched = (contacts) => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  contacts
});

/////Drawing
export function setDrawMode(drawMode) {
  return {
    type: SET_DRAW_MODE,
    drawMode: drawMode,
  };
}

export function setPaintSize(paintSize) {
  return {
    type: SET_PAINT_SIZE,
    paintSize: paintSize,
  };
}

export function setColor(color) {
  return {
    type: SET_COLOR,
    color: color,
  };
}

export function setCanvasReference(reference) {
  return {
    type: SET_CANVAS_REF,
    reference: reference,
  };
}


export function changeFillMode() {
  return {
    type: CHANGE_FILL_MODE,
  };
}


/////Filters
export function setImageURL(imageURL) {
  return {
    type: SET_IMAGE_URL,
    imageURL: imageURL,
  };
}

export function setImageDimensions(width, height) {
  return {
    type: SET_IMAGE_DIMENSIONS,
    width,
    height,
  };
}

export function setSelectedFilter(selectedFilter) {
  return {
    type: SET_SELECTED_FILTER,
    selectedFilter: selectedFilter,
  };
}

/////Parameters
export function setBrightness(brightness) {
  return {
    type: SET_BRIGHTNESS,
    brightness: parseInt(brightness),
  };
}


export function setContrast(contrast) {
  return {
    type: SET_CONTRAST,
    contrast: parseInt(contrast),
  };
}


export function setSaturation(saturation) {
  return {
    type: SET_SATURATION,
    saturation: parseFloat(saturation),
  };
}


export function setVignetting(vignetting) {
  return {
    type: SET_VIGNETTING,
    vignetting: parseFloat(vignetting),
  };
}


export function setNumberOfShades(numberOfShades) {
  return {
    type: SET_NUMBER_OF_SHADES,
    numberOfShades: parseFloat(numberOfShades),
  };
}

export function setBlackAndWhite(blackAndWhite) {
  return {
    type: SET_BLACK_AND_WHITE,
    blackAndWhite: blackAndWhite,
  };
}

export function setInvertedColor(invertedColor) {
  return {
    type: SET_INVERTED_COLOR,
    invertedColor: invertedColor,
  };
}

export function setRed(red) {
  return {
    type: SET_RED,
    red: red,
  };
}

export function setGreen(green) {
  return {
    type: SET_GREEN,
    green: green,
  };
}

export function setBlue(blue) {
  return {
    type: SET_BLUE,
    blue: blue,
  };
}

export function resetParameters() {
  return {
    type: RESET_PARAMETERS,
  };
}

export function setIsLoaded(isLoaded) {
  return {
    type: SET_IS_LOADED,
    isLoaded: isLoaded,
  };
}

export function setAbleToChange(ableToChange) {
  return {
    type: SET_ABLE_TO_CHANGE,
    ableToChange: ableToChange,
  };
}