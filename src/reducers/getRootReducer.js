'use strict';

const Redux = require('redux');

module.exports = settings => {
    const cards = (require('./ownReducers/getStackCards'))();

    return Redux.combineReducers({
        cards
    });;
}
