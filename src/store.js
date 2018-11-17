import { createStore } from 'redux';
import reducers from './reducers/index';
import { DRAW } from './reducers/drawingReducer';

export const initialStoreState = {
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
    width: null,
    height: null,
  },
  parameters: {
    brightness: 0,
    contrast: 0,
    saturation: 1.0,
    vignetting: 0,
    numberOfShades: 0,
    blackAndWhite: false,
    invertedColor: false,
    red: true,
    green: true,
    blue: true,
    isLoaded: false,
    ableToChange: true,
    canvasRef: true,
  }
};

export const store = createStore(reducers, initialStoreState);