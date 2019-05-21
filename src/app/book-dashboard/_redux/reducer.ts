import {GetBooks, Actions, ActionTypes} from './action';

export const initialState = {
  books: []
};

export function Reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.getBooks:
      return { ...state, books: [...action.load] };
    default:
      return state;
  }
}
