const chai = require('../test/setup-mocha');

class GuessingGame {
    constructor() {
        this._range = null;
        //middle position
        this._middle = 0;
    }

    display() {
        console.log(this._range);
    }

    setRange(min, max) {
        this._range = Array(max - min).fill().map((item, i) => min + i);
        this._middle = Math.ceil(this._range.length / 2);
    }

    guess() {
        return this._range[this._middle];
    }

    lower() {
        this._range = this._range.slice(0, this._middle);
        this._middle = Math.ceil(this._range.length / 2);
    }

    greater() {
        this._range = this._range.slice(this._middle);
        this._middle = Math.ceil(this._range.length / 2);
    }
}

module.exports = GuessingGame;
