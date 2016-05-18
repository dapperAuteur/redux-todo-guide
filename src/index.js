import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';

import { App } from './components/app';

// Add CSS files to bundle
require('../src/css/application.scss');

const state = fromJS({
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

// Render application to DOM
ReactDOM.render(
    <App name="React To-Do" state={state} />,
    document.getElementById('app')
);