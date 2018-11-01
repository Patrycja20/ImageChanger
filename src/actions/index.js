import {
  SET_DRAW_MODE,
  SET_PAINT_SIZE,
  SET_COLOR,
  SET_CANVAS_REF, CHANGE_FILL_MODE,
} from '../reducers/drawingReducer';

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

