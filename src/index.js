import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import {createStore} from 'redux';
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
            complete: true
        },
        {
            id: 2,
            content: "Buy an apple",
            complete: false
        },
        {
            id: 3,
            content: "Buy a pear",
            complete: false
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
