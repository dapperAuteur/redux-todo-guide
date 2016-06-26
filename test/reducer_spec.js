import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import { reducer } from '../src/reducer.js';
import { toggleItem, deleteItem, addItem } from '../src/action_creators';

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
        
        const action = { type: "TOGGLE_ITEM", id: 3 };
        
        const nextState = reducer(currentState, action);
        
        it('changes complete for correct item', () => {
            expect(nextState.getIn(['items', 0, 'complete'])).to.eq(true);
        });
        
        it('does not change complete for other items', () => {
            expect(nextState.getIn(['items', 1, 'complete'])).to.eq(true);
        });
    });
    
    describe('DELETE_ITEM', () => {
        const currentState = fromJS({
            items:  [
                { id: 3, complete: false },
                { id: 2, complete: true }
            ]
        });
        
        const action = { type: "DELETE_ITEM", id: 3 };
        
        const nextState = reducer(currentState, action);
        
        it('removes item with id 3 and changes length to 1', () => {
            expect(nextState.get('items').size).to.eq(1);
        });
        
        it('keeps item with id 2 and id 2 is at index 0', () => {
            expect(nextState.getIn(['items', 0, 'id'])).to.eq(2);
        });
    });
    
    describe('ADD_ITEM', () => {
        const currentState = fromJS({
            items: [
                { id: 3, content: "test item 1", complete: false },
                { id: 2, content: "test item 2", complete: true }
            ]
        });
        
        const action = addItem('test item 3');
        
        const nextState = reducer(currentState, action);
        
        it('adds item to List at the end', () => {
            expect(nextState.getIn(['items', -1, 'content'])).to.eq('test item 3');
        });
        
        it('has size of 3', () => {
            expect(nextState.get('items').size).to.eq(3);
        });
    });
});