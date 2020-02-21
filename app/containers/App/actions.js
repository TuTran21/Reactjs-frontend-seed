/*
 *
 * App actions
 *
 */

import * as constants from './constants';

export function ncpAction() {
  return {
    type: constants.ACTION,
  };
}

export function ncpActionSuccess() {
  return {
    type: constants.ACTION_SUCCESS,
  };
}

export function ncpActionFailed() {
  return {
    type: constants.ACTION_FAILED,
  };
}
