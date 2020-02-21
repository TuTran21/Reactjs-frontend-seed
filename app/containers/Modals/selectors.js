import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the modals state domain
 */

const selectModalsDomain = state => state.modals || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Modals
 */

const makeSelectModals = () =>
  createSelector(
    selectModalsDomain,
    substate => substate,
  );

export default makeSelectModals;
export { selectModalsDomain };
