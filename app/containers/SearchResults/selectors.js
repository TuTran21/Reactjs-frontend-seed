import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchResults state domain
 */

const selectSearchResultsDomain = state => state.searchResults || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchResults
 */

const makeSelectSearchResults = () =>
  createSelector(
    selectSearchResultsDomain,
    substate => substate,
  );

export default makeSelectSearchResults;
export { selectSearchResultsDomain };
