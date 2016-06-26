import { Map, fromJS } from 'immutable';

const toggleItem = (currentState, id) => {
    const items = currentState.get('items');
    const itemIndex = items.findIndex( (el) => el.get('id') == id);
    
    const oldItem = items.get(itemIndex);
    const newItem = oldItem.set('complete', !oldItem.get('complete'));
    const newItems = items.set(itemIndex, newItem);
    
    return currentState.merge({items: newItems});
};

const deleteItem = (currentState, id) => {
    const items = currentState.get('items');
    const itemIndex = items.findIndex( (el) => el.get('id') == id);
    
    const newItems = items.remove(itemIndex);
    
    return currentState.merge({items: newItems});
};

const addItem = (currentState, content) => {
    const items = currentState.get('items');
    
    const newItem = { content, id: items.last().get('id') + 1, complete: false }
    
    const newItems = items.push(fromJS(newItem));
    
    return currentState.merge({items: newItems});
};

export function reducer(currentState = new Map(), action) {
    if(action !== undefined) {
        switch(action.type) {
            case 'TOGGLE_ITEM':
                return toggleItem(currentState, action.id);
            case 'DELETE_ITEM':
                return deleteItem(currentState, action.id);
            case 'ADD_ITEM':
                return addItem(currentState, action.content)
        }
    }
    return currentState;
}