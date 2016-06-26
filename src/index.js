import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './components/app';
import { reducer } from './reducer';

// Add CSS files to bundle
require('../src/css/application.scss');

const initialState = fromJS({
    items: [
        {
            id: 1,
            content: "Go to the store",
            complete: true,
            title: "Todo App",
            topic: "Redux",
            category: "Coding",
            playlist: "React Redux",
            side_1: "State Tree/State",
            side_2: "type State = any\nbroad term\nsingle state value that is managed by the store\nand returned by getState()\n\nphotograph taken by reducer/reporter\nas an instance in time"
        },
        {
            id: 2,
            content: "Buy an apple",
            complete: false,
            title: "Todo App",
            topic: "Redux",
            category: "Coding",
            playlist: "React Redux",
            side_1: "Store",
            side_2: "store holds the whole state tree of the application\nthe only way to change the state is to dispatch an action on it\n\nConvenience Store\nKiosk\nwhere you get info from"
        },
        {
            id: 3,
            content: "Buy a pear",
            complete: false,
            title: "Todo App",
            topic: "Redux",
            category: "Coding",
            playlist: "React Redux",
            side_1: "Action",
            side_2: "type Action = Object\na plain object that represents an intention to change the state\nactions are the only way to get data into the store\n\noldState == false\noldState.action == true\n\nMarshawn Lynch"
        }
    ]
});

const store = createStore(reducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);

// Render application to DOM
ReactDOM.render(
    <Provider store={store}>
        <App name="React To-Do" />
    </Provider>,
    document.getElementById('app')
);