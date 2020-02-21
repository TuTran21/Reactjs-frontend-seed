/*
 *
 * Modals reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const modalsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case constants.ACTION:
        break;

      case constants.ACTION_SUCCESS:
        break;

      case constants.ACTION_FAILED:
        break;

      default:
        break;
    }
  });

export default modalsReducer;
