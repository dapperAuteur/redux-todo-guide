import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../action_creators';

let AddItem = ({ dispatch }) => {
    let input
    
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addItem(input.value));
                input.value = '';
            }}>
                <input ref={node => {
                    input = node;
                }} />
                <button type="submit">
                    Add ToDo
                </button>
            </form>
        </div>
    );
};

AddItem = connect()(AddItem);

export default AddItem;

const mapStateToProps = (state) => {
    return {
        items: state.get('items')
    };
}

export const ToDoFormContainer = connect(mapStateToProps)(AddItem);