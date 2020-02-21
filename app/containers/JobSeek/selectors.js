import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the jobSeek state domain
 */

const selectJobSeekDomain = state => state.jobSeek || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by JobSeek
 */

const makeSelectJobSeek = () =>
  createSelector(
    selectJobSeekDomain,
    substate => substate,
  );

export default makeSelectJobSeek;
export { selectJobSeekDomain };
