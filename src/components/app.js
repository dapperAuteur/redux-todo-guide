import React from 'react';

import { ItemList } from './item_list';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>{ this.props.name }</h1>
                <ItemList items={ this.props.state.get('items') } />
            </div>
        );
    }
}