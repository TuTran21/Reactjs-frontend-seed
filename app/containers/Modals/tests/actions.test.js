import { ncpAction } from '../actions';
import { ACTION } from '../constants';

describe('Modals actions', () => {
  describe('Default Action', () => {
    it('has a type of ACTION', () => {
      const expected = {
        type: ACTION,
      };
      expect(ncpAction()).toEqual(expected);
    });
  });
});
