import { expect } from 'chai';
import { Map } from 'immutable';

import { reducer } from '../src/reducer.js';



describe("reducer()", () => {
    it('returns empty Map if currentState is undefined', () => {
        expect(reducer(undefined, undefined)).to.eq(Map());
    });
});