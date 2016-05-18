import React from 'react';

import { ItemListContainer } from './item_list';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>{ this.props.name }</h1>
                <ItemListContainer />
            </div>
        );
    }
}