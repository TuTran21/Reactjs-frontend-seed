import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the talent state domain
 */

const selectTalentDomain = state => state.talent || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Talent
 */

const makeSelectTalent = () =>
  createSelector(
    selectTalentDomain,
    substate => substate,
  );

export default makeSelectTalent;
export { selectTalentDomain };
