import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const APPEND_DATA = 'data/APPEND_DATA';
const REMOVE_DATA = 'data/REMOVE_DATA';

export const appendData = createAction(APPEND_DATA, data => data);
export const removeData = createAction(REMOVE_DATA, id => id);

const initialState = {
  "0": {
    id: "0",
    work: "첫 번째 할 일"
  },
  "1": {
    id: "1",
    work: "두 번째 할 일"
  }
};

var nextId = Object.keys(initialState).length;

export default handleActions({
  [APPEND_DATA]: (state, action) =>
    produce(state, draft => {
      draft[nextId] = {
        id: nextId,
        ...action.payload
      };
      nextId++;
    }),
  [REMOVE_DATA]: (state, action) =>
    produce(state, draft => {
      delete draft[action.payload];
    })
}, initialState);