export const SET_SELECTED_FILTER = 'SET_SELECTED_FILTER';
export const SET_IMAGE_URL = 'SET_IMAGE_URL';

export const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.selectedFilter };
    case SET_IMAGE_URL:
      return { ...state, imageURL: action.imageURL };
    default:
      return state
  }
};
