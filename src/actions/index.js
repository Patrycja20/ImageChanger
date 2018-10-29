import { SET_DRAW_MODE, SET_PAINT_SIZE, SET_COLOR } from '../reducers/drawingReducer';

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
