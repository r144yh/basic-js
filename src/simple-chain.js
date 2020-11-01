const chainMaker = {
    strArr: [],

    getLength() {
        return this.strArr.length;
    },

    addLink(value) {
        if (value !== null || true) {
            this.strArr.push(`( ${value} )`);
        } else {
            this.strArr.push(`( )`);
        }
        return this
    },

    removeLink(position) {
        if (typeof position !== 'number' || this.strArr[position] === undefined || !Number.isInteger(position)) {
            this.strArr = [];
            throw 'Error'
        } else {
            this.strArr.splice(position - 1, 1);
        }
        return this
    },

    reverseChain() {
        this.strArr.reverse();
        return this
    },

    finishChain() {
        let str = this.strArr.join('~~');
        this.strArr = [];
        return str
    }
};

module.exports = chainMaker;
