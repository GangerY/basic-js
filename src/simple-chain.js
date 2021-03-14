const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return Object.prototype.toString.call(this.chain) === '[object Array]' ? this.chain.length : 0;
  },

  addLink(value = '') {
    this.chain.push(value === '' ? '( )' : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(isNaN(+position) || position == '' || this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainStr = this.chain.join('~~');
    this.chain = [];
    return chainStr;
  }
};

module.exports = chainMaker;
