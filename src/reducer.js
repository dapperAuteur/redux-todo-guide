import { Map } from 'immutable';

const toggleItem = (currentState, id) => {
    const items = currentState.get('items');
    const itemIndex = items.findIndex( (el) => el.get('id') == id);
    
    const oldItem = items.get(itemIndex);
    const newItem = oldItem.set('complete', !oldItem.get('complete'));
    const newItems = items.set(itemIndex, newItem);
    
    return currentState.merge({items: newItems});
};

export function reducer(currentState = new Map(), action) {
    if(action !== undefined) {
        switch(action.type) {
            case 'TOGGLE_ITEM':
                return toggleItem(currentState, action.id);
        }
    }
    return currentState;
}