'use strict';

module.exports = class CardStruct {
    constructor(discription) {
        this.discription = discription;
        this.heshTag = HashTag.find(discription);
    }
}
