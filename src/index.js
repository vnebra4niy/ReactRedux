import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
    cash: 0
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return {
                ...state,
                cash: state.cash + action.payload
            };
        case "WITHDRAW":
            return {
                ...state,
                cash: state.cash - action.payload
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

// Используйте createRoot вместо ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);