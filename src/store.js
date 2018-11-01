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
};

export const store = createStore(reducers, initialState);
