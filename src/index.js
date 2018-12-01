'use strict';
const React = require('react');
const ReactDom = require('react-dom');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;

const setting = require('!./settings/defaultSetting.json');
const rootReducer = (require('./reducers/getRootReducer.js'))(setting);

const App = require('./components/app.jsx');

class toDoHere {
    constructor(selector = '#root') {
        this._mountPoint = document.querySelector(selector);
        this._store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
           serialize: true
        }));

        ReactDom.render(
            <Provider store={this._store}>
                <App />
            </Provider>,
            this._mountPoint
        );
    }
}

let paint = new toDoHere('#root');
