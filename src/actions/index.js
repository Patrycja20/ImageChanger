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

export const contactsFetched = (contacts) => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  contacts
});


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
