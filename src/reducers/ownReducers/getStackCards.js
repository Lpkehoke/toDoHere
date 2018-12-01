'use strict';

const CardStruct = require('./../../structDate/cardStruct.js');

module.exports = () => (state = [], action) => {
    switch (action.type) {
        case 'add Cards':
            return [
                ...state,
                new CardStruct()
            ];
        default:
            return state;
    }
}
