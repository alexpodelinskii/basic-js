const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length || !position) {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let endChain = this.chain.map(el => `( ${el} )`);

    this.chain = [];
    return endChain.join("~~");

  }
};

module.exports = chainMaker;
