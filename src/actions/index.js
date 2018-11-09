import {
  SET_DRAW_MODE,
  SET_PAINT_SIZE,
  SET_COLOR,
  SET_CANVAS_REF, CHANGE_FILL_MODE,
} from '../reducers/drawingReducer';

import {
  SET_IMAGE_URL,
  SET_SELECTED_FILTER,
} from '../reducers/filtersReducer';

import {
  SET_BRIGHTNESS,
  SET_CONTRAST,
  SET_SATURATION,
  SET_SHARPNESS,
  SET_GREYSCALE,
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
    brightness: brightness,
  };
}


export function setContrast(contrast) {
  return {
    type: SET_CONTRAST,
    contrast: contrast,
  };
}


export function setSaturation(saturation) {
  return {
    type: SET_SATURATION,
    saturation: saturation,
  };
}


export function setSharpness(sharpness) {
  return {
    type: SET_SHARPNESS,
    sharpness: sharpness,
  };
}


export function setGreyscale(greyscale) {
  return {
    type: SET_GREYSCALE,
    greyscale: greyscale,
  };
}