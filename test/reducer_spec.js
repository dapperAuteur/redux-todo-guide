import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import { reducer } from '../src/reducer.js';
import { toggleItem } from '../src/action_creators';

describe("reducer()", () => {
    it('returns empty Map if currentState is undefined', () => {
        expect(reducer(undefined, undefined)).to.eq(Map());
    });
    
    describe('TOGGLE_ITEM', () => {
        const currentState = fromJS({ 
            items: [ 
                { id: 3, complete: false }, 
                { id: 2, complete: true } 
            ]
        });
        const action = toggleItem(3);
        
        const nextState = reducer(currentState, action);
        
        it('changes complete for correct item', () => {
            expect(nextState.getIn(['items', 0, 'complete'])).to.eq(true);
        });
        
        it('does not change complete for other items', () => {
            expect(nextState.getIn(['items', 1, 'complete'])).to.eq(true);
        });
    });
});