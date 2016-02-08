import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const counter = (state = {counter: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + action.howMany};
        case 'DECREMENT':
            return {...state, counter: state.counter - action.howMany};
        default:
            return state;
    }
};

import { applyMiddleware } from 'redux';
import { logger, crashReporter } from './middlewares';

const store = createStore(counter, applyMiddleware(logger, crashReporter));

import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

window.setInterval( () => {
    store.dispatch({type: 'INCREMENT', howMany: 5});
}, 3000 );
