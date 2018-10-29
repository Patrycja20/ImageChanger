export const SET_DRAW_MODE = 'SET_DRAW_MODE';
export const SET_PAINT_SIZE = 'SET_PAINT_SIZE';
export const SET_COLOR = 'SET_COLOR';

export const DRAW = 'draw';
export const LINE = 'line';
export const RECTANGLE = 'rectangle';

export const drawingReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DRAW_MODE:
      return { ...state, drawMode: action.drawMode };
    case SET_PAINT_SIZE:
      return { ...state, paintSize: action.paintSize };
    case SET_COLOR:
      return { ...state, color: action.color };
    default:
      return state
  }
};
