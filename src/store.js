import { createStore } from 'redux';
import reducers from './reducers/index';
import { DRAW } from './reducers/drawingReducer';

const initialState = {
  drawing: {
    drawMode: DRAW,
    paintSize: 10,
    color: '#6edb31',
    canvasRef: null,
    isFill: false,
  },
  filters: {
    selectedFilter: null,
    imageURL: null,
  },
  parameters: {
    brightness: 0,
    contrast: 0,
    saturation: 1.0,
    sharpness: 0,
    numberOfShades: 0,
    blackAndWhite: false,
    ableToChange: true,
  }
};

export const store = createStore(reducers, initialState);
