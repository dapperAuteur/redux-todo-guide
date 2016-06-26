import React from 'react';

import { ItemListContainer } from './item_list';
import { AddItem, ToDoFormContainer } from './todo_form';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>{ this.props.name }</h1>
                <ItemListContainer />
                <h1>{ this.props.form }</h1>
                <ToDoFormContainer />
            </div>
        );
    }
};